<template lang='pug'>
    .content( v-html='body' )
</template>
<script>
import unified from 'unified'
import markdown from 'remark-parse'
import remark2rehype from 'remark-rehype'
import html from 'rehype-stringify'

export default {
  props: {
    document: {
      type: String,
      default: ''
    }
  },
  computed: {

    body () {
      let body = this.document

      unified()
        .use(markdown)
        .use(remark2rehype)
        .use(html)
        .process(this.document, function (err, file) {
          if (err) { console.error(err) }
          body = file
        })

      return body
    }

  }
}
</script>
<style lang="scss">
.article {

  padding: 1em;

  p { text-align: justify }

  img { width: 100% }

}
</style>
