import { FrontNewsData } from '@/interfaces/page-data';
import { FeaturedCard, TileCard, ThumbnailCard } from '../elements/NewsCard';

export default function FrontNews({ featured, thumb, tile }: FrontNewsData) {
  return (
    <section className="grid grid-cols-12 gap-4">
      <div className="col-span-12 md:col-span-3 order-last md:order-none">
        <div className="flex flex-col gap-4">
          {tile.map((news) => (
            <TileCard
              key={news.id}
              href={news.href}
              title={news.title}
              altText={news.altText}
              imageUrl={news.imageUrl}
            />
          ))}
        </div>
      </div>
      <div className="col-span-12 md:col-span-7 order-1 md:order-none">
        {featured.map((news) => (
          <FeaturedCard
            key={news.id}
            href={news.href}
            title={news.title}
            altText={news.altText}
            imageUrl={news.imageUrl}
            description={news.description}
          />
        ))}
      </div>
      <div className="col-span-12 md:col-span-2 order-2 md:order-none">
        <div className="flex flex-col gap-8">
          {thumb.map((news) => (
            <ThumbnailCard
              key={news.id}
              href={news.href}
              title={news.title}
              altText={news.altText}
              imageUrl={news.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
