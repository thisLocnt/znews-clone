import { TArticle } from '@/interfaces/article.type';
import { TBasicNews, TFeaturedNews } from '@/interfaces/common.type';

export const generateDummyNews = (
  count: number,
  isFeatured = false,
): (TBasicNews | TFeaturedNews)[] => {
  const categories = ['Xã Hội', 'Kinh Doanh', 'Thể Thao', 'Công Nghệ', 'Giải Trí'];
  return Array.from({ length: count }, (_, i) => ({
    id: `dummy-${i}`,
    title: `Tin Tức ${categories[i % categories.length]} ${i + 1}`,
    href: `/article/dummy-${i}`,
    imageUrl: `https://placehold.co/600x400?text=${categories[i % categories.length]}`,
    altText: `Hình ảnh tin tức ${i + 1}`,
    ...(isFeatured && { description: `<p>Mô tả chi tiết cho tin tức ${i + 1}.</p>` }),
  }));
};

export const generateDummyArticle = (slug: string): TArticle => {
  const categories = ['Xã Hội', 'Kinh Doanh', 'Thể Thao', 'Công Nghệ', 'Giải Trí'];
  const category = categories[Math.floor(Math.random() * categories.length)];
  return {
    id: `article-${slug}`,
    slug,
    title: `Bài Viết: ${slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())}`,
    category,
    publishedAt: new Date(Date.now() - Math.random() * 86400000).toISOString(), // Random date within last 24 hours
    imageUrl: `https://placehold.co/800x400?text=${category}`,
    altText: `Hình ảnh bài viết ${slug}`,
    content: `
      <h2>Giới thiệu</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <img src="https://placehold.co/600x400?text=Hình+Ảnh" alt="Hình ảnh minh họa" class="w-full my-4" />
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <blockquote class="border-l-4 border-orange-600 pl-4 italic my-4">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</blockquote>
      <h2>Chi tiết</h2>
      <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    `,
    relatedArticles: generateDummyNews(3),
  };
};
