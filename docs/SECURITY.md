# Security Guidelines

## Authentication
- JWT tokens with 1-hour expiration
- Refresh token rotation
- Password hashing with bcrypt

## Data Protection
- Multi-tenant data isolation
- Input validation and sanitization
- SQL injection prevention

## Rate Limiting
- 100 requests per minute per IP
- Authentication endpoint protection