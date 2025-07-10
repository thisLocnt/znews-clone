import { fetchDummyData } from "@/lib/data-fetcher";
import {
  MultiMediaData,
  FrontNewsData,
  ThreeColumnData,
  CategoryData,
} from "@/interfaces/page-data";
import {
  BasicNews,
  FeaturedNews as FNews,
  Magazine as MZ,
} from "@/interfaces/front-news";
import TrendingNews from "@/components/sections/TrendingNews";
import FrontNews from "@/components/sections/FrontNews";
import Books from "@/components/sections/Books";
import MultiMedia from "@/components/sections/MultiMedia";
import FeaturedNews from "@/components/sections/FeaturedNews";
import NewsColumns from "@/components/sections/NewsColumns";
import NewsByCategory from "@/components/sections/NewsByCategory";
import Magazine from "@/components/sections/Magazine";
import Videos from "@/components/sections/Videos";

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
      fetchDummyData<FrontNewsData>("front-news"),
      fetchDummyData<BasicNews[]>("books"),
      fetchDummyData<MultiMediaData>("multi-media"),
      fetchDummyData<FNews[]>("featured-news"),
      fetchDummyData<ThreeColumnData>("business"),
      fetchDummyData<ThreeColumnData>("lifestyle"),
      fetchDummyData<CategoryData[]>("category"),
      fetchDummyData<MZ[]>("magazine"),
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
    console.error("Failed to fetch home data:", error);
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
    <main className="w-full px-6 mx-auto bg-white max-w-container">
      <section className="hidden py-4 md:block">
        <TrendingNews />
      </section>

      <section className="mt-4">
        <FrontNews {...frontNews} />
      </section>

      <section className="mt-8">
        <Books data={books} />
      </section>

      <section className="p-8 mt-8 bg-yellow-100">
        <MultiMedia {...multiMedia} />
      </section>

      <section className="mt-8">
        <FeaturedNews data={featureNews} />
      </section>

      <section className="mt-8">
        <NewsColumns title="KINH DOANH" {...businessNews} />
      </section>

      <section className="mt-8">
        <NewsColumns title="Lifestyle" {...lifestyleNews} />
      </section>

      <section className="mt-8">
        <NewsByCategory data={newsByCategory} />
      </section>

      <section className="mt-8">
        <Magazine data={magazine} />
      </section>

      <section className="hidden mt-8 lg:block">
        <Videos />
      </section>
    </main>
  );
}
