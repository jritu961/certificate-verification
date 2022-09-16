<template>
  <div class="page">
    <LoginNavBar/>
  <div v-show="course!=='undefined'">
    <div class="public">
    

      <div id="public_text">
        <img
        id="logo"
        src="https://assets.website-files.com/603683469df97967298e6e81/62622f351b3fd01d3fc835a4_Asset%209%401.5x.png"
        alt="image"
      />
        
        <h1>
          Welcome to Public Verify Certificate,
          <h6>
            ------------------------------------------------------------------------------
          </h6>
           Validate Your Certificates Here
        </h1>
      </div>
      <div id="public_search">
        <div class="search">
            
          <h2>Verify Certificates Here</h2>
          <div>
            <input
              id="CertificateId"
              type="text"
              placeholder="Enter Certificate id"
              name="cert_id"
              v-model="certId"
              required
            />
          </div>
          <div id="btn">
            <button v-on:click="search()" id="submit" type="submit">
              Verify
            </button>
          </div>
        </div>

      </div>
    </div>
    <div v-show="course==='undefined'" class="noCourse"><div class="notFound">when course is not assigned</div></div>
  </div>
  </div>
</template>

<script>
import LoginNavBar from "./LoginNavBar.vue";

import axios from "axios";
export default {
  name: "PublicPage",
  components: {
    LoginNavBar,
  },
  data() {
    return {
      certId:localStorage.getItem("id"),
      course:localStorage.getItem("course")
    };
  }
  ,
  mounted(){
   if(this.course==='undefined'){
    this.$toast.error('Certificate Not Generated')
    // alert("Certificate Not Generated");
   }
  },
  methods: {
    async search() {
        const id=this.certId
        const req = {
            method: 'get',
            url: `https://public-verify-certificate.herokuapp.com/api/student/${id}`,
            headers: {
                Authorization: localStorage.getItem('token'),
               

            },
        };
        try {
         
            const res=await axios(req);
                    
     
            // console.log(res.data)

             
            this.$router.push("/verify");
            return res.data;


        } catch (error) {
            console.log(error);
            return false;
        }
    
   
      }
       
  },
};
</script>
<style scoped>
#CertificateId{
  border:1px solid black;
  background-color: #fff;

}
.public {
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #FDF5DF;
  
}
#submit{
  height:35px;
  margin:10px;
}
#logo{
  height:400px;
  padding:20px;
}
#public_text,
#public_search {
  width: 50vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
h1 {
  color: rgb(120, 70, 70);
}
@media only screen and (max-width: 668px) {
  #public_text {
    display: none;
  }
 #public_search{
  width: 80vw;
} 
}
.notFound{
  margin-top: 350px;
  font-size: 90px;
  color: red;
}
.noCourse{
  background-color: black;
  width:100%;
  height:500px;
}
</style>