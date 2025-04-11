import { createRouter, createWebHistory } from "vue-router";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";

import HomeView from "@/views/HomeView.vue";
import AuthView from "@/views/AuthView.vue";

const routes = [
  { path: "/", name: "Home", component: HomeView },
  { path: "/auth", name: "Auth", component: AuthView },
  {
    path: "/user",
    name: "UserAcc",
    component: () => import("@/views/UserAcc.vue"),
    meta: { requiresAuth: true, role: "user" }
  },
  {
    path: "/barber",
    name: "BarberAcc",
    component: () => import("@/views/BarberAcc.vue"),
    //meta: { requiresAuth: true, role: "barber" }
  },
  {
    path: "/admin",
    name: "AdminAcc",
    component: () => import("@/views/AdminAcc.vue"),
    meta: { requiresAuth: true, role: "admin" }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

function waitForAuthReady() {
  return new Promise((resolve) => {
    const unsubscribe = getAuth().onAuthStateChanged(user => {
      unsubscribe();
      resolve(user);
    });
  });
}

router.beforeEach(async (to, from, next) => {
  const auth = getAuth();
  const db = getFirestore();
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (!requiresAuth) {
    return next();
  }

  const user = auth.currentUser || await waitForAuthReady(); // <- ось тут магія

  if (!user) {
    return next("/auth");
  }

  try {
    const userDoc = await getDoc(doc(db, "users", user.uid));

    if (!userDoc.exists()) {
      return next("/auth");
    }

    const userRole = userDoc.data().role;
    const requiredRole = to.meta.role;

    if (userRole === requiredRole) {
      return next();
    } else {
      return next("/"); // або інший редірект
    }
  } catch (error) {
    console.error("Помилка отримання ролі користувача:", error);
    return next("/");
  }
});

export default router;
