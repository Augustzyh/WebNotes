import News from "../components/test1/news"
import NewsList from "../components/test1/news/newsList"
import Product from "../components/test1/product"
import ProductsList from "../components/test1/product/productsList"
import Home from "../components/test1/home"
import Login from "../components/test2/login";
import Add from "../components/test2/console/add";
import Del from "../components/test2/console/del";
import Console from "../components/test2/console/console";

const routes = [
    {
        path: "/",
        exact: true,
        component: Home
    },
    {
        path: "/product",
        component: Product
    },
    {
        path: "/news",
        component: News
    },
    {
        path: "/newsList/:id",
        component: NewsList
    },
    {
        path: "/productsList",
        component: ProductsList
    },
    {
        path: "/login",
        component: Login
    },
    {
        path: "/console",
        component: Console,
        routes: [
            {
                path: "/console/add",
                component: Add
            },
            {
                path: "/console/del",
                component: Del
            }
        ]
    }
];

export default routes;