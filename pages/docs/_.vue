<template lang="pug">
  .referencePage
      TheContentList( :content-list='links' )
      .referencePage__body
        article.referencePage__article: TheArticleContent( :document='article.content.body' )
</template>
<script>
export default {
  async asyncData ({ store, route }) {
    const links = await store.dispatch('links/fetchAll')

    const article = await store.dispatch('content/getOne', { path: `/${route.params.pathMatch}` })

    return { links, article }
  },
  head () {
    return {

      title: this.article.name,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.article.content.description
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.article.tag_list.join(', ')
        },

        // Open Graph
        {
          property: 'og:title',
          content: `${this.article.name} | مرجع برلمان طلائع القاهرة`
        },
        {
          property: 'og:description',
          content: this.article.content.description
        },
        {
          property: 'og:locale',
          content: this.article.lang === 'default' ? 'ar' : this.article.lang
        },
        {
          property: 'og:type',
          content: 'article'
        },
        {
          property: 'og:article:published',
          content: this.article.first_published_at
        },
        {
          property: 'og:article:modified_time',
          content: this.article.published_at
        },
        {
          property: 'og:article:tag',
          content: this.article.tag_list.join(', ')
        }

      ]

    }
  }
}
</script>
<style lang='scss'>
.referencePage {

  min-height : 100vh;
  display: flex;

  &__content {

    flex-grow: 1

  }

}
</style>
