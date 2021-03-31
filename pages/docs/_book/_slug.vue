<template lang="pug">
  article.article: TheArticleContent( :document='article.content.body' )
</template>
<script>
export default {
  async asyncData ({ params, store, redirect, app }) {
    const currentLocale = app.i18n.locale
    const book = params.book
    const slug = params.slug

    if (!book) { return redirect(`/${currentLocale}/docs/intro/what-is-political`) }

    const article = await store.dispatch('content/getOne', { book, slug })

    return { article }
  }
}
</script>
<style lang="scss">
</style>
