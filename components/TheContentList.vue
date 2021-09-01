<template lang="pug">
  .contentList
    template( v-for='link of contentList' )
      TheContentListTap( v-if="link.type == 'Chapter'" :title='link.name' :links='link.articles' )
      NuxtLink.contentList__link( v-else :to='`/docs/${link.slug}`' ) {{ link.name }}
</template>
<script>
export default {
  props: {
    contentList: {
      type: Array,
      default: () => []
    }
  }
}
</script>
<style lang="scss">
.contentList {

  margin: 1em;

  &__link {

      padding-block: 1em;
      padding-inline: 2em;
      display: block;
      color: rgb( var(--black) );
      text-decoration: none;

  }

}
</style>
