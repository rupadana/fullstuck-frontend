<template>
  <div class="row">
    <Card v-for="article in articles" :article="article" :key="article.id" />
  </div>
</template>

<script>
import Card from './Card'

export default {
  props: {
    articles: Array
  },
  components: {
    Card
  },
  computed: {
    leftArticlesCount () {
      return Math.ceil(this.articles.length / 5)
    },
    leftArticles () {
      return this.articles.slice(0, this.leftArticlesCount)
    },
    rightArticles () {
      return this.articles.slice(this.leftArticlesCount, this.articles.length)
    }
  }
}
</script>
