export type User = {
  name: string;
  picture: string;
  sub: string;
  email?: string;
};

export type Comment = {
  id: string;
  created_at: number;
  url: string;
  text: string;
  user: User;
};

export type Post = {
  slug?: string;
  title?: string;
  author?: string;
  img?: string;
  medium?: string;
  date?: Date;
  content?: string;
  excerpt?: string;
  [key: string]: any;
};

export type Book = {
  slug?: string;
  title?: string;
  author?: string;
  img?: string;
  goodreads?: string;
  date?: Date;
  content?: string;
  excerpt?: string;
  [key: string]: any;
};

export type Film = {
  slug?: string;
  title?: string;
  director?: string;
  img?: string;
  imdb?: string;
  date?: Date;
  content?: string;
  excerpt?: string;
  rate?: string;
  [key: string]: any;
};

export type Photo = {
  slug?: string;
  title?: string;
  src?: string;
  date?: Date;
  content?: string;
  excerpt?: string;
  [key: string]: any;
};
