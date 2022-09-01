<template>
  <div class="page">
    <NavBar />
    <div class="public">
    

      <div id="public_text">
        <img
        id="logo"
        src="https://assets.website-files.com/603683469df97967298e6e81/62622f351b3fd01d3fc835a4_Asset%209%401.5x.png"
        alt="image"
      />
        <!-- <a src="https://assets.website-files.com/603683469df97967298e6e81/62622f351b3fd01d3fc835a4_Asset%209%401.5x.png"></a> -->
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
            <!-- <div class="alert " role="alert">
  A simple success alert—check it out!
</div> -->
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
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
// import { getCertificateById } from "@/services/certificate";
import axios from "axios";
export default {
  name: "PublicPage",
  components: {
    NavBar,
  },
  data() {
    return {
      certId:localStorage.getItem("id"),
    };
  },
  methods: {
    async search() {
        const id=this.certId
        const req = {
            method: 'get',
            url: `http://localhost:5000/api/student/${id}`,
            headers: {
                Authorization: localStorage.getItem('token'),
               

            },
        };
        try {
            const res=await axios(req);
                    // localStorage.setItem("id",req.data.data.id)
     
            console.log(res.data)
            this.$router.push("/verify");
            return res.data;
            // this.$router.push("/verify");
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
  /* background:linear-gradient(to bottom,#d6d325,#bf6f96); */
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
</style>