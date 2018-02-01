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
                    <Route exact path="/" component={Search} />
                    <Route exact path="/breed" component={Results} />
                    <Route exact path="/breed/:id" component={SingleResult} />
                    <Route exact path="/favorites" component={Favorites} />
                    <Route exact path="/favorites/:id" component={SingleFavorite} />
                    <Route exact path="/about" component={About} />

                </Router>
                <Footer />

            </div>


        )

    }

}

export default App;
