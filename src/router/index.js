


import Router from 'vue-router';
import PublicPage from '@/components/PublicPage.vue'
import userLogin from '@/components/userLogin.vue'
// import ContactPage from '@/components/ContactPage.vue'
import AdminPage from '@/components/AdminPage.vue'
import RemoveCert from '@/components/RemoveCert.vue'
import NavFeature from '@/components/NavFeature.vue'
import UpdateCert from '@/components/UpdateCert.vue'
import viewAllCert from '@/components/viewAllCert.vue'
import CertDownload from '@/components/CertDownload.vue'
import verifyCert from '@/components/verifyCert.vue'

// import Contact from '../components/Contact';

// import store from '@/store';

// import { isAuthenticated } from '@/services/auth';

const roles = {
    authorize: [ 'admin', 'student' ]
};

const router = new Router({
    mode:'history',
    routes:[
    //      {
    //     path: '/',
    //     name: 'NavBar',
    //     component: NavBar
    // },    
//     },
      
{
        path: '/userLogin',
        name: 'userLogin',
        component: userLogin
    },
    {
        path: '/',
        name: 'Public',
        component: PublicPage
    },
    {
        path: '/verify',
        name:'verifyCert',
        component: verifyCert,
        roles
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
        roles: {
            authorize: [ 'admin' ]
        }
    },
    {
        path: '/viewAll',
        name: 'viewAllCert',
        component: viewAllCert,
        roles: {
            authorize: [ 'admin' ]
        }
    },
    {
        path: '/feature',
        name: 'NavFeature',
        component:NavFeature,
        roles: {
            authorize: [ 'admin' ]
        }
    },
    {
        path: '/update',
        name: 'UpdateCert',
        component: UpdateCert,
        roles: {
            authorize: [ 'admin' ]
        }
    },
    {
        path: '/download',
        name: 'CertDownload',
        component: CertDownload,
        roles
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
