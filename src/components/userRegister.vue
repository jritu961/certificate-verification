
<template>
   <div>
    <NavBar/>
    <div class="container">
  <!-- <div v-show="course!=='undefined'"> -->
  <div class="overlay-container3">
    <div class="overlay3">
      <div class="overlay-right3">
        <h2>Welcome User!</h2>
        <p>Please Register</p>
        </div>
      </div>
</div> 
  <div class="sign-in" >
          <!-- <h2>Sign In</h2>
            <div>Use Your Account</div> -->
        <div class="login">
          <div>
            <div>
         <input type="text" placeholder="Name" v-model="name" />
         </div>
          <div>
         <input type="email" placeholder="Enter Email" v-model="email" />
         </div>
          <div>
         <input type="password"  placeholder="Enter Password" v-model="password"/>
         </div>
         <div>
          <button  class="invert" id="signIn" @click="register()">Sign Up</button>
          <div ></div>
          </div>
         </div>
         </div>
         </div>
        <!-- </div> -->
        <!-- <div class="b" v-show="course==='undefined'">alert('hii')</div> -->
        </div>
    <!-- <section class="h-100 h-custom" style="background-color: #8fc4b7;">
  <div class="container py-0 h-90">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-8 col-xl-4">
        <div class="card rounded-3"> -->
          <!-- <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img3.webp"
            class="w-100" style="border-top-left-radius: .3rem; border-top-right-radius: .3rem;"
            alt="Sample photo"> -->
          <!-- <div class="card-body p-3 p-md-1">
            <h3 class="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Registration Info</h3>

            <form class="px-md-2">

              <div class="form-outline mb-4">
                <input type="text" v-model="name" id="form3Example1q" class="form-control" />
                <label class="form-label" for="form3Example1q">Name</label>
              </div>

              <div class="row">
                
              <div class="form-outline mb-4">
                <input type="email" v-model="email" id="form3Example1q" class="form-control" />
                <label class="form-label" for="form3Example1q" >email</label>
              </div>
                <div class="col-md-6 mb-4">
                               <div class="col-md-6 mb-4">
                      <select class="select" v-model="roles">
              <input type="text" v-model="text" id="form3Example1q" class="form-control" />
                <label class="form-label" for="form3Example1q" >email</label>

                    <option value="1" disabled>Roles</option>
                    <option value="2">student</option>
                   </select>


                </div> 

                </div>
                 <input type="Password" v-model="password" id="form3Example1q" class="form-control" />
                <label class="form-label" for="form3Example1q">Password</label>
              </div>

              <div class="mb-4">

                

              </div>

             
              <button type="submit" class="btn btn-success btn-lg mb-1"  @click="register()">Submit</button>

            </form>

          </div>
        </div>
      </div>
    </div>
  </div>
</section> -->
    </div> 
</template>
<script >
import NavBar from "@/components/NavBar.vue";
import axios from "axios";
export default {
  name: "userRegister",
  components: {
    NavBar,
  },
   data() {
    return {
      name:"",
      email: "",
      password: "",
      roles:""
      
    }
  },
  methods: {
   
     async register() {
      event.preventDefault()
        console.warn("userRegister",this.name,this.email,this.password)
       // const data= {
        //   email:this.email,
        //   password:this.password,
          
        // }
        const req = {
            method: 'post',
            url: `https://public-verify-certificate.herokuapp.com/api/register`,
             data:{
            name: this.name,
            email: this.email,
            password: this.password
             },
            headers: {
                Authorization: localStorage.getItem('token'),
            } 
             
           
        };
       
        try {
            const res=await axios(req);
            // console.log(res.data.data.roles)
              // localStorage.setItem('token',res.data.data.token)
               localStorage.setItem('name',res.data.data.name)
                localStorage.setItem('email',res.data.data.email)
            localStorage.setItem('id',res.data.data._id)
             localStorage.setItem('roles',res.data.data.roles)
             alert("Registered Successful")
            //  alert(res.data.data._id)
                    this.$router.push({ name:'LandingPage' });
            console.log(res.data)
            return res.data;
      
           
        }
             catch (error) {
            console.log(error);
            return false;
        
    }
  
 }
  }
  }
</script>

<style >
/* @media (min-width: 1025px) {
.h-custom {
height: 80vh !important;
}
} */
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
.overlay-container3{
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
.overlay3{
  position:absolute;  
  height:100%;
  left:-100%;
  width:190%;
   background:linear-gradient(to bottom,#d69b25,#bf6f6f);  
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

.overlay-right3{
  
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