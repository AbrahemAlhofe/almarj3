const contentVersion = Math.floor(Math.random() * 1000)

export const actions = {

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

    return [...articles, ...chapters]
  }

}
