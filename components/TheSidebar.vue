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
                    .sidebar__linksList
                        nuxt-link.sidebar__tap( data-pagename='docs' :to="localePath('/docs/intro')" exactActiveClass='--exact-active' )
                            .sidebar__tapIcon: BookIcon
                            .sidebar__tapText المرجع
                        nuxt-link.sidebar__tap( data-pagename='who-we-are' :to="localePath('/who-we-are')" exactActiveClass='--exact-active' )
                            .sidebar__tapIcon: PeopleIcon
                            .sidebar__tapText من نحن
                    .sidebar__contentList
                        template( v-if='$store.state.content.contentList.length !== 0' )
                            hr
                            template( v-for='tap of contentList' )
                                TheContentListTap( :title='tap.title' :links='tap.links' )

</template>
<script>
import TheContentListTap from '@/components/TheContentListTap.vue'

import ArrowIcon from '@/assets/icons/arrow-back.svg?inline'

// Taps Icons
import BookIcon from '@/assets/icons/book.svg?inline'
import PeopleIcon from '@/assets/icons/people.svg?inline'
import QuestionMarkIcon from '@/assets/icons/question-mark.svg?inline'

const Icons = {
  ArrowIcon,
  BookIcon,
  PeopleIcon,
  QuestionMarkIcon
}

export default {
  name: 'AppSidebar',
  components: { ...Icons, TheContentListTap },
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
            fill: rgb( var(--gray-400) );

        }

    }

    &__tap {

        width : 100%;
        height: 3em;

        color: rgb( var(--black) );
        font-size: 1.3em;
        font-weight: bold;
        text-decoration: none;

        display: flex;
        align-items: center;

        box-sizing: border-box;
        margin-top: 0.3em;
        border-radius: 0.3em;
        padding: 0.3em;

        cursor: pointer;

        &:hover { background-color : rgb( var(--gray-200) ) }

        .sidebar__tapIcon {

            display: flex;
            width: 1.3em;
            margin-inline-end: 0.3em;

        }

    }

}

</style>
