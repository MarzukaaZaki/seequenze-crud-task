import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import MyProjects from "../pages/MyProjects/MyProjects";
import SampleProjects from "../pages/SampleProjects/SampleProjects";


const router = createBrowserRouter([
    {
        path:'/',
        element: <Main/>,
        children:[
            {
                path:'/',
                element: <MyProjects/>
            },
            {
                path:'/samples',
                element: <SampleProjects/>
            }
        ]
    }
])

export default router;