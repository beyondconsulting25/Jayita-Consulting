export interface Competency {
  icon: string;
  title: string;
  description: string;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  category: string;
  badge: string;
  metrics: string;
  challenge: string;
  solution: string;
  sampleFile?: string;
}

export interface BookingInquiry {
  id: string;
  fullName: string;
  email: string;
  companyName: string;
  businessStage: string;
  servicesRequired: string[];
  additionalContext: string;
  date: string;
}
