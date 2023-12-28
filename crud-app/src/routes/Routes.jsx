import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import MyProjects from "../pages/MyProjects/MyProjects";


const router = createBrowserRouter([
    {
        path:'/',
        element: <Main/>,
        children:[
            {
                path:'/',
                element: <MyProjects/>
            }
        ]
    }
])

export default router;