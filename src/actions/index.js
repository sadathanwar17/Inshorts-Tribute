export const like = (id) => ({
  type: 'LIKE',
  id
})

export const dislike = (id) => ({
  type: 'DISLIKE',
  id
})

export const bookmark = (id) => ({
  type: 'BOOKMARK',
  id
})

export const removeBookmark = (id) => ({
  type: 'REMOVE BOOKMARK',
  id
})
