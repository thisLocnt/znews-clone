import { NextResponse } from 'next/server';
import {
  FrontNewsData,
  MultiMediaData,
  CategoryData,
  NewsColumnsData,
} from '@/interfaces/news.type';
import { TFeaturedNews, TMagazine } from '@/interfaces/common.type';
import { generateDummyNews, generateDummyArticle } from '@/lib/utils/dummy-article-data';

// Mock category data
const generateDummyCategoryData = (): CategoryData[] => {
  return [
    {
      category: { label: 'Xã Hội', link: '/xa-hoi' },
      data: {
        featured: generateDummyNews(1, true)[0] as TFeaturedNews,
        tile: generateDummyNews(3),
      },
    },
    {
      category: { label: 'Kinh Doanh', link: '/kinh-doanh' },
      data: {
        featured: generateDummyNews(1, true)[0] as TFeaturedNews,
        tile: generateDummyNews(3),
      },
    },
  ];
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const endpoint = searchParams.get('endpoint');
  const slug = searchParams.get('slug');

  try {
    if (endpoint === 'article' && slug) {
      // Return dummy article for the given slug
      const article = generateDummyArticle(slug);
      return NextResponse.json(article, { status: 200 });
    }

    // Existing endpoints for homepage data
    const dummyData = {
      'front-news': {
        featured: generateDummyNews(2, true),
        tile: generateDummyNews(3),
        thumb: generateDummyNews(3),
      } as FrontNewsData,
      'multi-media': {
        featured: generateDummyNews(1, true),
        thumb: generateDummyNews(4),
      } as MultiMediaData,
      category: generateDummyCategoryData(),
      business: {
        featured: generateDummyNews(1, true)[0],
        tile: generateDummyNews(3),
        thumb: generateDummyNews(3),
      } as NewsColumnsData,
      lifestyle: {
        featured: generateDummyNews(1, true)[0],
        tile: generateDummyNews(3),
        thumb: generateDummyNews(3),
      } as NewsColumnsData,
      magazine: generateDummyNews(4).map((item, i) => ({
        id: `dummy-mag-${i}`,
        title: item.title,
        link: item.href,
        imageUrl: item.imageUrl,
        label: `Category ${i + 1}`,
      })) as TMagazine[],
      books: generateDummyNews(5),
      'featured-news': generateDummyNews(3, true),
    };

    return NextResponse.json(
      dummyData[endpoint as keyof typeof dummyData] || { error: 'Invalid endpoint' },
      { status: 200 },
    );
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}
