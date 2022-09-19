import React from "react";
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Login from "./pages/Login";
import Register from "./pages/Register"
const App = () => {
    return ( 
        <div>
            
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/Register" element={<Register/>}/>
                </Routes>
        </div>
     );
}
 
export default App;