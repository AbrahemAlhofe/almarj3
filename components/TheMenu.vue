<i18n lang='yaml'>
    ar:
      taps:
          reference: المرجع
          faq: الأسئلة الشائعة
          who_we_are: من نحن
</i18n>
<template lang="pug">
    .menu
        v-logo.menu__logo( :is-full='true' )
        ul.menu__list
          li.tap
            .tap__icon: BookIcon
            nuxt-link.tap__link( :to="localePath('/docs')" exactActiveClass='--exact-active' ) {{ $t('taps.reference') }}
          li.tap
            .tap__icon: QuestionMarkIcon
            nuxt-link.tap__link( :to="localePath('/faq')" exactActiveClass='--exact-active' ) {{ $t('taps.faq') }}
          li.tap
            .tap__icon: PeopleIcon
            nuxt-link.tap__link( :to="localePath('/who_we_are')" exactActiveClass='--exact-active' ) {{ $t('taps.who_we_are') }}

        .menu__buttons
          .menu__searchButton( @click="$store.commit('openSearchWindow')" ): SearchIcon
          .menu__sidebarButton( @click="$store.commit('openSidebar')" ): MenuIcon
</template>
<script>
// Icons
import MenuIcon from '@/assets/icons/menu.svg?inline'
import SearchIcon from '@/assets/icons/search.svg?inline'

// Taps Icons
import BookIcon from '@/assets/icons/book.svg?inline'
import PeopleIcon from '@/assets/icons/people.svg?inline'
import QuestionMarkIcon from '@/assets/icons/question-mark.svg?inline'

const icons = { MenuIcon, SearchIcon, BookIcon, PeopleIcon, QuestionMarkIcon }

const components = {}

export default {
  components: { ...icons, ...components }
}

</script>
<style lang='scss'>
.menu {

  position: fixed;

  height : 10vh;
  width : 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  box-sizing: border-box;
  padding : 0.6em;

  background-color: rgb( var(--white) );

  &__list {

    position: relative;

    display: none;
    justify-content: space-between;
    align-items: center;
    flex-grow: 1;

    padding: 0px;
    margin-inline: 5vw;

    @media ( min-width: 768px ) {

      display: flex;
      width: 46vw;
      flex-grow: unset;

    }

  }

  &__buttons { display: flex; }

  &__searchButton {

    width: 2.5em;
    height: 2.5em;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: rgb( var(--gray-200) );

    border-radius: 0.4em;
    margin-inline-start : 1em;

    transition: all 0.3s ease-in-out;

    cursor: pointer;

    &:hover { background-color: rgb( var(--gray-300) ) }

    svg {

      stroke: rgb( var(--black) );
      width: 1.3em;

    }

  }

  &__sidebarButton {

    width: 2.5em;
    height: 2.5em;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 0.3em;
    margin-inline-start : 1em;

    transition: all 0.3s ease-in-out;

    cursor: pointer;

    &:hover { background-color: rgb( var(--gray-100) ) }

    svg {

      fill: rgb( var(--black) );
      width: 1.5em;

    }

    @media ( min-width: 768px ) { display: none }

  }

}

.menu .tap {

  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: .3em;
  border-radius: 0.3em;

  color: rgb( var(--black) );
  text-align: center;

  list-style-type: none;

  cursor: pointer;

  &:hover {

    .tap__link {
      color: rgb( var(--blue-100) )
    }

    .tap__icon {
      fill: rgb( var(--blue-100) )
    }

  }

  &__icon {

    width: 1.8em;
    display: inline-block;
    transition: .5s ease-in-out;

  }

  &__link {

    border-radius: 0.4em;

    color: rgb( var(--black) );
    text-decoration: none;
    font-size: 1.2em;

    transition: .3s ease-in-out;

    &.--exact-active {
        background-color: rgb( var(--blue-100) );
        color: rgb( var(--white) ) !important;
    }

  }

}

</style>
