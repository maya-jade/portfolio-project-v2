export interface Project {
  title: string;
  description: string;
  link?: string;
  caseStudy?: string;
  featured?: boolean;
}

export interface Service {
  title: string;
  description: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}
