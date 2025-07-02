export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'Remote' | 'Hybrid' | 'On-site';
  salaryRange?: string;
  description: string;
  requirements: string[];
  benefits: string[];
  howToApply: string;
  postedDate: string;
  category: string;
}

export interface JobFormData {
  title: string;
  company: string;
  location: string;
  type: 'Remote' | 'Hybrid' | 'On-site';
  salaryRange: string;
  description: string;
  requirements: string;
  benefits: string;
  howToApply: string;
  category: string;
}