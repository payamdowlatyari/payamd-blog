import type { Book } from "../interfaces";
import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const booksDirectory = join(process.cwd(), "_books");

export function getBookSlugs() {
  return fs.readdirSync(booksDirectory);
}

export function getBookBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(booksDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const items: Book = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllBooks(fields: string[] = []) {
  const slugs = getBookSlugs();
  const books = slugs
    .map((slug) => getBookBySlug(slug, fields))
    // sort books by date in descending order
    .sort((book1, book2) => (book1.date > book2.date ? -1 : 1));
  return books;
}
