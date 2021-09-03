import unified from 'unified'
import remarkParse from 'remark-parse'
import remark2rehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'

export default {

  bind (element, binding, vnode) {
    unified()
      .use(remarkParse)
      .use(remark2rehype)
      .use(rehypeStringify)
      .process(binding.value, function (error, html) {
        if (error) { throw error }
        element.innerHTML = html
      })
  }

}
