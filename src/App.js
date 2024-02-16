import React ,{lazy, Suspense} from "react";
import ReactDOM from "react-dom";
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter , RouterProvider, Outlet} from "react-router-dom";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Restaurantmenu from "./components/restaurant_menu_component/RestaurantMenu";
import { Provider } from "react-redux";
import appstore from "./utils/appstore";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
const About = lazy(()=> import("./components/About"));

const Applayout = ()=>{


    return(
        <div className="app">
            <Provider store={appstore}>
            <Header />
            <Outlet />
            <Footer/>
            </Provider>
        </div>
    )
}

const router = createBrowserRouter([
    {
        path:"/",
        element: <Applayout/>,
        errorElement:<Error/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:<Suspense fallback={<h1>loading...</h1>}> <About/> </Suspense>,
            },
            {
                path:"/contact",
                element:<Contact />
            },
            {
                path:"/restaurant/:resid",
                element:<Restaurantmenu/>
            },
            {
                path:"/cart",
                element:<Cart/>
            }
        ]
    },
  
]);


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={router}/>)