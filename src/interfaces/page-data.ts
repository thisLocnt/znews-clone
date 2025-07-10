import { BasicNews, FeaturedNews } from "./front-news";

export interface FrontNewsData {
  tile: BasicNews[];
  featured: FeaturedNews[];
  thumb: BasicNews[];
}

export interface MultiMediaData {
  featured: FeaturedNews[];
  thumb: BasicNews[];
}

export interface ThreeColumnData {
  featured: FeaturedNews;
  tile: BasicNews[];
  thumb: BasicNews[];
}

export interface CategoryData {
  category: {
    link: string;
    label: string;
  };
  data: {
    featured: BasicNews;
    tile: BasicNews[];
  };
}