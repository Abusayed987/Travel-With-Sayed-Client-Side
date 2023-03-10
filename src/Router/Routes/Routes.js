import { createBrowserRouter } from "react-router-dom";
import Main from "../../Lauout/Main";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import AllReview from "../../Pages/Home/Reviews/AllReview/AllReview";
import EditReview from "../../Pages/Home/Reviews/EditReview/EditReview";
import MyReview from "../../Pages/Home/Reviews/MyReview/MyReview";
import AddService from "../../Pages/Home/Services/AddServices/AddService";
import ServiceDetails from "../../Pages/Home/Services/ServiceDetails";
import Services from "../../Pages/Home/Services/Services";
import Login from "../../Pages/Login/Login";
import NotFound from "../../Pages/NotFound/NotFound";
import Signup from "../../Pages/Signup/Signup";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
                loader: ({ params }) => fetch(`https://travel-with-sayed-server.vercel.app/services/${params.serviceId}`)
            },
            {
                path: '/myReview',
                element: <PrivateRoute>
                    <MyReview></MyReview>
                </PrivateRoute>,
            },
            {
                path: '/myReview/edit/:myReviewId',
                element: <PrivateRoute>
                    <EditReview></EditReview>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`https://travel-with-sayed-server.vercel.app/reviews/${params.myReviewId}`)
            },
            {
                path: '/addService',
                element: <PrivateRoute>
                    <AddService></AddService>
                </PrivateRoute>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
        ]
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
])
export default router