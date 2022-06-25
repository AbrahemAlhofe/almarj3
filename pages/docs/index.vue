<template lang="pug">
  .referencePage
      TheContentList( :content-list='contentList' )
      .referencePage__body
        article.referencePage__article: TheArticleContent( :document='article.content.body' )
        ThePrevNextBox.referencePage__prevNextBox( :next-link='currentLink.next_link' :prev-link='currentLink.prev_link' )
</template>
<script>
export default {

  asyncData ({ store, app, redirect, route }) {
    redirect('/docs/43894185/intro')

    return {}
  }

}
</script>
<style lang='scss'></style>
