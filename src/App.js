import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Search from './components/Search';
import Favorites from './components/Favorites';
import SingleFavorite from './components/SingleFavorite';
import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {

    render() {
        return (
            <Router>
                <div className="App">

                    <Header />

                        <Route exact path="/" component={Search} />
                        <Route exact path="/favorites" component={Favorites} />
                        <Route exact path="/favorites/:id" component={SingleFavorite} />
                        <Route exact path="/about" component={About} />

                    <Footer />

            </div>
            </Router>

        )

    }

}

export default App;
