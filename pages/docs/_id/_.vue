<template lang="pug">
  .page#reference
      TheContentList.page__aside( :content-list='links' )
      .page__main
        article.page__content( v-markdown='article.content.body')
        ThePrevNextBox( :nextLink='currentLink.next' :prevLink='currentLink.previous' )
</template>
<script>
import markdown from '@/directives/markdown.directive'

export default {
  directives: { markdown },
  async asyncData ({ store, route }) {
    console.log(route.params.id)

    const links = await store.dispatch('links/fetchAll')

    const article = await store.dispatch('content/getArticleById', route.params.id)

    const currentLink = await store.dispatch('links/fetchOne', article.id)

    console.log({ prev: currentLink.previous, next: currentLink.next })

    return { links, article, currentLink }
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
          hid: 'og:site_name',
          property: 'og:site_name',
          content: 'مرجع برلمان طلائع القاهرة'
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: process.env.BASE_URL + '/screenshot.png'
        },
        {
          property: 'og:image:type',
          content: 'image/png'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `${this.article.name} | مرجع برلمان طلائع القاهرة`
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.article.content.description
        },
        {
          hid: 'og:locale',
          property: 'og:locale',
          content: this.article.lang === 'default' ? 'ar' : this.article.lang
        },
        {
          hid: 'og:type',
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
.page#reference {

  min-height : 100vh;
  display: flex;
  background-color: var( --white );

  .page__main {

    display: flex;
    flex-direction: column;

  }

  .page__content {

    flex-grow: 1;
    padding: 1em;
    color: var(--black);

    p { text-align: justify }
    img { width: 100% }

  }

  .page__aside {

    width: 45em;

    display: none;

    @media (min-width: 768px) { display: block }

  }

}
</style>
