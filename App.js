import ReactDOM from "react-dom/client";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./src/utills/store";
import Home from "./src/Components/home";

const App=()=>{
     return (
        <div className="w-full h-full">
            <Provider store={store}>
                <Outlet/>
           </Provider> 
        </div>  
        
    );
};
const appRouter=createBrowserRouter([
    {
        path: "/",
        element:<App/>,
        // You define children routes here for pages
        children:[
            {
                path: "/",
                element: <Home/>
            }
        ]    
    },
        
])
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);