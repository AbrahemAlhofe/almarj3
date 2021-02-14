<template lang="pug">
    v-overlay( :is-overlay-open='$store.state.isSearchWindowOpen' )
      template( #default='{ isSlotOpen }')
        .searchWindow( v-if='isSlotOpen' )
            .searchWindow__closeButton( @click="close" ): ClearIcon
            .searchInput
              SearchIcon.searchInput__searchButton( @click='search' )
              input.searchInput__input( ref='input' v-model='query' )
              ClearIcon.searchInput__clearButton( v-if='query !== ""' @click='clear' )
            .searchWindow__resultsList
</template>
<script>
import SearchIcon from '@/assets/icons/search.svg?inline'
import ClearIcon from '@/assets/icons/close.svg?inline'

export default {
  components: { SearchIcon, ClearIcon },
  data () {
    return {
      query: ''
    }
  },
  methods: {
    search () {

    },
    clear () {
      this.query = ''
    },
    close () {
      this.$store.commit('closeSearchWindow')
    }
  }
}
</script>
<style lang="scss">
.searchWindow {

    width: 40em;
    min-height: 10em;
    min-width: 15em;

    box-sizing: border-box;
    padding: 0.5em;
    border-radius: 0.5em;
    overflow: hidden;
    margin: 1em;

    background-color: rgb( var(--white) );

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

}

.searchWindow .searchInput {

  height: 3em;

  display: flex;
  align-items: center;

  margin-top: 1em;
  padding: .3em;
  border-radius: .5em;

  background-color: rgb( var(--gray-200) );

  &__input {

    height: 100%;

    flex-grow: 1;

    padding: 0;
    border: none;
    outline: none;

    background-color: transparent;

    font-size: 1.1em;
    font-family: 'Cairo';

  }

  &__searchButton, &__clearButton {

    height: 3em;
    width: 3em;

    border-radius: 0.3em;

    font-size: 0.6em;

    cursor: pointer;

  }

  &__clearButton { fill : red }

  &__searchButton { fill : rgb( var(--gray-300) ) }

}
</style>
