import Blog from '@/pages/Blog'
import Article from '@/templates/Article'
import Category from '@/templates/Category'
export default [
  {
    path: '/',
    name: 'blog',
    component: Blog
  },
  {
    path: '/articles/:slug',
    name: 'article',
    component: Article
  },
  {
    path: '/categories/:slug',
    name: 'categories',
    component: Category
  }
]
