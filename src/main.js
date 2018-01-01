import React from 'react';
import ReactDOM from 'react-dom';
import reducer from './reducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';

const dummyData = [
  {
    id: 0,
    imageUrl: "http://images.newsinshorts.com.edgesuite.net/app_assets/images/2017/29dec/inshorts_image_1514544852599_749.jpg?resize=",
    title: "Eating at our east, north India outlets not safe: McDonald's",
    author: "Rajesh Khanna",
    liked: false,
    disliked: false,
    bookmarked: false,
    description: "McDonald's India has warned its customers about 'serious compliance risks' at its outlets run by Connaught Plaza Restaurants (CPRL) in north and east India. It said these restaurants needed to close down, since they aren't in line with its global standards pertaining to supplies and operations. This comes after CPRL got a new logistics partner and started reopening closed restaurants.McDonald's India has warned its customers about 'serious compliance risks' at its outlets run by Connaught Plaza Restaurants (CPRL) in north and east India. "
  },
  {
    id: 1,
    imageUrl: "http://images.newsinshorts.com.edgesuite.net/app_assets/images/2017/31dec/inshorts_image_1514692479222_134.jpg?resize=",
    title: "Rajinikanth announces entry into politics with new party ",
    author: "Radhika Chugh",
    liked: false,
    disliked: false,
    bookmarked: false,
    description: "Announcing his decision to enter politics, actor Rajinikanth on Sunday said he will form a new party to contest the next Tamil Nadu Assembly elections from all constituencies. Claiming that other states make fun of Tamil Nadu, Rajinikanth said he would feel guilty if he did not take this decision. Politicians are robbing us on our own land, he added."
  },
  {
    id: 2,
    imageUrl: "http://images.newsinshorts.com.edgesuite.net/app_assets/images/2017/31dec/inshorts_image_1514700990483_918.jpg?resize=",
    title: "World's 1st robot citizen visits IIT Bombay wearing sari ",
    author: "Shifa Naseer",
    liked: false,
    disliked: false,
    bookmarked: false,
    description: "Sophia, the world's first robot to be granted citizenship, made its first appearance in India during an annual festival at IIT-Bombay on Saturday. The humanoid robot, which was draped in a sari, had a 15-minute conversation with a student and greeted the audience with a 'Namaste'. Sophia talked about India's global stand as an economic, scientific and technological superpower."
  },
  {
    id: 3,
    imageUrl: "http://images.newsinshorts.com.edgesuite.net/app_assets/images/2017/30dec/inshorts_image_1514612335174_659.jpg?resize=",
    title: "What were the major scientific discoveries, events of 2017?",
    author: "Gaurav Shroff",
    liked: false,
    disliked: false,
    bookmarked: false,
    description: "The discovery of gold's origin in the universe was hailed by many as 'scientific breakthrough' of the year. NASA's $3.9-billion Cassini became the first man-made object to go between Saturn and its rings, while astronomers detected the first interstellar object visiting our solar system. Further, scientists discovered a new organ inside the human body and also identified the appendix's function."
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

const Header = ({showArrow}) => (
  <div style={{
    boxShadow: "0 0 8px 0 rgba(0,0,0,0.2)",
    transition: "0.3s",
    paddingLeft: "20px",
    width: "100%",
    backgroundColor: "rebeccapurple",
    color: "white"
  }}>
    {
      showArrow==="true" ?
        <NavLink to="/" activeStyle={disableDecoration}>
          <i className="fa fa-arrow-left fa-3x" aria-hidden="true" style={{
            color: "white",
            position: "fixed",
            paddingTop: "10px"
          }}></i>
        </NavLink>
      : null
    }
    <h1 style={{
      display: "inline-block",
      textAlign: "center",
      width: "100%"
    }}>INSHORTS TRIBUTE</h1>
  </div>
)

const Btns = (props) => (
  <div style={{
    display: "inline-block",
    margin: "0 auto"
  }}>
    {
      (!props.state.liked) ?
        <button onClick={() => store.dispatch({
          type: 'LIKE',
          id: props.state.id
        })}>Like</button>
      :
      <button disabled>Like</button>
    }
    {
      (!props.state.disliked) ?
        <button onClick={() => store.dispatch({
          type: 'DISLIKE',
          id: props.state.id
        })}>Dislike</button>
      :
        <button disabled>Dislike</button>
      }
      {
        (!props.state.bookmark) ?
          <button onClick={() => store.dispatch({
            type: 'BOOKMARK',
            id: props.state.id
          })}>Bookmark</button>
        :
          <button onClick={() => store.dispatch({
            type: 'REMOVE BOOKMARK',
            id: props.state.id
          })}>Remove Bookmark</button>
        }
  </div>
)

class NewsComponent extends React.Component {
  constructor(props) {
    super(props);
    var description;
    if(this.props.description.length > 256) {
      var ending = " ...";
      this.description = this.props.description.substring(0, 256 - ending.length) + ending;
    }
    else {
      this.description = this.props.description;
    }
    this.imageUrl = this.props.imageUrl + "400px";
  }

  render() {
    return (
      <div style={display_horizontal}>
        <a href="#">
          <div style={div_padding}>
            <img src={ this.imageUrl } width="350px" height="250px" style={image_styles}/>
          </div>
        </a>
        <div style={display_vertical}>
          <NavLink to={"/" + this.props.id} activeStyle={disableDecoration} style={disableDecoration}>
            <h4> { this.props.title } </h4>
            <p> { this.description } </p>
          </NavLink>
          <div style={display_vertical}>
            <div style={{
              display: "block",
              textAlign: "center",
              margin: "auto",
              paddingBottom: "15px"
            }}>
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
      </div>
    )
  }
}

const NewsList = () => (
  <div>
    <Header showArrow="false" />
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
    </div>
)

const NewsDetail = ({ match }) => {
  let state = store.getState()[match.params.newsId]
  var imageUrl = state.imageUrl + "540px";
  return (
    <div>
      <Header showArrow="true" />
      <div style={{
        padding: "0px 20px 20px 20px"
      }}>
        <h1 style={{
          textAlign: "center",
          marginBottom: "0px"
        }}>{ state.title }</h1>
        <div style={{
          display: "inline",
          width: "100%",
          padding: "0 5% 0 5%",
          position: "fixed"
        }}>
          <h4 style={{
            display: "inline-block",
            width: "70%"
          }}>By: { state.author }</h4>
          <Btns state={state} style={{
            display: "inline-block",
            margin: "auto",
            width: "20%"
          }}/>
        </div>
        <div style={{
          paddingTop: "60px"
        }}>
          <img src={imageUrl} style={{
            display: "block",
            margin: "0 auto"
          }}/>
          <p style={{
            fontSize: "20px",
            lineHeight: "32px"
          }}> { state.description } </p>
        </div>
      </div>
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
