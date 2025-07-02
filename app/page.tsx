'use client';

import { useState, useEffect } from 'react';
import { getJobs, searchJobs } from '../lib/jobs';
import { Job } from '../types/job';
import JobCard from '../components/JobCard';
import SearchFilters from '../components/SearchFilters';
import { Briefcase, TrendingUp, Users, Globe } from 'lucide-react';

export default function Home() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const allJobs = getJobs();
    setJobs(allJobs);
    setFilteredJobs(allJobs);
    setLoading(false);
  }, []);

  const handleSearch = (query: string, location: string, type: string) => {
    const results = searchJobs(query, location, type);
    setFilteredJobs(results);
  };

  const stats = [
    { icon: Briefcase, label: 'Active Jobs', value: jobs.length.toString() },
    { icon: Users, label: 'Companies', value: new Set(jobs.map(job => job.company)).size.toString() },
    { icon: Globe, label: 'Remote Jobs', value: jobs.filter(job => job.type === 'Remote').length.toString() },
    { icon: TrendingUp, label: 'This Week', value: '12' },
  ];

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mb-4"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3 mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-64 bg-gray-200 dark:bg-gray-700 rounded-xl"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12 animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Find Your Dream <span className="text-primary-600">Remote Job</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Discover amazing opportunities with top tech companies. Work from anywhere, anytime.
        </p>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <div 
              key={stat.label} 
              className={`bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-200 dark:border-gray-700 animate-slide-up animate-delay-${(index + 1) * 100}`}
            >
              <div className="flex items-center justify-center mb-2">
                <stat.icon className="h-6 w-6 text-primary-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Search Filters */}
      <SearchFilters onSearch={handleSearch} />

      {/* Results Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          {filteredJobs.length === jobs.length 
            ? `All Jobs (${filteredJobs.length})` 
            : `Search Results (${filteredJobs.length})`
          }
        </h2>
        {filteredJobs.length !== jobs.length && (
          <button
            onClick={() => {
              setFilteredJobs(jobs);
            }}
            className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 font-medium"
          >
            Clear filters
          </button>
        )}
      </div>

      {/* Job Listings */}
      {filteredJobs.length === 0 ? (
        <div className="text-center py-12">
          <Briefcase className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            No jobs found
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Try adjusting your search criteria or check back later for new opportunities.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map((job, index) => (
            <div key={job.id} className={`animate-slide-up animate-delay-${(index % 3 + 1) * 100}`}>
              <JobCard job={job} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}