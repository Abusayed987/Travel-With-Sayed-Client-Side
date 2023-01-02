import { createBrowserRouter } from "react-router-dom";
import Main from "../../Lauout/Main";
import Home from "../../Pages/Home/Home/Home";
import AllReview from "../../Pages/Home/Reviews/AllReview/AllReview";
import MyReview from "../../Pages/Home/Reviews/MyReview/MyReview";
import ServiceDetails from "../../Pages/Home/Services/ServiceDetails";
import Services from "../../Pages/Home/Services/Services";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Signup/Signup";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/services/:serviceId',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`http://localhost:4000/services/${params.serviceId}`)
            },
            {
                path: '/myReview',
                element: <MyReview></MyReview>,
            },
            {
                // path: '/allReview',
                // element: <AllReview></AllReview>,
            },
        ]
    }
])
export default router