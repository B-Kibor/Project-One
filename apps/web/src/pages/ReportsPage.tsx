import { useState } from 'react';

export default function ReportsPage() {
  const [dateRange, setDateRange] = useState('30d');
  const [reportType, setReportType] = useState('performance');
  const [isGenerating, setIsGenerating] = useState(false);

  const reports = [
    { id: '1', name: 'Portfolio Performance Report', type: 'performance', date: '2024-01-15', status: 'ready' },
    { id: '2', name: 'User Activity Report', type: 'activity', date: '2024-01-14', status: 'generating' },
    { id: '3', name: 'Risk Assessment Report', type: 'risk', date: '2024-01-13', status: 'ready' },
    { id: '4', name: 'Monthly Summary', type: 'summary', date: '2024-01-01', status: 'ready' },
  ];

  const handleGenerateReport = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      alert(`Generated ${reportType} report for ${dateRange}`);
    }, 2000);
  };

  const handleDownload = (reportName: string) => {
    alert(`Downloading ${reportName}`);
  };

  const metrics = {
    totalReturn: 156780,
    avgPerformance: 8.4,
    bestPortfolio: 'Tech Focus (+15.7%)',
    worstPortfolio: 'Startup Investments (-2.1%)',
    totalUsers: 12,
    activeUsers: 10,
    newUsers: 3,
    portfolioCount: 28
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent mb-2">Reports & Analytics</h1>
          <p className="text-slate-600 dark:text-slate-400">Generate and view performance reports</p>
        </div>
        <button 
          onClick={handleGenerateReport}
          disabled={isGenerating}
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-medium hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          {isGenerating ? (
            <div className="flex items-center">
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
              Generating...
            </div>
          ) : (
            'Generate Report'
          )}
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg mb-8 border border-slate-200/50 dark:border-slate-700/50">
        <div className="flex gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Date Range</label>
            <select 
              value={dateRange} 
              onChange={(e) => setDateRange(e.target.value)} 
              className="px-4 py-3 border border-slate-200 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            >
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="90d">Last 90 days</option>
              <option value="1y">Last year</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Report Type</label>
            <select 
              value={reportType} 
              onChange={(e) => setReportType(e.target.value)} 
              className="px-4 py-3 border border-slate-200 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            >
              <option value="performance">Performance</option>
              <option value="activity">User Activity</option>
              <option value="risk">Risk Analysis</option>
              <option value="summary">Summary</option>
            </select>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-slate-200/50 dark:border-slate-700/50">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400">Total Return</h3>
            <span className="text-2xl">💰</span>
          </div>
          <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">${metrics.totalReturn.toLocaleString()}</p>
        </div>
        <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-slate-200/50 dark:border-slate-700/50">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400">Avg Performance</h3>
            <span className="text-2xl">📈</span>
          </div>
          <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{metrics.avgPerformance}%</p>
        </div>
        <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-slate-200/50 dark:border-slate-700/50">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400">Active Users</h3>
            <span className="text-2xl">👥</span>
          </div>
          <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">{metrics.activeUsers}/{metrics.totalUsers}</p>
        </div>
        <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-slate-200/50 dark:border-slate-700/50">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400">Portfolios</h3>
            <span className="text-2xl">💼</span>
          </div>
          <p className="text-2xl font-bold text-amber-600 dark:text-amber-400">{metrics.portfolioCount}</p>
        </div>
      </div>

      {/* Charts Placeholder */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-slate-200/50 dark:border-slate-700/50">
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">Performance Trend</h3>
          <div className="h-64 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-600 rounded-xl flex items-center justify-center">
            <div className="text-center">
              <span className="text-4xl mb-2 block">📈</span>
              <span className="text-slate-500 dark:text-slate-400">Chart: Performance over time</span>
            </div>
          </div>
        </div>
        <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-slate-200/50 dark:border-slate-700/50">
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">Portfolio Distribution</h3>
          <div className="h-64 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-600 rounded-xl flex items-center justify-center">
            <div className="text-center">
              <span className="text-4xl mb-2 block">🍰</span>
              <span className="text-slate-500 dark:text-slate-400">Chart: Portfolio allocation</span>
            </div>
          </div>
        </div>
      </div>

      {/* Reports List */}
      <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-2xl shadow-lg border border-slate-200/50 dark:border-slate-700/50">
        <div className="px-8 py-6 border-b border-slate-200/50 dark:border-slate-700/50">
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Generated Reports</h3>
        </div>
        <div className="divide-y divide-slate-200/50 dark:divide-slate-700/50">
          {reports.map((report) => (
            <div key={report.id} className="px-8 py-6 flex justify-between items-center hover:bg-slate-50/50 dark:hover:bg-slate-700/30 transition-colors duration-200">
              <div>
                <h4 className="font-medium text-slate-900 dark:text-white">{report.name}</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400">Generated on {report.date}</p>
              </div>
              <div className="flex items-center space-x-4">
                <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                  report.status === 'ready' 
                    ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300' 
                    : 'bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300'
                }`}>
                  {report.status}
                </span>
                {report.status === 'ready' && (
                  <button 
                    onClick={() => handleDownload(report.name)}
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium px-4 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-200"
                  >
                    Download
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}