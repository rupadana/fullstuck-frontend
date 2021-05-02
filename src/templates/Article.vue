<template>
  <Layout v-if="article">
    <div
      class="site-cover site-cover-sm same-height overlay single-page"
      :style="
        `background-image: url('${getStrapiMedia(article[0].image.url)}');`
      "
    >
      <div class="container">
        <div class="row same-height justify-content-center">
          <div class="col-md-12 col-lg-10">
            <div class="post-entry text-center">
              <span class="post-category text-white bg-success mb-3">{{
                article[0].category.name
              }}</span>
              <h1 class="mb-4">
                <a href="#">{{ article[0].title }}</a>
              </h1>
              <div class="post-meta align-items-center text-center">
                <figure class="author-figure mb-0 mr-3 d-inline-block">
                  <img
                    :src="getStrapiMedia(article[0].author.picture.url)"
                    alt="Image"
                    class="img-fluid"
                  />
                </figure>
                <span class="d-inline-block mt-1"
                  >By {{ article[0].author.name }}</span
                >
                <span
                  >&nbsp;-&nbsp;
                  {{
                    moment(article[0].published_at).format('MMM Do YY')
                  }}</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section class="site-section py-lg">
      <div class="container">
        <div class="row blog-entries element-animate">
          <div class="col-md-12 col-lg-8 main-content">
            <div class="post-content-body">
              <VueMarkdown
                :source="convertContentMedia(article[0].content)"
                id="editor"
              />
            </div>
          </div>
          <div class="col-md-12 col-lg-4 sidebar">
            <div class="sidebar-box search-form-wrap">
              <form action="#" class="search-form">
                <div class="form-group">
                  <span class="icon fa fa-search"></span>
                  <input
                    type="text"
                    class="form-control"
                    id="s"
                    placeholder="Type a keyword and hit enter"
                  />
                </div>
              </form>
            </div>
            <!-- END sidebar-box -->
            <div class="sidebar-box">
              <div class="bio text-center">
                <img
                  :src="getStrapiMedia(article[0].author.picture.url)"
                  alt="Image Placeholder"
                  class="img-fluid mb-5"
                />
                <div class="bio-body">
                  <h2>{{ article[0].author.name }}</h2>
                  <p class="mb-4">{{ article[0].author.bio }}</p>
                  <p>
                    <a href="#" class="btn btn-primary btn-sm rounded px-4 py-2"
                      >Read my bio</a
                    >
                  </p>
                  <p class="social">
                    <a href="#" class="p-2"
                      ><span class="fa fa-facebook"></span
                    ></a>
                    <a href="#" class="p-2"
                      ><span class="fa fa-twitter"></span
                    ></a>
                    <a href="#" class="p-2"
                      ><span class="fa fa-instagram"></span
                    ></a>
                    <a href="#" class="p-2"
                      ><span class="fa fa-youtube-play"></span
                    ></a>
                  </p>
                </div>
              </div>
            </div>
            <!-- END sidebar-box -->

            <div class="sidebar-box">
              <h3 class="heading">Categories</h3>
              <ul class="categories">
                <li v-for="(category, index) in categories" :key="index">
                  <router-link
                    :to="{
                      name: 'categories',
                      params: { slug: category.slug }
                    }"
                    :key="category.id"
                  >
                    {{ category.name }}
                  </router-link>
                </li>
              </ul>
            </div>
            <!-- END sidebar-box -->
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
import gql from 'graphql-tag'
import { convertContentMedia, getStrapiMedia } from '../utils/medias'
import VueMarkdown from 'vue-markdown'
import moment from 'moment'

export default {
  components: {
    VueMarkdown
  },
  methods: {
    getStrapiMedia,
    convertContentMedia
  },
  apollo: {
    article: {
      query: gql`
        query Article($slug: String!) {
          article: articles(where: { slug: $slug }) {
            slug
            title
            publishedAt
            content
            category {
              name
            }
            image {
              url
            }
            author {
              name
              bio
              picture {
                url
              }
            }
          }
        }
      `,
      variables () {
        return { slug: this.slug }
      }
    },
    categories: gql`
      query Categories {
        categories {
          slug
          name
        }
      }
    `
  },
  data () {
    return {
      slug: this.$route.params.slug,
      moment: moment
    }
  }
}
</script>
