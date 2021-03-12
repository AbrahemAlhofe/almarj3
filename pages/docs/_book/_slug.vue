<template lang="pug">
  article.article: NuxtContent( :document='article' )
</template>
<script>
export default {
  async asyncData ({ params, $content, app }) {
    const lang = app.i18n.locale
    const book = params.book
    const slug = params.slug
    const path = `${lang}/${book}/${slug}`

    const article = await $content(path).fetch()

    return { article }
  }
}
</script>
<style lang="scss">
</style>
