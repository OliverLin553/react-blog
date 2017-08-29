export const refineSearchResults = (articleContent, searchKeyword) => {
  const onList = []

  articleContent.forEach((t) => {
    if (t.title.toLowerCase().indexOf(searchKeyword.toLowerCase()) >= 0) {
      onList.push(t)
    }
  })

  return {
    onList
  }
}
