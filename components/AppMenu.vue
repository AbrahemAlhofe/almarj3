<i18n lang='yaml'>
    ar:
      taps:
          /reference: المرجع
          /faq: الأسئلة الشائعة
          /who-we-are: من نحن
</i18n>
<template lang="pug">
    .menu
        Logo.menu__logo( :is-full='true' )
        ul.menu__list
          li.menu__tap( v-for='( tap__text, tap__link ) of $t("taps")' )
            nuxt-link.menu__link(
              :to='tap__link'
              activeClass='--active'
              exactActiveClass='--exact-active'
            ) {{ tap__text }}
        .menu__buttons
          .menu__searchButton( @click="$store.commit('openSearchWindow')" ): SearchIcon
          .menu__sidebarButton( @click="$store.commit('openSidebar')" ): MenuIcon
</template>
<script>
// Icons
import MenuIcon from '@/assets/icons/menu.svg?inline'
import SearchIcon from '@/assets/icons/search.svg?inline'

const icons = { MenuIcon, SearchIcon }

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

    max-width: 20em;

    padding: 0px;
    margin: auto;

  }

  &__tap {

    display: inline-block;

    padding: .3em;
    border-radius: 0.3em;

    color: rgb( var(--black) );
    text-align: center;

    list-style-type: none;

    cursor: pointer;

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

  &__buttons { display: flex; }

  &__sidebarButton, &__searchButton {

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
      stroke: rgb( var(--black) );
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
