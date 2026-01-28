import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { OrganizationsService } from '../organizations/organizations.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private organizationsService: OrganizationsService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findByEmail(email);
    if (user && await bcrypt.compare(password, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { 
      email: user.email, 
      sub: user.id, 
      organizationId: user.organizationId,
      role: user.role 
    };
    
    return {
      access_token: this.jwtService.sign(payload),
      refresh_token: this.jwtService.sign(payload, { expiresIn: '7d' }),
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role,
        organizationId: user.organizationId,
      },
    };
  }

  async register(userData: any) {
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    
    // Create organization if not provided
    let organizationId = userData.organizationId;
    if (!organizationId) {
      const orgName = `${userData.firstName}'s Organization`;
      const organization = await this.organizationsService.create({
        name: orgName,
        slug: orgName.toLowerCase().replace(/[^a-z0-9]/g, '-'),
        isActive: true,
      });
      organizationId = organization.id;
    }
    
    const user = await this.usersService.create({
      ...userData,
      password: hashedPassword,
      organizationId,
      role: userData.organizationId ? 'member' : 'owner',
    });
    
    return this.login(user);
  }
}