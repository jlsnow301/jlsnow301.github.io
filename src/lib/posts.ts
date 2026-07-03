import type { CollectionEntry } from "astro:content";

export function sortPosts(posts: CollectionEntry<"blog">[]) {
  return posts.toSorted((left, right) => {
    return right.data.date.valueOf() - left.data.date.valueOf();
  });
}

export function postHref(id: string) {
  return `/posts/${id}/`;
}

export function formatDate(date: Date) {
  return date.toISOString().slice(0, 10).replaceAll("-", ".");
}

export function postTag(post: CollectionEntry<"blog">) {
  return post.data.tag ?? "notes";
}
