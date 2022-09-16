<template>
<div class="page">
<NavBar/>
<div class="container">
  <div class="overlay-container">
    <div class="overlay">
      <div class="overlay-right">
        <h2>Welcome Tutor!</h2>
        <p>Please Login</p>
        </div>
      </div>
</div> 
  <div class="sign-in" >
  
        <div class="login">
          <div>
          <div>
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
                                <p v-if="!$v.email.required">Email is Required</p>
                                <p v-else-if="$v.email.$invalid">Please enter valid email !</p>
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
                              
                            </div>
                        </transition>
                    </div>
         <div>
         <div>
          <button  class="invert" id="signIn" @click="onSubmit()">Sign In </button>
         
          </div>
         </div>
         </div>
         </div>
        </div>
        </div>
    </div>
</template>
<script>
import { required, email, minLength } from 'vuelidate/lib/validators';
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
      roles:""
      
    };
  },
  validations: {
        email: {
            required,
            email,
            isUnique(value) {
                if (value === '') return true;

                //eslint-disable-next-line
                var email_regex = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,12})+$/;
                return new Promise((resolve) => {
                    setTimeout(() => {
                        resolve(email_regex.test(value));
                    }, 350 + Math.random() * 300);
                });
            },
        },
        password: {
            required,
            minLength: minLength(8),
        },
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

            if(res.data.data.roles==="student"){
              alert("Plesae Login To Student Portal")
             this.$router.push({ name:'userLogin' });
            }
            else{
            localStorage.setItem('token',res.data.data.token)
             localStorage.setItem( "roles", res.data.data.roles );
             
            this.$router.push({ name:'UpdateCert' });

            return res.data;
            
        }
        } catch (error) {
            console.log(error);
            return false;
        }
    },
onSubmit() {
            this.$v.$touch();
            if (this.$v.$invalid) {
                this.submitStatus = 'FAIL';
            } else {
                this.submitStatus = 'SUCCESS';
                this.login();
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


