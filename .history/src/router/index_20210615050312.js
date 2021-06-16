import { createRouter, createWebHistory } from "vue-router";
const Home = () =>
    import ("@/views/Home.vue");
const About = () =>
    import ("@/views/About.vue");
const Employee = () =>
    import ("@/views/Employee.vue");
const Programmes = () =>
    import ("@/views/Programmes.vue");
const ProgramPage = () =>
    import ("@/views/ProgramPage.vue");
const Reports = () =>
    import ("@/views/Reports.vue");
const Events = () =>
    import ("@/views/Events.vue");
const Resources = () =>
    import ("@/views/Resources.vue");
const News = () =>
    import ("@/views/News.vue");

const routes = [{
    path: "/",
    name: "Home",
    component: Home,
}, ];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;