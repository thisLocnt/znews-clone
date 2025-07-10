export interface TBasicNews {
  id?: string;
  href: string;
  imageUrl: string;
  title: string;
  altText: string;
  isReverse?: boolean;
}

export interface TFeaturedNews extends TBasicNews {
  description: string;
}

export interface TMagazine {
  id: string;
  label: string;
  title: string;
  link: string;
  imageUrl: string;
  description?: string;
}
