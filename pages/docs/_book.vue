<template lang="pug">
  .referencePage
      TheContentList( :content-list='contentList' )
      NuxtChild.referencePage__content
</template>
<script>
export default {
  async asyncData ({ store }) {
    if (store.state.timestamp === null) {
      await store.dispatch('content/getSpace').then((space) => {
        store.commit('setTimestamp', space.version)
      })
    }

    const articles = await store.dispatch('content/getAll', {
      version: 'published'
    })

    store.commit('content/cashArticles', articles)

    return { contentList: store.getters['content/contentList'] }
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
