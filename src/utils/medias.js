import { backendUrl } from '../constants'

function getStrapiMedia (url) {
  // Check if URL is a local path
  if (url.startsWith('/')) {
    // Prepend Strapi address
    return `${backendUrl || 'http://localhost:1337'}${url}`
  }
  // Otherwise return full URL
  return url
}

function convertContentMedia (content) {
  return content
    .split('/uploads/')
    .join(`${backendUrl || 'http://localhost:1337'}/uploads/`)
}

export { getStrapiMedia, convertContentMedia }
