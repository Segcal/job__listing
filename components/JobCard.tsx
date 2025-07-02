import Link from 'next/link';
import { Job } from '@/types/job';
import { MapPin, Clock, DollarSign, Building } from 'lucide-react';

interface JobCardProps {
  job: Job;
}

export default function JobCard({ job }: JobCardProps) {
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
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-200 animate-slide-up">
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">
            {job.title}
          </h3>
          <div className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
            <Building className="h-4 w-4 mr-2" />
            <span className="font-medium">{job.company}</span>
          </div>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(job.type)}`}>
          {job.type}
        </span>
      </div>

      <div className="space-y-2 mb-4">
        <div className="flex items-center text-gray-600 dark:text-gray-300">
          <MapPin className="h-4 w-4 mr-2" />
          <span>{job.location}</span>
        </div>
        
        {job.salaryRange && (
          <div className="flex items-center text-gray-600 dark:text-gray-300">
            <DollarSign className="h-4 w-4 mr-2" />
            <span>{job.salaryRange}</span>
          </div>
        )}
        
        <div className="flex items-center text-gray-500 dark:text-gray-400">
          <Clock className="h-4 w-4 mr-2" />
          <span>Posted {new Date(job.postedDate).toLocaleDateString()}</span>
        </div>
      </div>

      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
        {job.description}
      </p>

      <div className="flex justify-between items-center">
        <span className="inline-block bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm">
          {job.category}
        </span>
        <Link
          href={`/jobs/${job.id}`}
          className="inline-flex items-center px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors duration-200 font-medium"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}