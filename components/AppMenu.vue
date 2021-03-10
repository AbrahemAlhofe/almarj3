<i18n lang='yaml'>
    ar:
      taps:
          ref: المرجع
          faq: الأسئلة الشائعة
          who_we_are: من نحن
</i18n>
<template lang="pug">
    .menu
        Logo.menu__logo( :is-full='true' )
        ul.menu__list
          li.tap
            .tap__icon: BookIcon
            nuxt-link.tap__link( to='/ref' activeClass='--active' exactActiveClass='--exact-active' ) {{ $t('taps.ref') }}
          li.tap
            .tap__icon: QuestionMarkIcon
            nuxt-link.tap__link( to='/faq' activeClass='--active' exactActiveClass='--exact-active' ) {{ $t('taps.faq') }}
          li.tap
            .tap__icon: PeopleIcon
            nuxt-link.tap__link( to='/who_we_are' activeClass='--active' exactActiveClass='--exact-active' ) {{ $t('taps.who_we_are') }}

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

  height : 9vh;
  width : 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  box-sizing: border-box;

  padding : 0.6em;

  &__list {

    position: relative;

    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-grow: 1;

    max-width: 30vw;

    padding: 0px;
    margin: auto;

  }

  .tap {

    display: inline-flex;
    justify-content: center;
    align-items: center;

    padding: .3em;
    border-radius: 0.3em;

    color: rgb( var(--black) );
    text-align: center;

    list-style-type: none;

    cursor: pointer;

    &__icon {
      width: 1.8em;
      display: inline-block;
    }

    &__link {

      color: rgb( var(--black) );
      text-decoration: none;
      font-size: 1.2em;

      border-radius: 0.4em;

      transition: .3s ease-in-out;

      &:hover { color: rgb( var(--blue-100) ) }

      &.--exact-active {
          background-color: rgb( var(--blue-100) );
          color: rgb( var(--white) ) !important;
      }

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

    &:hover {
      background-color: rgb( var(--gray-500) );
    }

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

    &:hover {
      background-color: rgb( var(--gray-100) );
    }

    svg {
      fill: rgb( var(--black) );
      width: 1.5em;
    }

  }

  &__sidebarButton {
    display: none;
  }

  @media ( max-width: 600px ) {
    &__list { display : none }
    &__sidebarButton { display: flex }
  }

}

</style>
