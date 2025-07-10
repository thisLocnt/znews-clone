import { fetchDummyData } from '@/lib/data-fetcher';
import {
  MultiMediaData,
  FrontNewsData,
  NewsColumnsData,
  CategoryData,
} from '@/interfaces/news.type';
import { TBasicNews, TFeaturedNews, TMagazine } from '@/interfaces/common.type';
import TrendingNews from '@/components/sections/TrendingNews';
import FrontNews from '@/components/sections/FrontNews';
import Books from '@/components/sections/Books';
import MultiMedia from '@/components/sections/MultiMedia';
import FeaturedNews from '@/components/sections/FeaturedNews';
import NewsColumns from '@/components/sections/NewsColumns';
import NewsByCategory from '@/components/sections/NewsByCategory';
import Magazine from '@/components/sections/Magazine';
import Videos from '@/components/sections/Videos';

async function fetchHomeData() {
  try {
    const [
      frontNews,
      books,
      multiMedia,
      featureNews,
      businessNews,
      lifestyleNews,
      newsByCategory,
      magazine,
    ] = await Promise.all([
      fetchDummyData<FrontNewsData>('front-news'),
      fetchDummyData<TBasicNews[]>('books'),
      fetchDummyData<MultiMediaData>('multi-media'),
      fetchDummyData<TFeaturedNews[]>('featured-news'),
      fetchDummyData<NewsColumnsData>('business'),
      fetchDummyData<NewsColumnsData>('lifestyle'),
      fetchDummyData<CategoryData[]>('category'),
      fetchDummyData<TMagazine[]>('magazine'),
    ]);
    return {
      frontNews,
      books,
      multiMedia,
      featureNews,
      businessNews,
      lifestyleNews,
      newsByCategory,
      magazine,
    };
  } catch (error) {
    console.error('Failed to fetch home data:', error);
    return null; // Handle error gracefully in production
  }
}

export default async function Home() {
  const data = await fetchHomeData();

  if (!data) {
    return <div>Error loading content. Please try again later.</div>;
  }

  const {
    frontNews,
    books,
    multiMedia,
    featureNews,
    businessNews,
    lifestyleNews,
    newsByCategory,
    magazine,
  } = data;

  return (
    <main className="w-full px-6 mx-auto mb-16 space-y-8 bg-white max-w-container">
      <div className="hidden py-4 mb-2 md:block">
        <TrendingNews />
      </div>

      <FrontNews {...frontNews} />

      <Books data={books} />

      <div className="p-8 bg-yellow-100">
        <MultiMedia {...multiMedia} />
      </div>

      <FeaturedNews data={featureNews} />

      <NewsColumns title="KINH DOANH" {...businessNews} />

      <NewsColumns title="Lifestyle" {...lifestyleNews} />

      <NewsByCategory data={newsByCategory} />

      <Magazine data={magazine} />

      <section className="hidden lg:block">
        <Videos />
      </section>
    </main>
  );
}
