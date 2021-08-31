<template lang="pug">
    .nextPrevBox
        NuxtLink( v-if='nextLink' :to='`/docs/${nextLink.slug}`' ).nextPrevBox__nextLink
            RightChevronIcon
            span {{ nextLink.name }}
        NuxtLink( v-if='prevLink' :to='`/docs/${prevLink.slug}`' ).nextPrevBox__previousLink
            span {{ prevLink.name }}
            LeftChevronIcon
</template>
<script>
import RightChevronIcon from '@/assets/icons/chevron-right.svg?inline'
import LeftChevronIcon from '@/assets/icons/chevron-left.svg?inline'

export default {
  components: { RightChevronIcon, LeftChevronIcon },
  props: {
    nextLink: {
      type: Object,
      default: () => ({})
    },
    prevLink: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>
<style lang='scss'>
.nextPrevBox {
    display: flex;
    justify-content: space-around;
    align-content: center;
    a {
        font-weight: bold;
        text-decoration: none;
        color: rgb(var(--blue-100));
        padding: 0.5em;
        border-radius: 5px;
        display: flex;
        align-items: center;
    }
}
</style>
