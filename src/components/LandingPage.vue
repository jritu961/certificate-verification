
<template>
    <div>
      <NavBar/>
<!-- <div class=">
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">FYND </b-navbar-brand>
     <b-navbar-brand  href="#"><h2>Public Verify Certificate</h2></b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="/register">Sign Up</b-nav-item>
        
        <b-nav-item href="/userLogin">Sign In</b-nav-item>
        <b-nav-item href="/admin" >Tutor Page</b-nav-item>
        <b-nav-item href="/contact" >Contact</b-nav-item>
      </b-navbar-nav>

       Right aligned nav items -->
       <!-- <b-navbar-nav class="ml-auto"> -->
         

        <!-- <b-nav-item-dropdown   text="Contact Us" right>
          <b-dropdown-item href="https://www.facebook.com/profile.php?id=100005013976325">Facebook</b-dropdown-item>
          <b-dropdown-item href="https://www.instagram.com/ritu.nature111/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png">Instagram</b-dropdown-item>
          <b-dropdown-item href="https://www.linkedin.com/in/ritu-jaiswal-4541851b3">Linked</b-dropdown-item>
         </b-nav-item-dropdown> -->

       
       <!-- </b-navbar-nav>
     </b-collapse>
   </b-navbar>
</div>
   -->
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
/* #Tutorlogo{
    height: 200px;
} */
/* #auth{
    height: 4cm;
} */
.main{
  align-content: center;
  justify-content: space-around;

 display:grid;
 gap:1em;
 grid-template-columns: 1fr 2fr;
}
.content{
 
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