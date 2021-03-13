<template lang="pug">
  .referencePage
      TheContentList( :content-list='contentList' )
      NuxtChild.referencePage__content
</template>
<script>
import generateContentList from '@/compositions/generateContentList'

export default {
  async asyncData ({ app, redirect, $config, params, store }) {
    const currentLocale = app.i18n.locale

    if (!params.book) { redirect(`${currentLocale}/${$config.reference.homePage}`) }

    const articles = await store.dispatch('articles/getAll', {
      version: 'published'
    })

    const contentList = generateContentList(articles)

    return { contentList }
  }
}
</script>
<style lang='scss'>
.referencePage {

  height : 100vh;
  display: flex;

  &__content {

    flex-grow: 1

  }

}
</style>
