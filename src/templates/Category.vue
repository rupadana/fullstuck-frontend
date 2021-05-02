<template>
  <Layout>
    <div class="py-5 bg-light" v-if="categories">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <span>Category</span>
            <h3>{{ categories[0].name }}</h3>
          </div>
        </div>
      </div>
    </div>
    <div class="site-section bg-white" v-if="categories">
      <div class="container">
        <div class="row">
          <Articles :articles="categories[0].articles"> </Articles>
        </div>
        <div class="row text-center pt-5 border-top">
          <div class="col-md-12">
            <div class="custom-pagination">
              <span>1</span>
              <a href="#">2</a>
              <a href="#">3</a>
              <a href="#">4</a>
              <span>...</span>
              <a href="#">15</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import Articles from '@/components/Articles'
import gql from 'graphql-tag'

export default {
  apollo: {
    categories: {
      query: gql`
        query Categories($slug: String!) {
          categories(where: { slug: $slug }) {
            name
            articles(where: { status: "published" }) {
              id
              title
              content
              slug
              image {
                url
              }
              category {
                name
              }
              author {
                name
                picture {
                  url
                }
              }
            }
          }
        }
      `,
      variables () {
        return {
          slug: this.slug
        }
      }
    }
  },
  data () {
    return {
      slug: this.$route.params.slug
    }
  },
  components: {
    Articles
  },
  metaInfo () {}
}
</script>
