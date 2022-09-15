<template>
<div class="page">
<NavBar/>

<div class="container">
  
  <div class="overlay-container">
    <div class="overlay2">
      <div class="overlay-right2">
        <h2>Welcome User!</h2>
        <p>Please Login</p>
        </div>
      </div>
</div> 
  <div class="sign-in" >
         
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
  name: "userLogin",
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
            url: `https://public-verify-certificate.herokuapp.com/api
/login`,
             data,
             
           
        };
        try {
            const res=await axios(req);
            // console.log(res.data.data)
            localStorage.setItem('token',res.data.data.token)
            localStorage.setItem('id',res.data.data._id)
            localStorage.setItem('roles',res.data.data.roles)
            localStorage.setItem('course',res.data.data.course)
            
                    this.$router.push({ name:'Public' });
            // console.log(res.data)
            return res.data;
      
           
        }
             catch (error) {
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
.b{
  background-color: black;
  height: 5cm;
}
.overlay2{
  position:absolute;  
  height:100%;
  left:-100%;
  width:190%;
   background:linear-gradient(to bottom,#d69b25,#bf6f6f);  
  color: #fff;
  transform:translateX(0);
  transition: transform .5s ease-in-out;
   
}  
 
 
   
  
.overlay-right2{
  
   position:absolute;
    top:0;
    right:0;
   text-emphasis-color: black;
   display:flex;
   align-items:center;
   justify-content:space-around;
   flex-direction:column;
   padding:70px 40px;
    width:calc(75% - 10px);
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

  
}

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


