<template lang="pug">
  .referencePage
      TheContentList( :content-list='contentList' )
      .referencePage__body
        article.referencePage__article: TheArticleContent( :document='article.content.body' )
        ThePrevNextBox.referencePage__prevNextBox( :next-link='currentLink.next_link' :prev-link='currentLink.prev_link' )
</template>
<script>
export default {
  
  async asyncData ({ store, app, redirect, route }) {

    redirect(`/docs/intro`)

    return {}
  
  }

}
</script>
<style lang='scss'></style>
