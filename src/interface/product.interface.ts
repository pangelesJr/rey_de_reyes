
export interface IProduct {
  id: number;
  name: string;
  autor?: string;
  price: string;
  discount?: number;
  description: string;
  features?: Record<string, string>;
  category: string;
  image: string;
  details: string;
  keywords: string[];
}