import React from 'react';
import ReactDOM from 'react-dom';
import reducer from './reducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';

const dummyData = [
  {
    id: 0,
    imageUrl: "http://images.newsinshorts.com.edgesuite.net/app_assets/images/2017/29dec/inshorts_image_1514544852599_749.jpg?resize=400px:*",
    title: "Eating at our east, north India outlets not safe: McDonald's",
    liked: false,
    disliked: false,
    bookmarked: false,
    description: "McDonald's India has warned its customers about 'serious compliance risks' at its outlets run by Connaught Plaza Restaurants (CPRL) in north and east India. It said these restaurants needed to close down, since they aren't in line with its global standards pertaining to supplies and operations. This comes after CPRL got a new logistics partner and started reopening closed restaurants."
  },
  {
    id: 1,
    imageUrl: "http://images.newsinshorts.com.edgesuite.net/app_assets/images/2017/29dec/inshorts_image_1514544852599_749.jpg?resize=400px:*",
    title: "Eating at our east, north India outlets not safe: McDonald's",
    liked: false,
    disliked: false,
    bookmarked: false,
    description: "McDonald's India has warned its customers about 'serious compliance risks' at its outlets run by Connaught Plaza Restaurants (CPRL) in north and east India. It said these restaurants needed to close down, since they aren't in line with its global standards pertaining to supplies and operations. This comes after CPRL got a new logistics partner and started reopening closed restaurants."
  },
  {
    id: 2,
    imageUrl: "http://images.newsinshorts.com.edgesuite.net/app_assets/images/2017/29dec/inshorts_image_1514544852599_749.jpg?resize=400px:*",
    title: "Eating at our east, north India outlets not safe: McDonald's",
    liked: false,
    disliked: false,
    bookmarked: false,
    description: "McDonald's India has warned its customers about 'serious compliance risks' at its outlets run by Connaught Plaza Restaurants (CPRL) in north and east India. It said these restaurants needed to close down, since they aren't in line with its global standards pertaining to supplies and operations. This comes after CPRL got a new logistics partner and started reopening closed restaurants."
  },
  {
    id: 3,
    imageUrl: "http://images.newsinshorts.com.edgesuite.net/app_assets/images/2017/29dec/inshorts_image_1514544852599_749.jpg?resize=400px:*",
    title: "Eating at our east, north India outlets not safe: McDonald's",
    liked: false,
    disliked: false,
    bookmarked: false,
    description: "McDonald's India has warned its customers about 'serious compliance risks' at its outlets run by Connaught Plaza Restaurants (CPRL) in north and east India. It said these restaurants needed to close down, since they aren't in line with its global standards pertaining to supplies and operations. This comes after CPRL got a new logistics partner and started reopening closed restaurants."
  }
];

const display_horizontal = {
  display: "inline-flex",
  marginBottom: "20px",
  marginLeft: "20%",
  marginRight: "20%",
  width: "60%",
  boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
  transition: "0.3s",
  borderRadius: "5px"
}

const display_vertical = {
  display: "block",
  paddingLeft: "10px"
}

const image_styles = {
  borderRadius: "5px"
}

const div_padding = {
  padding: "10px"
}

const disabled = {
  border: "1px solid #999999",
  backgroundColor: "#cccccc",
  color: "#666666",
  marginRight: "30px"
}

const disableDecoration = {
  textDecoration: "none",
  color: "#000000"
}

const buttonSpacing = {
  marginRight: "30px"
}

class NewsComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={display_horizontal}>
        <a href="#">
          <div style={div_padding}>
            <img src={ this.props.imageUrl } width="350px" height="250px" style={image_styles}/>
          </div>
        </a>
        <div style={display_vertical}>
          <NavLink to={"/" + this.props.id} activeStyle={disableDecoration} style={disableDecoration}>
            <h4> { this.props.title } </h4>
            <p> { this.props.description } </p>
          </NavLink>
          <div style={display_vertical}>
            {
              (!this.props.liked) ?
                <button onClick={() => store.dispatch({
                  type: 'LIKE',
                  id: this.props.id
                })} style={buttonSpacing}>Like</button>
              :
              <button style={disabled} disabled>Like</button>
            }
            {
              (!this.props.disliked) ?
                <button onClick={() => store.dispatch({
                  type: 'DISLIKE',
                  id: this.props.id
                })} style={buttonSpacing}>Dislike</button>
              :
                <button style={disabled} disabled>Dislike</button>
              }
              {
                (!this.props.bookmark) ?
                  <button onClick={() => store.dispatch({
                    type: 'BOOKMARK',
                    id: this.props.id
                  })} style={buttonSpacing}>Bookmark</button>
                :
                  <button onClick={() => store.dispatch({
                    type: 'REMOVE BOOKMARK',
                    id: this.props.id
                  })}>Remove Bookmark</button>
                }
          </div>
        </div>
      </div>
    )
  }
}

const NewsList = () => (
  <ul>
  {
    store.getState().map(d =>
      <NewsComponent
        key = { d.id }
        id = { d.id }
        title = { d.title }
        liked = { d.liked }
        disliked = { d.disliked }
        bookmark = { d.bookmarked }
        description = { d.description }
        imageUrl = { d.imageUrl } />
      )
    }
    </ul>
)

const NewsDetail = ({ match }) => {
  let state = store.getState()[match.params.newsId]
  return (
    <div>
      <NewsComponent
        key = { state.id }
        id = { state.id }
        title = { state.title }
        liked = { state.liked }
        disliked = { state.disliked }
        bookmark = { state.bookmarked }
        description = { state.description }
        imageUrl = { state.imageUrl } />
      </div>
  )
}

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={NewsList} />
        <Route path="/:newsId" component={NewsDetail} />
      </Switch>
    </Router>
  </Provider>
)

const store = createStore(reducer, dummyData);
const render = () => {
  ReactDOM.render(
    <Root store={store}/>,
    document.getElementById('root')
  );
}
store.subscribe(render)
render()
