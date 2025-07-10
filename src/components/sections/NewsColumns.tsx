import { TBasicNews, TFeaturedNews } from '@/interfaces/common.type';
import Headline from '@/components/elements/Headline';
import { FeaturedCard, TileCard, ThumbnailCard } from '../elements/NewsCard';

interface Props {
  title: string;
  featured: TFeaturedNews;
  tile: TBasicNews[];
  thumb: TBasicNews[];
}

export default function NewsColumns({ title, featured, thumb, tile }: Props) {
  return (
    <section>
      <Headline label={title} />
      <div className="mt-4 grid grid-cols-12 gap-4">
        <div className="col-span-full lg:col-span-6">
          <FeaturedCard
            href={featured.href}
            title={featured.title}
            altText={featured.altText}
            imageUrl={featured.imageUrl}
            description={featured.description}
          />
        </div>
        <div className="col-span-full sm:col-span-6 lg:col-span-3 flex flex-col gap-4">
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
        <div className="col-span-full sm:col-span-6 lg:col-span-3 flex flex-col gap-4">
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
