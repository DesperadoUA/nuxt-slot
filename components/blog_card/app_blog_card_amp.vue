<template>
  <amp-script
    layout="container"
    :src="`${config.BASE_URL}/amp-blog.js`"
    class="sample"
  >
    <section class="blog_card_wrapper">
      <div class="container">
        <div class="blog_card_item" v-for="item in currentPosts" :key="item.id">
          <div class="blog_card_item_left">
            <div class="blog_card_item_img_wrapper">
              <amp-img
                :src="item.thumbnail"
                class="blog_card_item_thumbnail"
                width="320"
                height="190"
              ></amp-img>
            </div>
          </div>
          <div class="blog_card_item_right">
            <div class="blog_card_item_title">
              <NuxtLink
                no-prefetch
                :to="`${config.AMP_PREFIX}${item.permalink}`"
                class="blog_card_item_permalink"
                v-html="item.title"
              >
              </NuxtLink>
            </div>
            <div
              class="blog_card_item_author"
            >
              <p>
                {{ translates.REVIEW_AUTHOR[config.LANG] }}:
                <span>{{ item.author }}</span> {{ item.date | post_data }}
              </p>
            </div>
            <div class="blog_card_item_excerpt">
              {{ item.excerpt }}
            </div>
            <div class="blog_card_item_btn_wrapper">
              <NuxtLink
                no-prefetch
                :to="`${config.AMP_PREFIX}${item.permalink}`"
                class="blog_card_item_btn"
              >
                {{ translates.DETAILED_OVERVIEW[config.LANG] }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
      <div class="container loadContainer"></div>
      <div
        class="casino_table_btn_wrapper"
        v-if="posts.length > numberPostOnQuery * postCurrentPage"
      >
        <button
          class="btn_review loadMoreBtn"
          :data-apiUrl="config.API_URL"
          :data-postsOnQuery="numberPostOnQuery"
          :data-ampPrefix="config.AMP_PREFIX"
          :data-translate-review-author="translates.REVIEW_AUTHOR[config.LANG]"
          :data-translate-detailed-overview="translates.DETAILED_OVERVIEW[config.LANG]"
        >
          {{ translates.DOWNLOAD_MORE[config.LANG] }}
        </button>
      </div>
    </section>
  </amp-script>
</template>
<script>
import translateMixin from "~/mixins/translate.js";
export default {
  name: "app_casino_loop",
  props: ["posts"],
  mixins: [translateMixin],
  data() {
    return {
      numberPostOnQuery: 8,
      postCurrentPage: 1
    };
  },
  computed: {
    currentPosts() {
      return this.posts.slice(0, this.numberPostOnQuery * this.postCurrentPage);
    }
  },
  filters: {
    post_data(item) {
      return item.slice(0, -9);
    }
  },
  methods: {
    postShowMore() {
      this.postCurrentPage += 1;
    }
  }
};
</script>
