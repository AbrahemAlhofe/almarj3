<template lang="pug">
    .contentListTap( :class="{ '--open' : isOpen }" )
      .contentListTap__toggleButton( @click='isOpen =! isOpen' )
        .contentListTap__icon: ChevronUpIcon
        .contentListTap__title {{ title }}

      .contentListTap__list
        NuxtLink.contentListTap__link( v-for='link of links' :key='link.slug' :to='`/docs/${link.id}/${link.slug}`' ) {{ link.name }}
</template>
<script>
import ChevronUpIcon from '@/assets/icons/chevron-up.svg?inline'

export default {
  components: { ChevronUpIcon },
  props: {
    title: {
      type: String,
      default: 'No Title'
    },
    links: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      isOpen: false
    }
  }
}
</script>
<style lang="scss">
.contentListTap {

    width: 100%;

    cursor: pointer;

    &.--open {

        .contentListTap__icon {

            transform: rotateZ(180deg)

        }

        .contentListTap__list {

            height: auto;
            overflow: visible;

        }

    }

    &__toggleButton {

        border-radius: .3em;

        display: flex;
        align-items: center;

        padding: 0.6em;
        padding-inline-start: 0.3em;

        color: var(--gray-65);
        font-size: 1.3em;
        font-weight: bold;

        &:hover {

            background-color: var(--gray-95);

        }

    }

    &__icon {

        font-size: 0em;
        margin: 0.3rem;

    }

    &__list {

        height: 0;
        overflow: hidden;

    }

    &__link {

        padding-block: 1em;
        padding-inline: 2em;
        display: block;
        color: var(--black);
        text-decoration: none;

    }

}
</style>
