import React from "react";
import './App.css';
import '../src/scss/app.scss'
import Header from './components/Header'
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import {Route, Routes} from "react-router-dom";
import Cart from "./Pages/Cart";

export const SearchContext = React.createContext();

function App() {
    const [searchValue, setSearchValue] = React.useState('');
    return (
        <div className="wrapper">
            <SearchContext.Provider value={{searchValue, setSearchValue}}>
                <Header/>
                <div className="content">

                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/cart" element={<Cart/>}/>
                        <Route path="/*" element={<NotFound/>}/>
                    </Routes>


                </div>
            </SearchContext.Provider>
        </div>
    );
}

export default App;
