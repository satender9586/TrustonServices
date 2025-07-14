import { StaticImageData } from 'next/image';


export interface ServiceCardProps {
  itemUrl: StaticImageData;
  itemName: string;
  itemDesc: string;
}