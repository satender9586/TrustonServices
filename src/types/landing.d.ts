import { StaticImageData } from 'next/image';


export interface ServiceCardProps {
  itemUrl: StaticImageData;
  itemName: string;
  itemDesc: string;
}

// Why chooseus page
export interface WhyChooseUsItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
}

export interface WhyChooseUsCrauselProps {
    data: WhyChooseUsItem[];
}


export interface CompanyLovesItem {
  imgs: StaticImageData;
  title: string;
}

export interface CompaniesLovesProps {
  data: CompanyLovesItem[];
}
