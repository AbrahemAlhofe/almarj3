<template lang="pug">
  .referencePage
      TheContentList( :content-list='contentList' )
      NuxtChild.referencePage__content
</template>
<script>
export default {
  async asyncData ({ store }) {
    if (store.state.contentVersion === null) {
      await store.dispatch('content/getSpace').then((space) => {
        store.commit('setContentVersion', space.version)
      })
    }

    const contentList = await store.dispatch('content/getContentList')

    return { contentList }
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
