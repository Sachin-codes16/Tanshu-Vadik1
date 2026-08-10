import { Product } from '../types';

export interface ApiProduct {
  productID: string;
  productName: string;
  thumbnailImage: string;
  shortDescription: string;
  material: string;
  sizes: string;
  productSlug: string;
  productColor?: { image: string }[];
}

export function mapApiProduct(item: ApiProduct): Product {
  return {
    id: item.productID,
    name: item.productName,
    collection: 'home-decor',
    subcategory: 'Rugs',
    image: item.thumbnailImage,
    description: item.shortDescription,
    material: item.material,
    dimensions: item.sizes,
    leadTime: '',
    minOrderQuantity: '',
    slug: item.productSlug,
    colors: (item.productColor ?? []).map((c) => c.image),
  };
}
