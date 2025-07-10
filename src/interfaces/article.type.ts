import { TBasicNews } from "./common.type";

export interface TArticle {
  id: string;
  slug: string;
  title: string;
  category: string;
  publishedAt: string;
  imageUrl: string;
  altText: string;
  content: string;
  relatedArticles: TBasicNews[];
}

