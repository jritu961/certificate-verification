<template>
  <div class="page">
    <LoginNavBar/>
    <div class="cert">
      <div id="ftr"><NavFeature /></div>
      <div class="form">
        <div>
          <input type="text" placeholder="Student Name" v-model="name" />
        </div>
        <div><input type="text" placeholder="Course" v-model="course" /></div>
        <div><input type="text" placeholder="Email" v-model="email" /></div>
        
        
        
        <div><input type="text" placeholder="Roll No" v-model="rollNumber" /></div>
        <div><button v-on:click="updateCert()">Update</button>
</div>
      </div>
    </div>
  </div>
</template>
<script>
import LoginNavBar from "./LoginNavBar.vue";
import NavFeature from "./NavFeature.vue";
import axios from "axios";
export default {
  name: "UpdateCert",
  components: {
    LoginNavBar,
    NavFeature,
  },
  data() {
    
    return {
          name: "",
      course: "",
      email: "",
      rollNumber: "",
      
    };
  },

  methods: {
      async updateCert() {
        // console.warn(this.email);
       
        const req = {
           
            method: 'patch',
            url: `https://public-verify-certificate.herokuapp.com/api/student/${this.email}`,
             data:{
            name: this.name,
            course: this.course,
            rollNumber: this.rollNumber
            
             },
            headers: {
                Authorization: localStorage.getItem('token'),
            } 

            }
        
         try {
            const res=await axios(req);
            localStorage.setItem("user-data",req.data)
             
            
            
             
            alert("Certificate Updated");
            
            return res.data;

        } catch (error) {
            console.log(error);
            return false;
        }
         
    
    },
   },
 };
</script>
<style scoped>
.cert {
  display: flex;
  height: 90vh;
}
#ftr {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 0.8;
}
.form{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-grow: 1;
}
button{
  padding: 10px;
  padding-left: 50px;
  padding-right: 50px;
}
@media only screen and (max-width: 668px) {
  .cert{
    flex-direction: column;
  }
}
</style>