<template>
    <div class="page">
        <LoginNavBar />
        <NavFeature />
        <div class="container form-box mb-5 p-3">
            <div class="form-div row">
                <div class="col-md-1 col-sm-12"></div>
                <div class="col-md-4 col-sm-12 mt-3">
                    <img src="@/assets/addCert.svg" class="img-fluid float-end" alt="..." />
                </div>
                <div class="col-md-1 col-sm-12"></div>
                <form class="col-md-6 col-sm-12">
                    <div class="row mb-2">
                        <h1>Add Certificate</h1>
                        <div class="col-sm-12 col-md-12">
                            <label class="my-3">Name</label>
                            <input v-model="name" type="text" class="form-control" placeholder="Name" />
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-sm-12 col-md-12">
                            <label class="my-3">Course</label>
                            <input v-model="course" type="text" class="form-control" placeholder="Course" />
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-sm-12 col-md-12">
                            <label class="my-3">Email</label>
                            <input v-model="email" type="Email" class="form-control" placeholder="Email" />
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-sm-12 col-md-12">
                            <label class="my-3">Roll Number</label>
                            <input v-model="rollNumber" type="number" class="form-control" placeholder="Roll Number" />
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-sm-12 col-md-6 mt-3">
                            <button type="submit" class="btn btn-primary" @click.prevent="updateCert()">Sign up</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import LoginNavBar from './LoginNavBar.vue';
import NavFeature from './NavFeature.vue';
import axios from 'axios';
export default {
    name: 'UpdateCert',
    components: {
        LoginNavBar,
        NavFeature,
    },
    data() {
        return {
            name: '',
            course: '',
            email: '',
            rollNumber: '',
        };
    },

    methods: {
        async updateCert() {
            // console.warn(this.email);
            this.loadScreen = this.$loading.show(this.$spinner);
            const req = {
                method: 'patch',
                url: `https://public-verify-certificate.herokuapp.com/api/student/${this.email}`,
                data: {
                    name: this.name,
                    course: this.course,
                    rollNumber: this.rollNumber,
                },
                headers: {
                    Authorization: localStorage.getItem('token'),
                },
            };

            try {
                const res = await axios(req);
                // localStorage.setItem('user-data', req.data);
                // console.log(data)
                this.$toast.success('Certificate Updated');
                this.loadScreen.hide();
                this.name = this.course = this.email = this.rollNumber = '';
                return res.data;
            } catch (error) {
                console.log(error);
                this.$toast.error('Email is Invalid');
                this.loadScreen.hide();
                return false;
            }
        },
    },
};
</script>
<style scoped>
.form-box {
    border: 1px solid lightgray;
    border-radius: 8px;
}
</style>