export default function reducer(state, action) {
  switch(action.type) {
    case "LIKE":
      return state.map(news =>
        (news.id === action.id) ? {...news, liked: !news.liked} : news
      );
    case "DISLIKE":
      return state.map(news =>
        (news.id === action.id) ? {...news, disliked: !news.disliked} : news
      );
    case "BOOKMARK":
      return state.map(news =>
        (news.id === action.id) ? {...news, bookmarked: !news.bookmarked} : news
      );
    default:
      return state;
  }
}
