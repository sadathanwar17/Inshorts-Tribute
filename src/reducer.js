export default function(state = [], action) {
  switch(action.type) {
    case "LIKE":
      return state.map(news => {
        (news.id === action.id) ? {...state, liked: !news.liked} : news
      });
    case "DISLIKE":
      return state.map(news => {
        (news.id === action.id) ? {...state, disliked: !news.disliked} : news
      });
    case "BOOKMARK":
      return state.map(news => {
        (news.id === action.id) ? {...state, bookmarked: !news.bookmarked} : news
      });
    default:
      return state;
  }
}
