export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}

export enum ProjectCategory {
  FullStack = 'full-stack',
  Frontend = 'frontend',
  Backend = 'backend',
}

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  category: ProjectCategory;
  featured: boolean;
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  company?: string;
  startDate?: string;
  endDate?: string;
  order?: number;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate?: string;
  description: string[];
  techStack: string[];
  logoUrl?: string;
  companyUrl?: string;
  order?: number;
}

export interface ContactRequest {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

export interface ContactResponse {
  ok: boolean;
}
