<template lang="pug">
    #nextPrevBox
        template( v-if='nextLink' )
          NuxtLink( :to='`/docs/${nextLink.slug}`' ).link#next
              RightChevronIcon
              .link__body
                div {{ nextLink.name }}
                span التالي
        template( v-if='prevLink' )
          NuxtLink( v-if='prevLink' :to='`/docs/${prevLink.slug}`' ).link#previous
              .link__body
                div {{ prevLink.name }}
                span السابق
              LeftChevronIcon
</template>
<script>
import RightChevronIcon from '@/assets/icons/chevron-right.svg?inline'
import LeftChevronIcon from '@/assets/icons/chevron-left.svg?inline'

export default {
  components: { RightChevronIcon, LeftChevronIcon },
  props: ['nextLink', 'prevLink']
}
</script>
<style lang='scss'>
#nextPrevBox {
    display: flex;
    justify-content: space-between;
    padding: 1em;
    flex-wrap: wrap;
    gap: 1em;
    .link {
        font-weight: bold;
        text-decoration: none;
        color: var(--blue-45);
        padding: 0.5em;
        border-radius: 5px;
        display: flex;
        border: 1px solid var(--blue-45);
        align-items: center;
        @media (max-width: 425px) { flex-grow: 1 }
        &__body {
          margin-inline: 1em;
          flex-grow: 1;
          div {
            line-height: 15px;
            margin-bottom: -5px;
          }
          span {
            font-size: 0.75rem;
            color: var(--gray-65);
            font-weight: 400;
          }
        }
    }
}
</style>
