import logo from './logo.svg';
import './App.css';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Services from './components/Services/Services';
import { BrowserRouter as Router, Switch , Route} from 'react-router-dom';
import AboutUs from './components/AboutUs/AboutUs';
import NotFound from './components/NotFound/NotFound';
// import MoreServices from './components/MoreServices/MoreServices';
import ContactUs from './components/ContactUs/ContactUs';
import MenuBar from './components/MenuBar/MenuBar';
import LatestNews from './components/LatestNews/LatestNews';
import Class from './Class/Class';



function App() {
  
  return (
    <div className="App">

      <Router>
        <MenuBar></MenuBar>
        <Switch>
          <Route exact path="/">
            <Banner></Banner>
          </Route>
          <Route exact path="/home">
            <Banner></Banner>
          </Route>
          <Route exact path="/about">
            <AboutUs></AboutUs>
          </Route>
          <Route exact path="/class">
            <Class></Class>
          </Route>
          <Route exact path="/latestNews">
          <LatestNews></LatestNews>
          </Route>
          <Route exact path="/contactUs">
            <ContactUs></ContactUs>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
            </Switch>
              <Footer></Footer>
        </Router>
        
      
      
      {/* <Banner></Banner>
      <AllServices></AllServices>
      <Footer></Footer> */}
    </div>
  );
}

export default App;
