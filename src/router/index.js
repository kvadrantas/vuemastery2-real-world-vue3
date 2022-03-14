import { createRouter, createWebHistory } from "vue-router";
import EventList from "../views/EventList.vue";
import EventDetails from "../views/event/Details.vue";
import EventLayout from "../views/event/Layout.vue";
import EventEdit from "../views/event/Edit.vue";
import EventRegister from "../views/event/Register.vue";
import NotFound from "../views/event/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "EventList",
    component: EventList,
    props: route => ({ page: parseInt(route.query.page) || 1 })
  },
  {
    path: "/event/:id",
    name: "EventLayout",
    props: true,      // if props set to true, you can pass :id as prop
    component: EventLayout,
    children: [
        {
          path: "",
          name: "EventDetails",
          component: EventDetails,
        },
        {
          path: "edit/",
          name: "EventEdit",
          component: EventEdit,
        },
        {
          path: "register/",
          name: "EventRegister",
          component: EventRegister,
        },
    ]
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/404/:resource',
    name: '404Resource',
    component: NotFound,
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
