import type { Photo } from '../interfaces'
import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const photosDirectory = join(process.cwd(), '_photos')

export function getPhotoSlugs() {
  return fs.readdirSync(photosDirectory)
}

export function getPhotoBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(photosDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items: Photo = {}

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

export function getAllPhotos(fields: string[] = []) {
  const slugs = getPhotoSlugs()
  const photos = slugs
    .map((slug) => getPhotoBySlug(slug, fields))
    // sort photos by date in descending order
    .sort((photo1, photo2) => (photo1.date > photo2.date ? -1 : 1))
  return photos
}