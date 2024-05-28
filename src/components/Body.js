import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Login } from "./Login"
import { Browse } from "./Browse"

export const Body = ()=>{
    const router = createBrowserRouter([
        {
            path:'/',
            element:<Login />
        },
        {
            path:'/browse',
            element:<Browse />

        }
    ])
    return(
        <RouterProvider router={router}/>
    )
}