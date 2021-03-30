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

  margin: 1em;
  display: none;

  @media (min-width: 768px) { display: block }

}
</style>
