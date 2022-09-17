<template>
    <div>
        <LoginNavBar />
        <div>
            <button class="btn btn-info button-div">
                <router-link to="/update" class="nav-link mx-3 text-light"><span id="nav-link">Back</span></router-link>
            </button>
            <h1>All Certificates Issued</h1>

            <table>
                <thead>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Course</th>
                    <th>Email</th>
                    <th>Roll Number</th>
                    <!-- <th>date</th> -->
                </thead>
                <tbody>
                    <tr v-for="item in list" :key="item">
                        <td>{{ item._id }}</td>
                        <td>{{ item.name }}</td>
                        <td>{{ item.course }}</td>
                        <td>{{ item.email }}</td>
                        <td>{{ item.rollNumber }}</td>
                        <!-- <td>{{ item.date }}</td> -->
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import LoginNavBar from './LoginNavBar.vue';
import axios from 'axios';
export default {
    name: 'viewAllCert',
    components: {
        LoginNavBar,
    },
    data() {
        return {
            list: [],
        };
    },
    async mounted() {
        this.loadScreen = this.$loading.show(this.$spinner);
        const req = {
            method: 'get',
            url: `https://public-verify-certificate.herokuapp.com/api/student`,

            headers: {
                Authorization: localStorage.getItem('token'),
            },
        };

        try {
            const res = await axios(req);
            localStorage.setItem('user-data', req.data);
            this.list = res.data.details;
            this.loadScreen.hide();
            return res.data;
        } catch (error) {
            console.log(error);
            this.loadScreen.hide();
            return false;
        }
    },
};
</script>

<style scoped>
.button-div {
    float: left;
    position: relative;
    left: 30px;
    top: 20px;
}
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
    th,
    td,
    h1 {
        padding: 6px;
    }
    table {
        font-size: 0.45em;
    }
    #n_deadspace {
        width: 70vw;
    }
    h1 {
        font-size: 0.7em;
    }
}
@media only screen and (min-width: 801px) {
    th,
    td,
    h1 {
        padding: 12px;
    }
    table {
        font-size: 0.8em;
    }
    #n_deadspace {
        width: 70vw;
    }
}
</style>