// import Image from 'next/image';
// import Link from 'next/link';
// import { notFound } from 'next/navigation';
// import Headline from '@/components/elements/Headline';
// import { TArticle } from '@/interfaces/article.type';
// import { TitleCard } from '@/components/elements/NewsCard';
// import { BACKEND_URL } from '@/lib/config';

// async function fetchArticle(slug: string): Promise<TArticle> {
//   const response = await fetch(`${BACKEND_URL}/api/news?endpoint=article&slug=${slug}`, {
//     next: { revalidate: 3600 }, // ISR for 1 hour
//   });
//   if (!response.ok) {
//     throw new Error('Failed to fetch article');
//   }
//   return response.json();
// }

// export default async function ArticlePage({ params }: {params: Promise<{ id: string, slug: string }>}) {
//   try {
//     const article = await fetchArticle((await params).id);

//     return (
//       <main className="w-full px-6 mx-auto bg-white max-w-container">
//         <article className="grid grid-cols-12 gap-6 py-8">
//           {/* Main Content */}
//           <div className="col-span-12 lg:col-span-8">
//             <div className="mb-4">
//               <Link
//                 href={`/${article.category.toLowerCase().replace(/ /g, '-')}`}
//                 className="inline-block px-3 py-1 text-sm font-semibold text-white bg-orange-600 rounded">
//                 {article.category}
//               </Link>
//             </div>
//             <h1 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">{article.title}</h1>
//             <div className="mb-4 text-sm text-gray-500">
//               {new Date(article.publishedAt).toLocaleString('vi-VN', {
//                 dateStyle: 'medium',
//                 timeStyle: 'short',
//               })}
//             </div>
//             <div className="relative mb-6 aspect-16/9">
//               <Image
//                 src={article.imageUrl}
//                 fill
//                 sizes="(max-width: 768px) 100vw, 800px"
//                 alt={article.altText}
//                 className="object-cover rounded"
//               />
//             </div>
//             <div
//               className="prose prose-lg text-gray-800 max-w-none"
//               dangerouslySetInnerHTML={{ __html: article.content }}
//             />
//           </div>

//           {/* Sidebar */}
//           <aside className="col-span-12 lg:col-span-4">
//             <Headline label="Bài viết liên quan" />
//             <div className="flex flex-col gap-6 mt-4">
//               {article.relatedArticles.map((news) => (
//                 <TitleCard
//                   key={news.id}
//                   href={news.href}
//                   title={news.title}
//                   imageUrl={news.imageUrl}
//                   altText={news.altText}
//                 />
//               ))}
//             </div>
//           </aside>
//         </article>
//       </main>
//     );
//   } catch (error) {
//     notFound();
//   }
// }

export default function NewsDetail() {
  return (
    <div className="px-4 py-10 mx-auto text-center uppercase max-w-container">
      News Articles Details
    </div>
  );
}
