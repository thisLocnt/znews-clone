import { TBasicNews, TFeaturedNews } from "./common.type";

export interface FrontNewsData {
  tile: TBasicNews[];
  featured: TFeaturedNews[];
  thumb: TBasicNews[];
}

export interface MultiMediaData {
  featured: TFeaturedNews[];
  thumb: TBasicNews[];
}

export interface NewsColumnsData {
  featured: TFeaturedNews;
  tile: TBasicNews[];
  thumb: TBasicNews[];
}

export interface CategoryData {
  category: {
    link: string;
    label: string;
  };
  data: {
    featured: TBasicNews;
    tile: TBasicNews[];
  };
}