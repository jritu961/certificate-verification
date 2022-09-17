


import Router from 'vue-router';
import PublicPage from '@/components/PublicPage.vue'
import userLogin from '@/components/userLogin.vue'
import AdminPage from '@/components/AdminPage.vue'
import RemoveCert from '@/components/RemoveCert.vue'
import NavFeature from '@/components/NavFeature.vue'
import UpdateCert from '@/components/UpdateCert.vue'
import viewAllCert from '@/components/viewAllCert.vue'
import LandingPage from '@/components/LandingPage.vue'
import verifyCert from '@/components/verifyCert.vue'
import userRegister from '@/components/userRegister.vue'
import contactPage from '@/components/contactPage.vue' 
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
        
    },
    {
        path: '/viewAll',
        name: 'viewAllCert',
        component: viewAllCert,
        
    },
    {
        path: '/feature',
        name: 'NavFeature',
        component:NavFeature,
        
    },
    {
        path: '/update',
        name: 'UpdateCert',
        component: UpdateCert,
        
    },
    {
        path: '/register',
        name: 'userRegister',
        component: userRegister,
        
    },
    

     ]
});



export default router;
