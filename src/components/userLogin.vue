<template>
<div class="page">
<NavBar/>
  <section class="vh-100 gradient-custom">
  <div class="container py-2 h-1">
    <div class="row d-flex justify-content-center align-items-center h-1">
      <div class="col-8 col-md-8 col-lg-6 col-xl-5">
        <div class="card bg-dark text-white" style="border-radius: 1rem;">
          <div class="card-body p-5 text-center">

            <div class="mb-md-5 mt-md-4 pb-5">

              <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
              <p class="text-white-50 mb-5">Please enter your login and password!</p>

              <div class="form-outline form-white mb-4">
                <input v-model="email" type="email" id="typeEmailX" class="form-control form-control-lg" />
                <label class="form-label" for="typeEmailX">Email</label>
              </div>

              <div class="form-outline form-white mb-4">
                <input v-model="password" type="password" id="typePasswordX" class="form-control form-control-lg" />
                <label class="form-label" for="typePasswordX">Password</label>
              </div>

             
              <button class="btn btn-outline-light btn-lg px-5" type="submit"  v-on:click="login()">Login</button>

              
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
</template>

<script>
import NavBar from "./NavBar.vue"
import axios from "axios";
export default {
  name: "LoginPage",
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
          password:this.password
        }
        const req = {
            method: 'post',
            url: `http://localhost:5000/api/login`,
             data
           ,
        };
        try {
            const res=await axios(req);
            localStorage.setItem('token',res.data.data.token)
            localStorage.setItem('id',res.data.data._id)
                    this.$router.push({ name:'Public' });
            console.log(res.data)
            return res.data;
        } catch (error) {
            console.log(error);
            return false;
        }
    },

 }, };
</script>

<style>
/* .user{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 90vh;
}
.login{
  width: 20vw;
  margin:10%;
}
@media only screen and (max-width: 668px) {
  .login{
    width: 60vw;
  }
} */
.gradient-custom {
/* fallback for old browsers */
background: #6a11cb;

/* Chrome 10-25, Safari 5.1-6 */
background: -webkit-linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1));

/* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
background: linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1))
}
/* .mb-md-5{
  position: absolute;
} */
</style>