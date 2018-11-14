import Home from "../components/home";
import Line from "../components/line";
import SunChart from "../components/sunchart";
import Elephent from "../components/elephent";
import AMap from "../components/map";
import Pie from "../components/pie";
import Gauge from "../components/gauge";
import Parallel from "../components/parallel";
import Calendar from "../components/calendar";
import NotFound from "../components/notfound";

export const routes = [
    {
        path: "/",
        exact: true,
        component: Home
    },
    {
        path: "/line",
        component:Line
    },
    {
        path: "/sunchart",
        component: SunChart
    },
    {
        path: "/elephent",
        component: Elephent
    },
    {
        path: "/map",
        component: AMap
    },
    {
        path: "/pie",
        component: Pie
    },
    {
        path: "/gauge",
        component: Gauge
    },
    {
        path: "/parallel",
        component: Parallel
    },
    {
        path: "/calendar",
        component: Calendar
    },
    {
        path: "*",
        component: NotFound
    }
]