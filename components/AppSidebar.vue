<i18n lang='yaml'>
    ar:
      taps:
          /reference: المرجع
          /faq: الأسئلة الشائعة
          /who-we-are: من نحن
</i18n>
<template lang="pug">
    v-overlay( :is-overlay-open='$store.state.isSidebarOpen' )
        template( #default='{ isSlotOpen, closeSlot }' )
            transition(
                name='sidebar'

                enter-active-class='sidebar--transitionEnterActive'
                leave-active-class='sidebar--transitionLeaveActive'
                enter-class='sidebar--transitionEnter'
                leave-to-class='sidebar--transitionLeaveTo'

                @after-leave="close"
            )
                .sidebar( v-if='isSlotOpen' )
                    .sidebar__header
                        .sidebar__closeButton( @click='closeSlot' ): ArrowIcon
                    .sidebar__list
                        .sidebar__tap( v-for='( tap__text, tap__link ) of $t("taps")' ) {{ tap__text }}
</template>
<script>
import ArrowIcon from '@/assets/icons/arrow-back.svg?inline'
export default {
  name: 'AppSidebar',
  components: { ArrowIcon },
  methods: {
    close () {
      this.$store.commit('closeSidebar')
    }
  }
}
</script>
<style lang='scss'>
.sidebar {

    position: fixed;
    top: 0;
    left: 0em;

    width: 20em;
    height: 100%;
    padding: 0.3em;

    background-color: rgb( var(--gray-100) );

    &--transitionEnterActive,
    &--transitionLeaveActive { transition: all 0.4s ease-in-out }
    &--transitionEnter,
    &--transitionLeaveTo { transform: translateX( -20em ) }

    &__header {
        width: 100%;
        direction: ltr;
    }

    &__closeButton {

        width: 2.5em;
        height: 2.5em;

        border-radius: 50%;

        display: flex;
        justify-content: center;
        align-items: center;

        cursor: pointer;

        &:hover { background-color: rgb( var(--gray-200) ) }

        svg {
            width: 1.7em;
            fill: rgb( var(--gray-300) );
        }

    }

    &__tap {

        width : 100%;
        height: 3em;

        font-size: 1.3em;
        font-weight: bold;

        display: flex;
        align-items: center;

        box-sizing: border-box;
        margin-top: 0.3em;
        border-radius: 0.3em;
        padding: 0.3em;

        cursor: pointer;

        &:hover { background-color : rgb( var(--gray-200) ) }

    }

}

</style>
