import { createRouter, createWebHistory } from "vue-router";
import Home from "/src/views/Home.vue";
import Programmes from "/src/views/Programmes.vue";
const About = () =>
    import ("/src/views/About.vue");
const Employee = () =>
    import ("/src/views/Employee.vue");

const ProgramPage = () =>
    import ("/src/views/ProgramPage.vue");
const Reports = () =>
    import ("/src/views/Reports.vue");
const Events = () =>
    import ("/src/views/Events.vue");
const Resources = () =>
    import ("/src/views/Resources.vue");
const News = () =>
    import ("/src/views/News.vue");

const routes = [{
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/en/about-diku",
        name: "About",
        component: About,
    },
    {
        path: "/en/about-diku/employees",
        name: "Employee",
        component: Employee,
    },
    {
        path: "/en/programmes",
        name: "Programmes",
        component: Programmes,
    },
    {
        path: "/en/programmes/:title",
        name: "ProgramPage",
        component: ProgramPage,
        props: true,
    },
    {
        path: "/en/reports",
        name: "Reports",
        component: Reports,
    },
    {
        path: "/en/events",
        name: "Events",
        component: Events,
    },
    {
        path: "/en/resources-and-tools",
        name: "Resources",
        component: Resources,
    },
    {
        path: "/en/news",
        name: "News",
        component: News,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;