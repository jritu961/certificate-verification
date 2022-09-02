


import Router from 'vue-router';
import PublicPage from '@/components/PublicPage.vue'
import userLogin from '@/components/userLogin.vue'
// import ContactPage from '@/components/ContactPage.vue'
import AdminPage from '@/components/AdminPage.vue'
import RemoveCert from '@/components/RemoveCert.vue'
import NavFeature from '@/components/NavFeature.vue'
import UpdateCert from '@/components/UpdateCert.vue'
import viewAllCert from '@/components/viewAllCert.vue'
import LandingPage from '@/components/LandingPage.vue'
import verifyCert from '@/components/verifyCert.vue'
import userRegister from '@/components/userRegister.vue'
import contactPage from '@/components/contactPage.vue' 

// import Contact from '../components/Contact';

// import store from '@/store';

// import { isAuthenticated } from '@/services/auth';

const meta = {
    authorize: [ 'admin', 'student' ]
};

const router = new Router({
    mode:'history',
    routes:[
         {
        path: '/',
        name: 'LandingPage',
        component: LandingPage
    },    
      
{
        path: '/userLogin',
        name: 'userLogin',
        component: userLogin
    },
    {
        path: '/public',
        name: 'Public',
        component: PublicPage
    },
    {
        path: '/contact',
        name: 'contactPage',
        component: contactPage
    },
    {
        path: '/verify',
        name:'verifyCert',
        component: verifyCert,
        meta
    },
    {
        path: '/admin',
        name: 'Admin',
        component: AdminPage,
       
    },
    {
        path: '/remove',
        name: 'Remove',
        component: RemoveCert,
        meta: {
            authorize: [ 'admin' ]
        }
    },
    {
        path: '/viewAll',
        name: 'viewAllCert',
        component: viewAllCert,
        meta: {
            authorize: [ 'admin' ]
        }
    },
    {
        path: '/feature',
        name: 'NavFeature',
        component:NavFeature,
        meta: {
            authorize: [ 'admin' ]
        }
    },
    {
        path: '/update',
        name: 'UpdateCert',
        component: UpdateCert,
        meta: {
            authorize: [ 'admin' ]
        }
    },
    {
        path: '/register',
        name: 'userRegister',
        component: userRegister,
        meta
    },
    

     ]
});

// Global auth guard
// router.beforeEach(( to, from, next ) => {
//     const authorize = to.meta.authorize
//     // Right now, role-based authorization is NOT supported
//     if( authorize  ) {
//         return next({
//             name: 'login'
//         });
//     } else {
//         if( authorize && !authorize.includes( store.state.auth.role ) ) {
//             return next({
//                 path: '/'
//             });
//         }
//     }

//     next();
// });

export default router;
