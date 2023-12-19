import type { Film } from '../interfaces'
import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const filmsDirectory = join(process.cwd(), '_films')

export function getFilmSlugs() {
  return fs.readdirSync(filmsDirectory)
}

export function getFilmBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(filmsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items: Film = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllFilms(fields: string[] = []) {
  const slugs = getFilmSlugs()
  const films = slugs
    .map((slug) => getFilmBySlug(slug, fields))
    // sort films by date in descending order
    .sort((film1, film2) => (film1.date > film2.date ? -1 : 1))
  return films
}
