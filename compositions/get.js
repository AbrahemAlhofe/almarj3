export default (from, ...selectors) =>
  [...selectors].map((selector) => {
    if (typeof selector === 'string') {
      return selector
        .replace(/\[([^[\]]*)\]/g, '.$1.')
        .split('.')
        .filter(t => t !== '')
        .reduce((prev, cur) => prev && prev[cur], from)
    }

    if (Array.isArray(selector)) {
      return selector
        .filter(t => t !== '')
        .reduce((prev, current) => prev && prev[current], from)
    }
  })
