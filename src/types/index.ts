export interface Service {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

export interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

export interface Testimonial {
  name: string;
  image: string;
  text: string;
  rating: number;
  wedding: string;
}

export interface Package {
  name: string;
  icon: string;
  price: string;
  description: string;
  features: string[];
  popular: boolean;
  color: string;
}

export interface GoogleSheetsData {
  services: Service[];
  gallery: GalleryImage[];
  testimonials: Testimonial[];
  packages: Package[];
}