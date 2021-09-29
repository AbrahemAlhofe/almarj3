<template lang="pug">
    .menu
        v-logo.menu__logo( :is-full='true' )
        ul.menu__list
          nuxt-link.tap( data-pagename='docs' to="/docs/intro" exactActiveClass='--exact-active' )
              .tap__icon: BookIcon
              .tap__name المرجع
          nuxt-link.tap( data-pagename='who-we-are' to="/who-we-are" exactActiveClass='--exact-active' )
              .tap__icon: PeopleIcon
              .tap__name من نحن

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

  position: sticky;
  top: 0;

  height : 10vh;
  width : 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  box-sizing: border-box;
  padding : 0.6em;

  background-color: var(--white);

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
      width: 20vw;
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

    background-color: var(--gray-95);

    border-radius: 0.4em;
    margin-inline-start : 1em;

    transition: all 0.3s ease-in-out;

    cursor: pointer;

    &:hover { background-color: var(--gray-45) }

    svg {

      fill: var(--black);
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

    &:hover { background-color: var(--gray-95) }

    svg {

      stroke: var(--black);
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

  color: unset;
  text-decoration: none;
  text-align: center;

  list-style-type: none;

  cursor: pointer;

  transition: .3s ease-in-out;

  &.--exact-active {

    background-color: var( --blue-45 );
    color: var(--white) !important;

    .tap__name { color: var(--white) !important }

    .tap__icon {

      svg { fill: var(--white) }

    }

  }

  &:hover {

    .tap__name { color: var( --blue-45 ) }

    .tap__icon { fill: var( --blue-45 ) }

  }

  &__name {

    color: var(--black);

  }

  &__icon {

    width: 1.8em;
    display: flex;
    transition: .5s ease-in-out;
    fill: var( --black )

  }

}

</style>
