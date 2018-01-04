import React from 'react';
import ReactDOM from 'react-dom';
import reducer from './reducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NewsDetail from 'components/NewsDetail';
import NewsList from 'components/NewsList';

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
  },
  {
    id: 4,
    imageUrl: "http://images.newsinshorts.com.edgesuite.net/app_assets/images/2017/30dec/inshorts_image_1514612335174_659.jpg?resize=",
    title: "What were the major scientific discoveries, events of 2017?",
    author: "Gaurav Shroff",
    liked: false,
    disliked: false,
    bookmarked: false,
    description: "The discovery of gold's origin in the universe was hailed by many as 'scientific breakthrough' of the year. NASA's $3.9-billion Cassini became the first man-made object to go between Saturn and its rings, while astronomers detected the first interstellar object visiting our solar system. Further, scientists discovered a new organ inside the human body and also identified the appendix's function."
  },
  {
    id: 5,
    imageUrl: "http://images.newsinshorts.com.edgesuite.net/app_assets/images/2017/30dec/inshorts_image_1514612335174_659.jpg?resize=",
    title: "What were the major scientific discoveries, events of 2017?",
    author: "Gaurav Shroff",
    liked: false,
    disliked: false,
    bookmarked: false,
    description: "The discovery of gold's origin in the universe was hailed by many as 'scientific breakthrough' of the year. NASA's $3.9-billion Cassini became the first man-made object to go between Saturn and its rings, while astronomers detected the first interstellar object visiting our solar system. Further, scientists discovered a new organ inside the human body and also identified the appendix's function."
  },
  {
    id: 6,
    imageUrl: "http://images.newsinshorts.com.edgesuite.net/app_assets/images/2017/30dec/inshorts_image_1514612335174_659.jpg?resize=",
    title: "What were the major scientific discoveries, events of 2017?",
    author: "Gaurav Shroff",
    liked: false,
    disliked: false,
    bookmarked: false,
    description: "The discovery of gold's origin in the universe was hailed by many as 'scientific breakthrough' of the year. NASA's $3.9-billion Cassini became the first man-made object to go between Saturn and its rings, while astronomers detected the first interstellar object visiting our solar system. Further, scientists discovered a new organ inside the human body and also identified the appendix's function."
  },
  {
    id: 7,
    imageUrl: "http://images.newsinshorts.com.edgesuite.net/app_assets/images/2017/30dec/inshorts_image_1514612335174_659.jpg?resize=",
    title: "What were the major scientific discoveries, events of 2017?",
    author: "Gaurav Shroff",
    liked: false,
    disliked: false,
    bookmarked: false,
    description: "The discovery of gold's origin in the universe was hailed by many as 'scientific breakthrough' of the year. NASA's $3.9-billion Cassini became the first man-made object to go between Saturn and its rings, while astronomers detected the first interstellar object visiting our solar system. Further, scientists discovered a new organ inside the human body and also identified the appendix's function."
  }
];

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
ReactDOM.render(
  <Root store={store}/>,
  document.getElementById('root')
);
