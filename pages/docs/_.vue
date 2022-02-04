<template lang="pug">
  .page#reference
      TheContentList.page__aside( :content-list='links' )
      .page__main
        article.page__content( v-markdown='article.content.body')
        ThePrevNextBox( :nextLink='currentLink.next' :prevLink='currentLink.previous' )
</template>
<script>
import markdown from '@/directives/markdown.directive';

export default {
  async asyncData ({ store, route }) {

    const links = await store.dispatch('links/fetchAll')

    const article = await store.dispatch('content/getOne', { path: `/${route.params.pathMatch}` })

    const currentLink = await store.dispatch('links/fetchOne', article.id);

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
  },
  directives: { markdown }
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
