<template>
  <div class="page">
    <LoginNavBar/>
    <div class="cert">
      <div id="ftr"><NavFeature /></div>
      <div class="form">
        <div><input type="text" placeholder="id" v-model="id" /></div>
        <div><button v-on:click="delCert()">Delete</button></div>
      </div>
    </div>
  </div>
</template>
<script>
import LoginNavBar from "./LoginNavBar.vue";
import NavFeature from "./NavFeature.vue";
import axios from "axios";
export default {
  name: "RemoveCert",
  components: {
    LoginNavBar,
    NavFeature,
  },
  data() {
    return {
      id: "",
    };
  },
  methods: {
    async delCert() {
      
      const req = {
            method: 'delete',
            url: `https://public-verify-certificate.herokuapp.com/api/student/${this.id}`,
            headers: {
                Authorization: localStorage.getItem('token'),
               

            },
        };
        try {
            const res=await axios(req);

                    localStorage.setItem("user-info",req.data)
           alert("Certificate Deleted");
            console.log(res.data)
           
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