<template>
  <div>
    <LoginNavBar />
    <div>
      <h1>All Certificates Issued</h1>
      <table>
        <thead>
          <th>Id</th>
          <th>Name</th>
          <th>Course</th>
          <th>Email</th>
          <th>Roll Number</th>
          <th>date</th>
        </thead>
        <tbody>
          <tr v-for="item in list" :key="item">
            <td>{{ item._id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.course }}</td>
            <td>{{ item.email }}</td>
            <td>{{ item.rollNo }}</td>
            <td>{{ item.date }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import LoginNavBar from "./LoginNavBar.vue";
import axios from "axios";
export default {
  name: "viewAllCert",
  components: {
    LoginNavBar,
  },
  data() {
    return {
      list: [],
    };
  },
  async mounted() {
    const req = {
            method: 'get',
            url: `https://public-verify-certificate.herokuapp.com/api/student`,
            
            headers: {
                Authorization: localStorage.getItem('token'),
               

            },
        };
          
        try {
            const res=await axios(req);
            localStorage.setItem("user-data",req.data)
                    // localStorage.setItem("id",req.data.data.id)
            this.list = res.data.details;
            console.log(res.data)
            
            return res.data;
            // this.$router.push("/verify");
        } catch (error) {
            console.log(error);
            return false;
        }
  //   let result = await axios.get(
  //     " http://localhost:5000/api/student"
  //   );
  //   this.list = result.data.users;
   },
};
</script>

<style scoped>
h1 {
  color: red;
}
table {
  width: 100vw;
}
th,
td,
h1 {
  text-align: center;
}
thead,
tr:nth-child(even) {
  background-color: #f2f2f2;
}
tr:nth-child(odd) {
  background-color: #ffffff;
}
@media only screen and (max-width: 800px) {
  th,td,h1 {
  padding: 6px;
}
table{
  font-size: 0.45em;
}
#n_deadspace{
  width:70vw;
}
h1{
  font-size: 0.7em;
}
}
@media only screen and (min-width: 801px) {
  th,td,h1 {
  padding: 12px;
}
table{
  font-size: 0.8em;
}
#n_deadspace{
  width:70vw;
}
}
</style>