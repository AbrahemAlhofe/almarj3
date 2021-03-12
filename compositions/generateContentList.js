export default function generateContentList (articles) {
  const contentList = {}

  for (const article of articles) {
    if (!contentList[article.category]) { contentList[article.category] = {} }

    contentList[article.category][article.title] = null
  }

  return contentList
}
