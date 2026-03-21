
export interface IProduct {
  id: number;
  name: string;
  autor?: string;
  stock?: number;
  price: string | number;
  discount?: number;
  description: string;
  features?: Record<string, string | undefined>;
  category: string;
  image: string;
  details: string;
  keywords: string[];
}