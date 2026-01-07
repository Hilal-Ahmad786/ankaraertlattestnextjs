// Common types used throughout the application

export interface PageMetadata {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
}

export interface NavigationItem {
  label: string;
  href: string;
  icon?: string;
  children?: NavigationItem[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface ContactInfo {
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  email: string;
  address?: string;
}

export interface CTAButton {
  text: string;
  href: string;
  variant?: 'primary' | 'secondary' | 'success' | 'outline';
  icon?: string;
  onClick?: () => void;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  author?: string;
  publishedAt: string;
  updatedAt?: string;
  tags?: string[];
}

export interface ServiceCard {
  icon: string;
  title: string;
  description: string;
  link?: string;
}

export interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

export interface TimelineStep {
  number: number;
  icon: string;
  title: string;
  description: string;
}

export interface City {
  id: string;
  slug: string;
  name: string;
  region: string;
  plateCode: string;
  isPopular: boolean;
  heroImage: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  content: string;
  districts: string[];
  advantages: string[];
}