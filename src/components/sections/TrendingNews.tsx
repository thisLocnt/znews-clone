import HashTagLink from '@/components/elements/HashTagLink';
import { TrendingUp } from 'lucide-react';
import { trendingNews } from '@/data/dummy-data';

export default function TrendingNews() {
  return (
    <section className="flex gap-4 items-center">
      <div className="bg-amber-500 rounded-full p-2">
        <TrendingUp color="white" size={16} />
      </div>
      <ul className="flex flex-wrap gap-4">
        {trendingNews.map((news) => (
          <li key={news.id}>
            <HashTagLink href={news.link} label={news.name} />
          </li>
        ))}
      </ul>
    </section>
  );
}
