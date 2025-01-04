import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  // 配置路由映射关系
  routes: [
    {
      path: "/",
      redirect: "/main",
    },
    {
      path: "/login",
      component: () => import("../views/login/login.vue"),
    },
    {
      path: "/main",
      name: "main",
      component: () => import("../views/main/main.vue"),
    },
    {
      path: "/user",
      name: "user",
      component: () => import("../views/user/user.vue"),
    },
    {
      path: "/:pathMatch(.*)",
      component: () => import("../views/error/404.vue"),
    },
  ],
});



router.beforeEach((to) => {
  const token = localStorage.getItem("LOGIN_TOKEN");
  if (to.path.startsWith("/user") && !token) {
    return "/login";
  }
  if (to.path === "/login" && token) {
    return "/main";
  }
});

export default router;