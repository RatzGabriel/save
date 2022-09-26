import React from 'react';
import { BrowserRouter, Route} from "react-router-dom";
import Header from './Header';
import Checkout from './Pages/Checkout';
import CreateItem from './Pages/CreateItem';
import Main from './Pages/Main';
import Production from './Pages/Production';
import SingleProduct from './Pages/SingleProduct';
import Store from './Pages/Store';



const App = ()=> {
    return <div>
        
        <BrowserRouter>
        <Header/>
        <div>
            <Route exact path="/"><Main/></Route>
            <Route path="/store"><Store/></Route>
            <Route path="/singleproduct"><SingleProduct/></Route>
            <Route path="/production"><Production/></Route>
            <Route path="/checkout"><Checkout/></Route>
            <Route path="/createItem"><CreateItem/></Route>
        </div>
        </BrowserRouter>

    </div>
}

export default App