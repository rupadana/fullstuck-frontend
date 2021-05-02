<template>
  <div class="col-lg-4 mb-4">
    <router-link
      :to="{ name: 'article', params: { slug: article.slug } }"
      class="uk-link-reset"
      :key="article.id"
    >
      <div class="entry2">
        <img
          :src="getStrapiMedia(article.image.url)"
          alt="Image"
          class="img-fluid rounded"
        />
        <div class="excerpt">
          <span
            class="post-category text-white bg-secondary mb-3"
            v-if="article.category"
            >{{ article.category.name }}</span
          >

          <h2>{{ article.title }}</h2>
          <div class="post-meta align-items-center text-left clearfix">
            <figure class="author-figure mb-0 mr-3 float-left">
              <img
                :src="getStrapiMedia(article.author.picture.url)"
                alt="Image"
                class="img-fluid"
              />
            </figure>
            <span class="d-inline-block mt-1"
              >By <a href="#">{{ article.author.name }}</a></span
            >
            <span
              >&nbsp;-&nbsp;
              {{ moment(article.publishedAt).format('MMM Do YY') }}
            </span>
          </div>
          <p>
            {{ article.description }}
          </p>

          <p><a href="#">Read More</a></p>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import moment from 'moment'
import { getStrapiMedia } from '../utils/medias'

export default {
  data () {
    return {
      moment: moment
    }
  },
  props: {
    article: Object
  },
  methods: {
    getStrapiMedia
  }
}
</script>
