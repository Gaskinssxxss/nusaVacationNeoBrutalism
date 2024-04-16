import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/HomePage";
import store from "@/services/store";
import detail from "@/views/PackageDetails";
import order from "@/views/orderPackage";
import packageBar from "@/views/PackagePage";
import profile from "@/views/ProfilePage";
import gallery from "@/views/GalleryPage";
import history from "@/views/UserHistory";
import contact from "@/views/ContactsPage";
import about from "@/views/AboutPage";
import adminDashbord from "@/views/adminDashboard";
import adminTask from "@/views/adminTask";
import adminLogs from "@/views/AdminLogs";
import adminTransaction from "@/views/AdminTransactionValidation"
import fnQ from "@/views/faqAndGuidePage"
import service from "@/views/ourServicesPage.vue";

const routes = [
    {
        path: "/admin",
        name: "Admin Dashboard",
        component: adminDashbord,
        meta: {
            title: "Admin Dashboard",
            authRequired: false,
            authForbidden: false
        }
    },
    {
        path: "/f&q",
        name: "Faq & Guides",
        component: fnQ,
        meta: {
            title: "Faq & Guides",
            authRequired: false,
            authForbidden: false
        }
    },
    {
        path: "/services",
        name: "Services",
        component: service,
        meta: {
            title: "Services",
            authRequired: false,
            authForbidden: false
        }
    },
    {
        path: "/adminTask",
        name: "Admin Task",
        component: adminTask,
        meta: {
            title: "Admin Task",
            authRequired: false,
            authForbidden: false
        }
    },
    {
        path: "/adminLogs",
        name: "Admin Logs",
        component: adminLogs,
        meta: {
            title: "Admin Logs",
            authRequired: false,
            authForbidden: false
        }
    },
    {
        path: "/adminTransaction",
        name: "Admin Transaction",
        component: adminTransaction,
        meta: {
            title: "Admin Transaction",
            authRequired: false,
            authForbidden: false
        }
    },
    {
        path: "/",
        name: "home",
        component: Home,
        meta: {
            title: "Nusa Vacation",
            authRequired: false,
            authForbidden: false
        }
    },
    {
        path: '/detail/:idx',
        name: 'detail',
        component: detail,
        meta: {
            title: "Details Package",
            authRequired: false,
            authForbidden: false
        },
    },
    {
        path: "/order/packages/:idx/order/:idx",
        name: "Order",
        component: order,
        meta: {
            title: "Details Package",
            authRequired: false,
            authForbidden: false
        },
    },
    {
        path: "/package",
        name: "Package",
        component: packageBar,
        meta: {
            title: "Package",
            authRequired: false,
            authForbidden: false
        },
    },
    {
        path: "/profile",
        name: "Profile",
        component: profile,
        meta: {
            title: "Profile",
            authRequired: true,
            authForbidden: false
        },
    },
    {
        path: "/imgCollections",
        name: "Img Collection",
        component: gallery,
        meta: {
            title: "Img Collection",
            authRequired: false,
            authForbidden: false
        },
    },
    {
        path: "/history",
        name: "History",
        component: history,
        meta: {
            title: "History",
            authRequired: true,
            authForbidden: false
        },
    },
    {
        path: "/contact",
        name: "Contact",
        component: contact,
        meta: {
            title: "Contact",
            authRequired: false,
            authForbidden: false
        },
    },
    {
        path: "/about",
        name: "About",
        component: about,
        meta: {
            title: "About",
            authRequired: false,
            authForbidden: false
        },
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

// routes protection
router.beforeEach(async (to, from, next) => {
    // update store if needed
    if (!store.state.isStoreUpdated) {
        await store.dispatch("updateStore");
    }

    // control routes
    const isAuthenticated = store.state.userLoggedIn;
    if (!isAuthenticated && to.meta.authRequired) {
        next({ name: "login" });
    } else if (isAuthenticated && to.meta.authForbidden) {
        next({ name: "user" });
    } else {
        next();
    }
});

router.afterEach((to) => {
    document.title = to.meta.title;
});

export default router;