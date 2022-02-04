const contentVersion = Math.floor(Math.random() * 1000)

export const state = () => ({
  cashedLinks: []
})

export const actions = {

  fetchOne (store, articleId) {
    const flatCashedLinks = store.state.cashedLinks.reduce((result, link) => {
      if (link.type === 'Article') { result.push(link) }

      if (link.type === 'Chapter') { result = result.concat(link.articles) }

      return result
    }, [])
    return flatCashedLinks.find(link => link.id === articleId)
  },

  async fetchAll (store) {
    const { data } = await this.$storyapi.get('cdn/links', { contentVersion })

    const links = Object.values(data.links)

    let articles = links
      .filter(link => !link.is_folder)
      .map(article => ({

        type: 'Article',

        name: article.name,

        slug: article.slug,

        id: article.id,

        parent_id: article.parent_id

      }))

    const chapters = links
      .filter(link => link.is_folder)
      .map(chapter => ({

        type: 'Chapter',

        name: chapter.name,

        slug: chapter.slug,

        id: chapter.id,

        articles: articles.filter((article) => {
          const remove = (target) => { articles = articles.filter(article => article.parent_id !== target.parent_id) }
          const isArticleBelongsToThisChapter = article.parent_id === chapter.id

          if (isArticleBelongsToThisChapter) { remove(article) }

          return isArticleBelongsToThisChapter
        })

      }))

    /* Link between the articles inside the chapters */

    chapters.map((chapter) => {
      chapter.articles.map((article, articleIndex) => {
        const previousArticle = chapter.articles[articleIndex - 1]
        const nextArticle = chapter.articles[articleIndex + 1]

        article.next = nextArticle
        article.previous = previousArticle

        return article
      })
    })

    /* Link between the chapters */

    chapters.map((chapter, chapterIndex) => {
      const nextChapter = chapters[chapterIndex + 1]
      const previousChapter = chapters[chapterIndex - 1]

      const previousChapterIndex = previousChapter?.articles[previousChapter?.articles.length - 1]
      const nextChapterIndex = nextChapter?.articles[0]

      chapter.articles[0].previous = previousChapterIndex
      chapter.articles[chapter.articles.length - 1].next = nextChapterIndex

      return chapter
    })

    /* Link between the non-chaptered articles */
    articles.map((article, articleIndex) => {
      const previousArticle = article[articleIndex - 1]
      const nextArticle = articles[articleIndex + 1]

      article.next = nextArticle
      article.previous = previousArticle

      return article
    })

    /* link between the last non-chaptered article and the first chapter */
    const theLastArticle = articles[articles.length - 1]
    const theFirstChapter = chapters[0]
    theLastArticle.next = theFirstChapter.articles[0]
    theFirstChapter.articles[0].previous = theLastArticle

    store.state.cashedLinks = [...articles, ...chapters]

    return store.state.cashedLinks
  }

}
