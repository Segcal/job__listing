import { Job } from '@/types/job';

export const mockJobs: Job[] = [
  {
    id: '1',
    title: 'Senior Frontend Developer',
    company: 'TechCorp',
    location: 'San Francisco, CA',
    type: 'Remote',
    salaryRange: '$120,000 - $160,000',
    description: 'We are looking for a Senior Frontend Developer to join our dynamic team. You will be responsible for building scalable web applications using modern JavaScript frameworks.',
    requirements: [
      '5+ years of experience with React/Next.js',
      'Strong knowledge of TypeScript',
      'Experience with state management (Redux, Zustand)',
      'Familiarity with testing frameworks (Jest, Cypress)',
      'Understanding of web performance optimization'
    ],
    benefits: [
      'Competitive salary and equity',
      'Health, dental, and vision insurance',
      'Flexible working hours',
      'Professional development budget',
      'Remote work stipend'
    ],
    howToApply: 'Send your resume and portfolio to careers@techcorp.com',
    postedDate: '2024-01-15',
    category: 'Engineering'
  },
  {
    id: '2',
    title: 'Full Stack Engineer',
    company: 'StartupXYZ',
    location: 'New York, NY',
    type: 'Hybrid',
    salaryRange: '$100,000 - $140,000',
    description: 'Join our fast-growing startup as a Full Stack Engineer. You\'ll work on both frontend and backend systems, helping to scale our platform.',
    requirements: [
      '3+ years of full-stack development experience',
      'Proficiency in React and Node.js',
      'Experience with databases (PostgreSQL, MongoDB)',
      'Knowledge of cloud platforms (AWS, GCP)',
      'Strong problem-solving skills'
    ],
    benefits: [
      'Equity package',
      'Health insurance',
      'Flexible PTO',
      'Learning and development opportunities',
      'Modern office space'
    ],
    howToApply: 'Apply through our website at startupxyz.com/careers',
    postedDate: '2024-01-12',
    category: 'Engineering'
  },
  {
    id: '3',
    title: 'DevOps Engineer',
    company: 'CloudTech Solutions',
    location: 'Austin, TX',
    type: 'Remote',
    salaryRange: '$110,000 - $150,000',
    description: 'We\'re seeking a DevOps Engineer to help us build and maintain our cloud infrastructure. You\'ll work with cutting-edge technologies to ensure our systems are scalable and reliable.',
    requirements: [
      '4+ years of DevOps experience',
      'Strong knowledge of AWS/Azure/GCP',
      'Experience with containerization (Docker, Kubernetes)',
      'Proficiency in Infrastructure as Code (Terraform, CloudFormation)',
      'Understanding of CI/CD pipelines'
    ],
    benefits: [
      'Competitive salary',
      'Comprehensive health benefits',
      'Remote work flexibility',
      'Professional certification support',
      'Annual team retreats'
    ],
    howToApply: 'Email your resume to devops-jobs@cloudtech.com',
    postedDate: '2024-01-10',
    category: 'DevOps'
  },
  {
    id: '4',
    title: 'Product Designer',
    company: 'DesignStudio',
    location: 'Los Angeles, CA',
    type: 'On-site',
    salaryRange: '$90,000 - $120,000',
    description: 'We\'re looking for a creative Product Designer to join our team. You\'ll be responsible for designing user-centered digital experiences.',
    requirements: [
      '3+ years of product design experience',
      'Proficiency in Figma, Sketch, or Adobe Creative Suite',
      'Strong understanding of UX/UI principles',
      'Experience with design systems',
      'Portfolio demonstrating design process'
    ],
    benefits: [
      'Creative work environment',
      'Health and wellness benefits',
      'Professional development budget',
      'Flexible work arrangements',
      'Design tool subscriptions'
    ],
    howToApply: 'Submit your portfolio and resume to design@designstudio.com',
    postedDate: '2024-01-08',
    category: 'Design'
  },
  {
    id: '5',
    title: 'Backend Developer',
    company: 'DataFlow Inc',
    location: 'Seattle, WA',
    type: 'Remote',
    salaryRange: '$105,000 - $135,000',
    description: 'Join our backend team to build robust APIs and data processing systems. You\'ll work with large-scale distributed systems.',
    requirements: [
      '4+ years of backend development experience',
      'Strong knowledge of Python or Java',
      'Experience with microservices architecture',
      'Database design and optimization skills',
      'Understanding of system design principles'
    ],
    benefits: [
      'Stock options',
      'Comprehensive insurance',
      'Remote work support',
      'Conference attendance budget',
      'Flexible schedule'
    ],
    howToApply: 'Apply at dataflow.com/careers or email backend@dataflow.com',
    postedDate: '2024-01-05',
    category: 'Engineering'
  }
];

let jobs = [...mockJobs];

export const getJobs = (): Job[] => {
  return jobs;
};

export const getJobById = (id: string): Job | undefined => {
  return jobs.find(job => job.id === id);
};

export const addJob = (jobData: Omit<Job, 'id' | 'postedDate'>): Job => {
  const newJob: Job = {
    ...jobData,
    id: Date.now().toString(),
    postedDate: new Date().toISOString().split('T')[0]
  };
  jobs.unshift(newJob);
  return newJob;
};

export const searchJobs = (query: string, location: string, type: string): Job[] => {
  return jobs.filter(job => {
    const matchesQuery = query === '' || 
      job.title.toLowerCase().includes(query.toLowerCase()) ||
      job.company.toLowerCase().includes(query.toLowerCase()) ||
      job.category.toLowerCase().includes(query.toLowerCase());
    
    const matchesLocation = location === '' || 
      job.location.toLowerCase().includes(location.toLowerCase());
    
    const matchesType = type === '' || job.type === type;
    
    return matchesQuery && matchesLocation && matchesType;
  });
};