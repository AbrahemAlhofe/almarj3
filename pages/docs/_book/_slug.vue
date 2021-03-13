<template lang="pug">
  article.article: TheArticleContent( :document='article.content.body' )
</template>
<script>
export default {
  async asyncData ({ params, store }) {
    const book = params.book
    const slug = params.slug

    const article = await store.dispatch('articles/getOne', { book, slug })

    return { article }
  }
}
</script>
<style lang="scss">
</style>
