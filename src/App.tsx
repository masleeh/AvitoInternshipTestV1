import React from 'react';
import './scss/style.scss'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './redux/store';
import IndexPage from './pages/IndexPage';
import ArticlePage from './pages/ArticlePage';
import NavbarContainer from './components/Navbar/NavbarContainer';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
        <NavbarContainer />
          <Routes>
            <Route path='/' element={<IndexPage />}/>
            <Route path="/article" element={<ArticlePage />}/>
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
