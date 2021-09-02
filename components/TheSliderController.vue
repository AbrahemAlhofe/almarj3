<template lang="pug">
    .controller
        template( v-for='buttonIndex in length' )
            .controller__button(
                :key='buttonIndex - 1'
                @click='focusOn(buttonIndex - 1)'
                ref='buttons'
                :class="{ '--active' : buttonIndex - 1 === activeButtonIndex }"
            )
</template>
<script>
export default {
  name: 'VController',
  props: {
    length: {
      type: Number,
      default: 1
    },
    value: {
      type: Number,
      default: 0
    }
  },
  computed: {
    activeButtonIndex: {
      get () {
        return this.value
      },
      set (activeButtonIndex) {
        this.$emit('input', activeButtonIndex)
      }
    }
  },
  methods: {

    focusOn (activeButtonIndex) {
      this.activeButtonIndex = activeButtonIndex
    }

  }
}
</script>
<style lang="scss">
.controller {

    position: relative;

    width : 6em;

    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: auto;
    padding-bottom: 10px;

    $radius : 1em;

    &__button {

        width: $radius;
        height: $radius;

        border-radius: 50%;

        background-color: rgb( var(--gray-300) );
        cursor: pointer;

        transition: all 0.5s ease-in-out;

        &.--active {

            background-color: var( --blue-100 );

        }

    }

}
</style>
