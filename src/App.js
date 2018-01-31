import React {Component} from 'react';
import {BrowserRouter as Router} from 'react-dom';
import './App.css';

import Header from './components/Header';
// import Footer from './components/Footer';

class App extends Component {
    render() {
        return (
            <Header />
            <Router>
  //              <Route exact "/Home" {Search} />
  //              <Route exact "/breed" {Results} />
  //              <Route exact "/breed/:id" {SingeResult} />
  //              <Route exact "/favorites" {Favorites} />
  //              <Route exact "/about" {SingleFavorite} />
  //              <Route exact "/about" {About} />

            </Router>
  //        <Footer />

        )

    }

}

export default App;
