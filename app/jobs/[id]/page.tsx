"use client";

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getJobById } from '../../../lib/jobs';
import { ArrowLeft, MapPin, Clock, DollarSign, Building, CheckCircle, Mail } from 'lucide-react';

interface JobDetailPageProps {
  params: {
    id: string;
  };
}

export default function JobDetailPage({ params }: JobDetailPageProps) {
  const job = getJobById(params.id);

  if (!job) {
    notFound();
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Remote':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Hybrid':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'On-site':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back Button */}
      <Link
        href="/"
        className="inline-flex items-center text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 mb-6 transition-colors duration-200"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Jobs
      </Link>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden animate-fade-in">
        {/* Header */}
        <div className="p-8 border-b border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
            <div className="flex-1 mb-4 md:mb-0">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
                {job.title}
              </h1>
              <div className="flex items-center text-gray-600 dark:text-gray-300 mb-4">
                <Building className="h-5 w-5 mr-2" />
                <span className="text-xl font-medium">{job.company}</span>
              </div>
            </div>
            <span className={`px-4 py-2 rounded-full text-sm font-medium ${getTypeColor(job.type)}`}>
              {job.type}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center text-gray-600 dark:text-gray-300">
              <MapPin className="h-5 w-5 mr-3" />
              <span>{job.location}</span>
            </div>
            
            {job.salaryRange && (
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <DollarSign className="h-5 w-5 mr-3" />
                <span>{job.salaryRange}</span>
              </div>
            )}
            
            <div className="flex items-center text-gray-500 dark:text-gray-400">
              <Clock className="h-5 w-5 mr-3" />
              <span>Posted {new Date(job.postedDate).toLocaleDateString()}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <section className="animate-slide-up">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Job Description
                </h2>
                <div className="prose prose-gray dark:prose-invert max-w-none">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {job.description}
                  </p>
                </div>
              </section>

              {/* Requirements */}
              <section className="animate-slide-up animate-delay-100">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Requirements
                </h2>
                <ul className="space-y-3">
                  {job.requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Benefits */}
              <section className="animate-slide-up animate-delay-200">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Benefits
                </h2>
                <ul className="space-y-3">
                  {job.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Apply Section */}
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 animate-slide-up animate-delay-300">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  How to Apply
                </h3>
                <div className="flex items-start mb-4">
                  <Mail className="h-5 w-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {job.howToApply}
                  </p>
                </div>
                <button className="w-full bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg transition-colors duration-200 font-medium">
                  Apply Now
                </button>
              </div>

              {/* Job Info */}
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 animate-slide-up animate-delay-400">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Job Information
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500 dark:text-gray-400">Category:</span>
                    <span className="text-gray-900 dark:text-white font-medium">{job.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500 dark:text-gray-400">Job Type:</span>
                    <span className="text-gray-900 dark:text-white font-medium">{job.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500 dark:text-gray-400">Posted:</span>
                    <span className="text-gray-900 dark:text-white font-medium">
                      {new Date(job.postedDate).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>

              {/* Share */}
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 animate-slide-up animate-delay-500">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Share this Job
                </h3>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href);
                    alert('Job link copied to clipboard!');
                  }}
                  className="w-full bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500 text-gray-900 dark:text-white px-4 py-2 rounded-lg transition-colors duration-200 text-sm font-medium"
                >
                  Copy Link
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}