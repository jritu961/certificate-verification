
<template>
   <div>
    <NavBar/>
    <section class="h-100 h-custom" style="background-color: #8fc4b7;">
  <div class="container py-1 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-8 col-xl-4">
        <div class="card rounded-3">
          <!-- <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img3.webp"
            class="w-100" style="border-top-left-radius: .3rem; border-top-right-radius: .3rem;"
            alt="Sample photo"> -->
          <div class="card-body p-4 p-md-5">
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
</section>
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
                    this.$router.push({ name:'LandingPaage' });
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
</style>