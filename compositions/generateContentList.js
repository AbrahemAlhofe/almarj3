export default function generateContentList (articles) {
  const contentList = {}

  articles.forEach((article) => {
    const articleBook = article.content.book
    const articleTitle = article.content.title

    if (!contentList[articleBook]) { contentList[articleBook] = {} }

    contentList[articleBook][articleTitle] = null
  })

  return contentList
}
