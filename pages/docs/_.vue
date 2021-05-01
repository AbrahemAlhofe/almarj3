<i18n lang='yaml'>
  ar:
    head:
      title: مرجع برلمان طلائع القاهرة
</i18n>
<template lang="pug">
  .referencePage
      TheContentList( :content-list='contentList' )
      article.referencePage__article: TheArticleContent( :document='article.content.body' )
</template>
<script>
export default {
  async asyncData ({ store, app, redirect, route }) {
    const path = `/${route.params.pathMatch}`
    const currentLocale = app.i18n.locale

    if (path === '/') { return redirect(`/${currentLocale}/docs/intro`) }

    const contentList = await store.dispatch('content/getContentList')

    const article = await store.dispatch('content/getOne', { path })

    return { contentList, article }
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
          content: `${this.article.name} | ${this.$t('head.title')}`
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
