<template>
<div >
    <NavBar/>
      <div>
        <div class="q_parent">
        <div id="q_text">  
            <div id="text1" ><h1>Feel Free To Send Us A Message About <br> Your Website Needs</h1></div>
            <div id="text2"><h4>For more details you can connect us Social Media</h4></div>
            </div>
        <div id="q_deadspace"></div>
         <div id="socialmedia">
            <a  href="https://www.facebook.com/profile.php?id=100005013976325"><img id="fb" src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png" alt=""></a>
            <a  href="https://www.instagram.com/ritu.nature111/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png" alt="" id="insta"></a>
            <a  href=""><img src="https://1000logos.net/wp-content/uploads/2021/04/Twitter-logo.png" alt="" id="twitter"></a>
            <a  href="https://www.linkedin.com/in/ritu-jaiswal-4541851b3"><img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" id="li"></a>
        </div></div><div>
        <footer class="footer"><div>©Copyright 2022 All Rights Reserved.</div>
            <div>design:<span id="dname">Ritu jaiswal</span></div>
        </footer>
    </div>
      </div>
       </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
 export default {
    name:"contactPage",
    components:{
        NavBar
    }
}
</script>

<style >
.q_parent{
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgb(49, 49, 49);
    background-color: antiquewhite;  
    padding: 8%;
    height: 60vh;
}
#q_callbtn{
    height: 20px;
    border: red solid 0.5px;
    border-radius: 100px;
}
#q_deadspace{
    flex-grow: 0.6;
}
#fb,#insta,#twitter,#li{
    padding: 5px;
    height: 80px;
    margin: 3px;
}
#socialmedia,.footer{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
}
#text1,#text2,#text3{
    margin:10px;
}
</style>