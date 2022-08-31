<template>
<div class="page">
<NavBar/>
<div class="container">
  <div class="overlay-container">
    <div class="overlay">
      <div class="overlay-right">
        <h2>Welcome Back Tutor!</h2>
        <p>Please Login with your Personal info</p>
        </div>
      </div>
</div> 
  <div class="sign-in" >
          <h2>Sign In</h2>
            <div>Use Your Account</div>
        <div class="login">
          <div>
          <div>
         <input type="email" placeholder="Enter Email" v-model="email" />
         </div>
          <div>
         <input type="password"  placeholder="Enter Password" v-model="password"/>
         </div>
         <div>
          <button  class="invert" id="signIn" @click="login()">Sign In </button>
          <div ></div>
          
         </div>
         </div>
         </div>
        </div>
        </div>
    </div>
</template>
<script>
import NavBar from "./NavBar.vue"
import axios from "axios";
export default {
  name: "AdminPage",
  components:{
    NavBar
  },
  data() {
    return {
      email: "",
      password: "",
      
    };
  },
  methods: {
   
    
    async login() {
        
        const data= {
          email:this.email,
          password:this.password,
          
        }
        const req = {
            method: 'post',
            url: `https://public-verify-certificate.herokuapp.com/api/login`,
             data
           ,
        };
        try {
            const res=await axios(req);
            console.log(res.data.data.roles)
            if(res.data.data.roles==="student"){
              alert("Plesae Login To Student Portal")
    this.$router.push({ name:'userLogin' });
            }
            else{
            localStorage.setItem('token',res.data.data.token)
             localStorage.setItem( "roles", res.data.data.roles );
             
            this.$router.push({ name:'UpdateCert' });
            console.log(res.data)
            return res.data;
            
        }
            

        
            
            
        } catch (error) {
            console.log(error);
            return false;
        }
    },

 }, };
</script>
 

<style>
.container{
  top:100px;
  left:10px;

  position:relative;
  width:468px;
  height:480px;
  border-radius:10px;
  overflow:480px;
  overflow:hidden;
  box-shadow: 0 15px 30px rgba(0,0,0,0.2),
  0 15px 30px rgba(0,0,0,0.2);
  background:linear-gradient(to bottom,#efefef,#ccc);

}
.overlay-container{
  position:absolute;
  top:0;
  left:50%;
  width:100%;

height:100%;
overflow:hidden;
transition: transform .5s ease-in-out;
  z-index:100;
}

.overlay{
  position:absolute;  
  height:100%;
  left:-100%;
  width:190%;
   background:linear-gradient(to bottom,#7FD625,#bf6f6f);  
  color: #fff;
  transform:translateX(0);
  transition: transform .5s ease-in-out;
   
}  
 
 
   
  .overlay-left{
    position:absolute;
    top:0;
    left:0;
   text-emphasis-color: black;
   display:flex;
   align-items:center;
   justify-content:space-around;
   flex-direction:column;
   padding:70px 40px;
   width:calc(70% - 10px);
   height:calc(100% - 140px);
   text-align:center;


  }

.overlay-right{
   position:absolute;
    top:0;
    right:0;
   text-emphasis-color: black;
   display:flex;
   align-items:center;
   justify-content:space-around;
   flex-direction:column;
   padding:70px 40px;
   width:calc(70% - 10px);
   height:calc(100% - 140px);
   text-align:center;


  }

button{
  border-radius: 20px;
  border: 1px solid #009345;
  background-color: #009345;
  color:#fff;
  font-size:1rem;
  font-weight:bold;
  padding:10px 40px;
  letter-spacing: 1px;
  text-transform:uppercase;

  transition:transform .1s ease-in;

  /* &:active{
  transform: scale(.9);
  }

  &:focus{
  outline:none;
  } */
}
 /* button.invert {
  background-color: #fff;
} */
/* form{
  

   } */ 

   /* i
   
   
   
   */
/* }  */

/* .sign-in{
  left:0;
  z-index:2;
}
.sign-up{
  left:0;
  z-index:1;
  opacity:0;
} */
/* .sign-up-active{ */

  /* .sign-in{
    transform:translateX(100%);
    opacity:1;
    z-index:5;
    animation:show .5s
    }

  .sign-up{
    transform:translatex(100%);
    opacity:1;
    z-index:5;
  } */
/* } */

/* .overlay-container{
  transform:translateX(-100%)
}
.overlay{
  transform:translateX(50%);

} */
/* .overlay-left{
  transform: translateX(0);
}
.overlay-right{
  transform:translateX(20%);
} */

@keyframes show{
  0%{
    capacity:0;
    z-index:1;
  }
  49%{
    capacity:0;
    z-index:1;
  }
  50%{
    capacity:0;
    z-index:1;
  }
}

</style>


