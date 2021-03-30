<template lang="pug">
    .contentListTap( :class="{ '--open' : isOpen }" )
      .contentListTap__toggleButton( @click='isOpen =! isOpen' )
        .contentListTap__icon: ChevronUpIcon
        .contentListTap__title {{ title }}

      .contentListTap__list
        NuxtLink.contentListTap__link( v-for='( slug, title ) in links' :key='slug' :to='localePath(`/docs/${slug}`)' ) {{ title }}
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
      type: Object,
      default: () => ({})
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

    width: max-content;

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

        color: rgb( var(--gray-400) );
        font-size: 1.3em;
        font-weight: bold;

        &:hover {

            background-color: rgb( var(--gray-100) );

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
        color: rgb( var(--black) );
        text-decoration: none;

    }

}
</style>
