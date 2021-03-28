export default function generateContentList (articles) {
  const contentList = {}

  articles.forEach((article) => {
    const articleBook = article.content.book
    const articleTitle = article.name

    if (!contentList[articleBook]) { contentList[articleBook] = {} }

    contentList[articleBook][articleTitle] = null
  })

  return contentList
}
