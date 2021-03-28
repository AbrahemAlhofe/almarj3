<template lang="pug">
  .contentList
    template( v-for='( links, tapTitle ) in contentList' )
      TheContentListTap( :title='tapTitle' :links='links' )

</template>
<script>
export default {
  props: {
    contentList: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>
<style lang="scss">
.contentList {

  width: 20vw;
  padding: 1em;

}
</style>
