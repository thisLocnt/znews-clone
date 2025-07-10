export interface BasicNews {
  id?: string;
  href: string;
  imageUrl: string;
  title: string;
  altText: string;
}

export interface FeaturedNews extends BasicNews {
  description: string;
}

export interface Magazine {
  id: string;
  label: string;
  title: string;
  link: string;
  imageUrl: string;
}
