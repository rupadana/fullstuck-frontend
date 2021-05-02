<template>
  <Layout v-if="homepage">
    <div class="site-section">
      <div class="container">
        <div class="row mb-5">
          <div class="col-12">
            <h2>{{ homepage.hero.title }}</h2>
          </div>
        </div>
        <div class="container">
          <Articles :articles="articles" />
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import Articles from '../../components/Articles'
import gql from 'graphql-tag'

export default {
  apollo: {
    homepage: gql`
      query Homepage {
        homepage {
          hero {
            title
          }
          seo {
            metaTitle
            metaDescription
            shareImage {
              url
            }
          }
        }
      }
    `,
    articles: gql`
      query Articles {
        articles(
          limit: 6
          where: { status: "published" }
          sort: "publishedAt:desc"
        ) {
          slug
          title
          publishedAt
          description
          category {
            name
          }
          image {
            url
          }
          author {
            name
            picture {
              url
            }
          }
        }
      }
    `
  },
  components: {
    Articles
  },
  data () {
    return {
      articles: []
    }
  }
}
</script>

<style></style>
