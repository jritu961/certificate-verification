<template>
  <div id="navbar">
    <div id="n_deadspace"></div>
    <div>
      <img
        id="logo"
        src="@/assets/Fynd.png"
        alt="image"
      />
      </div>
      <div id="n_logo">

    </div>
  
    
    <div id="n_deadspace"></div>
    <div id="n_deadspace"></div>
    <div id="n_deadspace"></div>
    <div id="sec">
      <div class="sec">
         <img
        id="Homelogo"
        src="https://logodix.com/logo/1333140.png"
        alt="image"
      />
      
        <router-link to="/public" action="_blank"><a >Verify Fynd Certificate</a></router-link>
      </div>
      <div id="n_deadspace"></div>
    <div id="n_deadspace"></div>
    <div id="n_deadspace"></div>
      <div class="sec">
         <img
        
        id="Tutorlogo"
        src="https://www.clipartkey.com/mpngs/m/112-1126583_clipart-teacher-tutoring-unique-services-logo.png"
        alt="image"
      />
      
        <router-link to="/admin"><a >Tutor's Corner</a></router-link>
      </div>
      <div class="sec">
         <img
        
        id="Userlogo"
        src="https://assets.website-files.com/603683469df97967298e6e81/62622f35eec95c8a992e13be_Asset%2010%401.5x.png"
        alt="image"
      
       
      />
      
         <router-link to="/userLogin"><a>User Login</a></router-link>
        </div>
              <div class="sec">
         <img
        
        id="contact"
        src=""
        alt=""
      
       
      />
      
         <router-link to="/contact"><a>Contact Us</a></router-link>
        </div>
                      <div class="sec">
         <img
        
        id="contact"
        src=""
        alt=""
      
       
      />
      
         <router-link to="/register"><a>Sign Up</a></router-link>
        </div>
        
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
 
};
</script>

<style scoped>
a:link {
  color: green;
  background-color: transparent;
  text-decoration: none;
}
a:visited {
  color: black;
  background-color: transparent;
  text-decoration: none;
}
a:hover {
  color: #fff;
  background-color: transparent;
  text-decoration: underline;
}
a:active {
  color: yellow;
  background-color: transparent;
  text-decoration: underline;
}
#navbar {
  display: flex;
   /* background: #fff;; */
  /* background: linear-gradient(to right,#b2fefa,#0ed2f7); */
  color: rgba(9, 28, 31, 0.493);
  height: 60px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  /* background-color: #009390; */
  background-color: silver;

}

#n_logo,
#sec {
  text-decoration: black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 0.5;
  font-size:4cm;
 
  text-align: center;
  margin: -0.001em;
  
}
#logo {
  top:5px;
  display: flex;
  flex-grow: 0.2;
  justify-content: center;
  align-items: center;
  height: 58px;
}
#Homelogo{
   height:40px;
   
}
#Userlogo{
   height:40px;
   
}


#Tutorlogo
{
   height:40px;
   color:brown;
   background-color: #E0730F;
}
.sec {
  margin-top:200ew;;
  top:200px;
  flex-grow: 0.5;
  font-size: 0.5cm;
   
}
#n_deadspace {
  width: 0.3vw;
}
</style>