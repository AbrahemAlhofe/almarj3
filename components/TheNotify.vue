<template lang="pug">
    .notify( :class="{ '--hide' : !isVisible }" )
      .notify__context {{ message }}
      button.notify__actionButton( @click='onAction()' :class="{ '--visible' : isActionButtonVisible }" ) {{ actionButtonText }}
</template>
<script>
export default {
  data () {
    return {
      isVisible: false,
      isActionButtonVisible: false,

      actionButtonText: '',
      message: '',

      onAction: () => {}
    }
  },
  methods: {
    notice ({ message = '', actionButtonText = '' }, callback = () => {}) {
      this.message = message
      this.actionButtonText = actionButtonText

      if (actionButtonText) { this.isActionButtonVisible = true }
      this.isVisible = true

      this.onAction = callback

      setTimeout(() => { this.isVisible = false }, 5000)
    }
  }
}
</script>
<style lang='scss'>
$margin: 20px;

.notify {

  --width: min( 370px, 90vw );

  position: fixed;
  bottom: 0px;
  left: calc( 50vw - var( --width ) / 2 );

  width: var( --width );
  min-height: 70px;

  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1em;

  background-color: rgb(var(--black));

  color: rgb(var(--white));
  font-weight: bold;

  box-sizing: border-box;
  border-radius: 10px;
  margin-bottom: $margin;
  padding: 1em;

  transition: all 0.5s cubic-bezier(0.06, 0.55, 0.31, 1.01);

  &.--hide { transform: translateY( calc( 100% + #{$margin} ) ) }

  &__context {

    flex-grow: 2;

  }

  &__actionButton {

    border: 2px solid rgb(var(--white));
    border-radius: 5px;
    padding: 0.5em;

    display: none;
    flex-grow: 1;

    color: rgb( var(--white) );
    font-size: 0.9em;

    background-color: transparent;
    cursor: pointer;

    &:hover {

      background-color: rgb( var(--white) );
      color: rgb( var(--black) );

    }

    &.--visible {

      display: block;

    }

  }

}
</style>
