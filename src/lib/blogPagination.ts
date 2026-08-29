import type { CollectionEntry } from 'astro:content';

export const BLOG_FIRST_PAGE_SIZE = 9;
export const BLOG_PAGE_SIZE = 12;

export type BlogPost = CollectionEntry<'blog'>;

export function sortBlogPosts(posts: BlogPost[]) {
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export function getBlogTotalPages(totalPosts: number) {
  if (totalPosts <= BLOG_FIRST_PAGE_SIZE) return 1;

  return 1 + Math.ceil((totalPosts - BLOG_FIRST_PAGE_SIZE) / BLOG_PAGE_SIZE);
}

export function getBlogPagePosts(posts: BlogPost[], page: number) {
  if (page === 1) return posts.slice(0, BLOG_FIRST_PAGE_SIZE);

  const start = BLOG_FIRST_PAGE_SIZE + (page - 2) * BLOG_PAGE_SIZE;
  return posts.slice(start, start + BLOG_PAGE_SIZE);
}

export function getBlogPageHref(page: number) {
  return page === 1 ? '/blog' : `/blog/page/${page}`;
}
