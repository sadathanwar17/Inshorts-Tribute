function flip(news, action, choice) {
  if(news.id === action.id) {
    if(news.liked === false && news.disliked === false) {
      if(choice === "liked") {
        return {
          ...news,
          liked: !news.liked
        };
      }
      else {
        return {
          ...news,
          disliked: !news.disliked
        };
      }
    }
    else {
      return {
        ...news,
        liked: !news.liked,
        disliked: !news.disliked
      };
    }
  }
  else {
    return news;
  }
}

export default function reducer(state, action) {
  switch(action.type) {
    case "LIKE":
      return state.map(news => flip(news, action, "liked"));
    case "DISLIKE":
      return state.map(news => flip(news, action, "disliked"));
    case "BOOKMARK":
      return state.map(news =>
        (news.id === action.id) ? {...news, bookmarked: !news.bookmarked} : news
      );
    case "REMOVE BOOKMARK":
      return state.map(news =>
        (news.id === action.id) ? {...news, bookmarked: !news.bookmarked} : news
      );
    default:
      return state;
  }
}
