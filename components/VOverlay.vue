<template lang="pug">
    transition(
        name='v-overlay'

        enter-active-class='v-overlay--transitionEnterActive'
        leave-active-class='v-overlay--transitionLeaveActive'
        enter-class='v-overlay--transitionEnter'
        leave-to-class='v-overlay--transitionLeaveTo'

        @after-enter="openSlot"
        @before-leave="closeSlot"

    ): .v-overlay( v-if='isOverlayOpen' ): slot( :is-slot-open='isSlotOpen' :closeSlot='closeSlot' )
</template>
<script>
export default {
  props: {
    isOverlayOpen: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      isSlotOpen: false
    }
  },
  methods: {
    closeSlot () {
      this.isSlotOpen = false
    },
    openSlot () {
      this.isSlotOpen = true
      this.$emit('open-slot', this.isSlotOpen)
    }
  },
  emits: ['open-slot']
}
</script>
<style lang="scss">
.v-overlay {

  position: fixed;
  top: 0;
  z-index: 10;

  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba( var(--black), 0.6 );

  opacity : 1;

  &--transitionEnterActive,
  &--transitionLeaveActive { transition: all 0.4s ease-in-out }
  &--transitionEnter,
  &--transitionLeaveTo { opacity : 0 }

  &::before {
    content: "";
    background-color: var(--gray-30);
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    opacity: 0.7;
  }

}

.layout#default.--dark-mode {

  .v-overlay::before {

    background-color: var(--gray-95);

  }

}

</style>
