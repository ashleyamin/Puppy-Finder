import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './app.css';
import Search from './components/Search';
import Results from './component/Results';
import SingleResult from './component/SingleResult';
import Favorites from './components/Favorites';
import SingleFavorite from './components/SingleFavorite';
import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {

    render() {
        return (
            <div className="App">

                <Header />
                <Router>
                    <Route exact path="/" {Search} />
                    <Route exact path="/breed" {Results} />
                    <Route exact path="/breed/:id" {SingleResult} />
                    <Route exact path="/favorites" {Favorites} />
                    <Route exact path="/about" {SingleFavorite} />
                    <Route exact path="/about" {About} />

                </Router>
                <Footer />

            </div>


        )

    }

}

export default App;
