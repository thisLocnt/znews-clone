import Link from 'next/link';
import { MultiMediaData } from '@/interfaces/news.type';
import Headline from '@/components/elements/Headline';
import { FeaturedCard, ThumbnailCard } from '../elements/NewsCard';

const mediaList = [
  { id: '1', label: 'VIDEO', link: '/video' },
  { id: '2', label: 'PODCAST', link: '/podcast' },
  { id: '3', label: 'LONGFORM', link: '/longform' },
  { id: '4', label: 'STORY', link: '/story' },
  { id: '5', label: 'QUIZZ', link: '/quizz' },
];

export default function MultiMedia({ featured, thumb }: MultiMediaData) {
  return (
    <section className="bg-yellow-100 p-6">
      <div className="flex flex-col md:flex-row gap-6 md:items-center">
        <Headline label="MULTIMEDIA" />
        <nav className="hidden md:block">
          <ul className="flex gap-4">
            {mediaList.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.link}
                  className="font-semibold text-gray-900 hover:text-orange-500"
                  aria-label={item.label}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="grid grid-cols-12 gap-4 mt-4">
        <div className="col-span-12 md:col-span-6">
          <FeaturedCard
            altText={featured[0].altText}
            description={featured[0].description}
            title={featured[0].title}
            href={featured[0].href}
            imageUrl={featured[0].imageUrl}
          />
        </div>
        <div className="col-span-full md:col-span-6 grid grid-cols-subgrid gap-4">
          {thumb.map((news) => (
            <div className="col-span-full sm:col-span-6 md:col-span-3" key={news.id}>
              <ThumbnailCard
                altText={news.altText}
                title={news.title}
                href={news.href}
                imageUrl={news.imageUrl}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
