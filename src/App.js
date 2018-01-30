import React {Component} from 'react';
import {BrowserRouter as Router} from 'react-dom';
import './app.css';


import Header from './components/Header';
// import Footer from './components/Footer';


class App extends Component {
    render() {
        return (
            <div className="App">
            <Header />
            <Router>
  /*              <Route exact "/Home" {Search} />
                <Route exact "/breed" {Results} />
                <Route exact "/breed/:id" {SingeResult} />
                <Route exact "/favorites" {Favorites} />
                <Route exact "/about" {SingleFavorite} />
                <Route exact "/about" {About} /> */

            </Router>
  /*        <Footer /> */
            </div>


        )

    }

}

export default App;