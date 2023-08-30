
import React from 'react';
import './App.css';
import Mid from "./components/Mid";
import Footer from './components/Footer';
import Menubar from './components/menubar';
import { BrowserRouter } from 'react-router-dom';




function App() {
    return (
        <>
            <BrowserRouter>
                
                <Menubar></Menubar>
                <Mid></Mid>
                <Footer></Footer>
            </BrowserRouter>
            
        </>


    );
    
}

export default App;