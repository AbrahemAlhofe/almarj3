<template lang="pug"></template>
<script>
export default {

  async asyncData ({ store, redirect, route }) {
    const article = await store.dispatch('content/getArticleById', route.params.id)

    redirect(`/docs/${article.id}/${article.slug}`)

    return {}
  }

}
</script>
<style lang='scss'></style>
