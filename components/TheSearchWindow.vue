<template lang="pug">
    v-overlay( :is-overlay-open='$store.state.isSearchWindowOpen' )
      template( #default='{ isSlotOpen }')
        .searchWindow( v-if='isSlotOpen' )
            .searchWindow__closeButton( @click="close" ): ClearIcon
            .searchInput
              .searchInput__searchButton: SearchIcon
              input.searchInput__input( ref='input' v-model='query' )
              .searchInput__clearButton: ClearIcon( v-if='query !== ""' @click='clear' )
            .searchWindow__hitsList
              .searchWindow__loader( v-if='isLoading' ) جاري البحث
              template( v-else )
                NuxtLink.hit( v-for='hit of hits' :key='hit.id' :to='`/docs/${hit.full_slug}`' )
                  .hit__path {{ hit.name }}
                  .hit__brief {{ hit.content.description }}
</template>
<script>
import SearchIcon from '@/assets/icons/search.svg?inline'
import ClearIcon from '@/assets/icons/close.svg?inline'

export default {
  components: { SearchIcon, ClearIcon },
  data () {
    return {
      query: '',
      isLoading: false,
      hits: [],
      searchRequest: null
    }
  },
  watch: {

    query (query) {
      if (query.trim() !== '') {
        this.isLoading = true

        clearTimeout(this.searchRequest)

        this.searchRequest = setTimeout(() => {
          this.search(query).then(() => { this.isLoading = false })
        }, 700)
      }
    }

  },
  methods: {
    search () {
      return this.$store.dispatch('content/search', this.query).then((hits) => { this.hits = hits })
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

  background-color: var(--white);

  &__closeButton {

      width: 2.5em;
      height: 2.5em;

      border-radius: 50%;

      display: flex;
      justify-content: center;
      align-items: center;

      cursor: pointer;

      &:hover { background-color: var(--gray-95) }

      svg {

        width: 1.7em;
        fill: var(--gray-65);

      }

  }

  &__loader {

    width: 100%;
    padding: 0.5em;

    box-sizing: border-box;
    text-align: center;
    font-size: 1.2em;

  }

}

.searchWindow .searchInput {

  height: 3em;

  display: flex;
  align-items: center;

  margin-top: 1em;
  border-radius: .5em;

  background-color: var( --gray-95 );

  &__input {

    height: 100%;

    flex-grow: 1;

    padding: 0;
    border: none;
    outline: none;

    background-color: transparent;

    font-size: 1.1em;
    color: var(--black);
    font-family: 'Cairo';

  }

  &__searchButton, &__clearButton {

    display: flex;
    align-items: center;
    justify-content: center;

    height: 5em;
    width: 5em;

    border-radius: 0.3em;

    font-size: 0.6em;

  }

  &__clearButton {

    fill : red;
    svg { width: 2.5em }
    cursor: pointer;

  }

  &__searchButton {

    fill : var(--gray-65);
    svg { width: 3em }

  }

}

.searchWindow .searchWindow__hitsList {

  overflow-y: scroll;
  max-height: 50vh;

  .hit {

    display: block;

    border: 1px solid var(--gray-45);
    border-radius: 5px;
    margin-top: 1em;
    padding: 0.5em;

    text-decoration: none;

    cursor: pointer;

    &__path {

      padding: 0.1em;

      font-size: 1.2em;
      font-weight: 600;
      color: var( --blue-45 );

    }

    &__brief {

      color: var(--gray-30);
      font-size: 0.9em;
      padding: 0.2em;

    }

    &:hover {

      background-color: var(--gray-95);

    }

  }

}

</style>
