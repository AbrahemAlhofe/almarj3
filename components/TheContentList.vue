<template lang="pug">
  .contentList
    template( v-for='tap of contentList' )
      TheContentListTap( :title='tap.title' :links='tap.links' )

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
  display: none;

  @media (min-width: 768px) { display: block }

}
</style>
