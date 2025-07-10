import Link from 'next/link';
import { CategoryData } from '@/interfaces/news.type';
import Headline from '@/components/elements/Headline';
import { ThumbnailCard, TileCard } from '../elements/NewsCard';

export default function NewsByCategory({ data }: { data: CategoryData[] }) {
  return (
    <section className="grid grid-cols-12 gap-x-4 gap-y-12">
      {data.map((cate) => (
        <div className="col-span-12 sm:col-span-6 lg:col-span-3" key={cate.category.label}>
          <Link href={cate.category.link} className="block">
            <Headline label={cate.category.label} />
          </Link>
          <div className="border-y border-gray-200 py-4">
            <TileCard
              href={cate.data.featured.href}
              title={cate.data.featured.title}
              altText={cate.data.featured.altText}
              imageUrl={cate.data.featured.imageUrl}
            />
          </div>
          <div className="flex flex-col gap-4 mt-6">
            {cate.data.tile.map((news) => (
              <ThumbnailCard
                key={news.id}
                href={news.href}
                title={news.title}
                altText={news.altText}
                imageUrl={news.imageUrl}
                isReverse
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
