
<template>
    <div>
      <NavBar/>

 <div class="row">
            <div class="col-4 align-self-center">
              <img
        
        id="Tutorlogo"
        src="@/assets/logo1.svg" 
        weidth="300px"
        alt="image"
      />
            </div>
            <div class="col-8 align-self-center">
               <h2>  The entire process of certificate verification is at your fingertips. We provide direct access to certification verification webpage. Anybody can verify the certificates with register number or certification number. Institutes are uploading their student’s details directly. We keep all the data in the archive. By this, can avoid certificate faking.</h2>
         
            </div>
        </div>
        <br />
        <br />
        <br />
        <div class="row">
            <div class="col-8 align-self-center">
              <h2> We help institutions to make their certification verifications online.
    This makes verification faster and easily accessible. To add you network in the network please contact us.
   </h2>
            </div>
            <div class="col-4 align-self-center">
               <img
        
        id="auth"
        src="@/assets/logo2.svg"
        alt="image"
      />
            </div>
        </div>
</div>
</template>
<script >
import NavBar from "@/components/NavBar.vue";
export default {
  name: "LandingPage",
  components: {
    NavBar
  }
}
</script>
<style >
 .b{
    font-size: 1cm;
    color: rgb(165, 42, 42);
 }
 h2{
  text-align: center;
  
  color: #4CAF50;
}

.main{
  align-content: center;
  justify-content: space-around;

 display:grid;
 gap:1em;
 grid-template-columns: 1fr 2fr;
}

.main2{
  justify-content: space-around;
  display:grid;
 gap:1em;
 grid-template-columns: 2fr 1fr;
}
.content2{
  text-align: center;
  font-size: 1cm;
  color: #4CAF50;
}
</style>