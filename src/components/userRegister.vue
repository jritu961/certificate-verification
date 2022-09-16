
<template>
   <div>
    <NavBar/>
    <div class="container">
  
  <div class="overlay-container3">
    <div class="overlay3">
      <div class="overlay-right3">
        <h2>Welcome User!</h2>
        <p>Please Register</p>
        </div>
      </div>
</div> 
  <div class="sign-in" >
          
        <div class="login">
           <div>
            <div>
                        <label for="name">Username</label>
                    </div>
                    <div>
                        <input
                            type="text"
                            v-model.trim="$v.name.$model"
                            id="name"
                            class="input-box"
                            placeholder="name"
                            :class="{ error: $v.name.$error, valid: !$v.name.$invalid }"
                        />
                        <transition name="bounce">
                            <div v-if="$v.name.$error" class="errorMessage">
                                <p v-if="!$v.name.required">Username is Required !</p>
                            </div>
                        </transition>
                    </div>

                    <div class="mt-3">
                        <label for="email">Email</label>
                    </div>
                    <div>
                        <input
                            type="email"
                            v-model.trim="$v.email.$model"
                            class="input-box"
                            placeholder="abc@example.com"
                            :class="{ error: $v.email.$error, valid: !$v.email.$invalid }"
                            novalidate
                        />
                        <transition name="bounce">
                            <div v-if="$v.email.$error" class="errorMessage">
                                <p v-if="!$v.email.required">Email is Required !</p>
                                <p v-else-if="$v.email.$invalid">Please enter valid Email !</p>
                            </div>
                        </transition>
                    </div>
                    <div class="mt-3">
                        <label for="password">Password</label>
                    </div>
                    <div>
                        <div class="align-div">
                            <input
                                
                                type="password"
                                v-model.trim="$v.password.$model"
                                class="input-box input-pass"
                                id="password"
                                placeholder="Password"
                                :class="{ error: $v.password.$error, valid: !$v.password.$invalid }"
                            />
                            
                            
                        </div>
                        <transition name="bounce">
                            <div v-if="$v.password.$error" class="errorMessage">
                                <p v-if="!$v.password.required">Password is Required !</p>
                                <p v-else-if="!$v.password.minLength">Password should contain 8 Minimum Character !</p>

                            </div>
                        </transition>
                    </div>
            
          <div>
          <button  class="invert" id="signIn" @click.prevent="onSubmit()">Sign Up</button>
          
          </div>
         </div>
         </div>
         </div>
        
        </div>
   
    </div> 
</template>
<script >

import { required, email, minLength } from 'vuelidate/lib/validators';
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
  validations: {
        name: {
            required,
        },
        email: {
            required,
            email,
        },
        password: {
            required,
            minLength: minLength(8)
           
        }
    },
  methods: {
   
     async register() {
      // event.preventDefault()

        const req = {
            method: 'post',
            url: `https://public-verify-certificate.herokuapp.com/api/register`,
             data:{
            name: this.name,
            email: this.email,
            password: this.password
             }
             
           
        };
       
        try {
          
            const res=await axios(req);
            

            
               localStorage.setItem('name',res.data.data.name)
                localStorage.setItem('email',res.data.data.email)
            localStorage.setItem('id',res.data.data._id)
             localStorage.setItem('roles',res.data.data.roles)
             this.$toast.success('Successfully Registered')
            
                    this.$router.push({ name:'LandingPage' });
            
            return res.data;
             }
             catch (error) {
            console.log(error);
            this.$toast.error('User Already Exits')
             this.email=this.password=this.name=""
            return false;
        
    }
  
 },
 onSubmit() {
            this.$v.$touch();
            if (this.$v.$invalid) {
                this.submitStatus = 'FAIL';
            } else {
                this.submitStatus = 'SUCCESS';
                this.register();
            }
        },
  }
  }
</script>

<style >

.container{
  top:100px;
  left:10px;

  position:relative;
  width:468px;
  height:480px;
  border-radius:10px;
  box-shadow: 0 15px 30px rgba(0,0,0,0.2),
  0 15px 30px rgba(0,0,0,0.2);
  background:linear-gradient(to bottom,#efefef,#ccc);

}

/* it is used so that left content should not be overlaped with right content */
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

/* to show the right color */
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
 
 
   
  /* for the correct position of right cntent */
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

  
}
.errorMessage {
    transition: visibility 0s, opacity 0.5s linear;
    color: rgb(233, 64, 22);
    font-size: 0.95em;
}
.error {
    border: 1.5px solid rgb(255, 9, 9);
    color: rgb(247, 10, 10);
}
.valid {
    border: 1.5px solid rgb(55, 161, 14);
    color: rgb(26, 82, 4);
}
.errorMessage p {
    margin: 5px;
}
 

</style>