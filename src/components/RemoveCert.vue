<template>
    <div class="page">
        <LoginNavBar />
        <NavFeature />
        <div class="container form-box mb-5 p-4">
            <div class="form-div row">
                <form class="col-md-6 col-sm-12">
                    <div class="row mb-3 mt-5"></div>
                    <div class="row mb-3 mt-5">
                        <h1>Remove Certificate</h1>
                        <div class="col-sm-12 col-md-12">
                            <label class="my-3">Student Id</label>
                            <input v-model="id" type="text" class="form-control" placeholder="Student id" />
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-sm-12 col-md-6 mt-3">
                            <button type="submit" class="btn btn-primary" @click.prevent="delCert()">Sign up</button>
                        </div>
                    </div>
                </form>
              
                <div class="col-md-6 col-sm-12">
                    <img src="@/assets/deleCert.svg" class="img-fluid float-end" alt="..." />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import LoginNavBar from './LoginNavBar.vue';
import NavFeature from './NavFeature.vue';
import axios from 'axios';
export default {
    name: 'RemoveCert',
    components: {
        LoginNavBar,
        NavFeature,
    },
    data() {
        return {
            id: '',
        };
    },
    methods: {
        async delCert() {
            this.loadScreen = this.$loading.show(this.$spinner);
            console.log(this.id);
            const req = {
                method: 'delete',
                url: `https://public-verify-certificate.herokuapp.com/api/student/${this.id}`,
                headers: {
                    Authorization: localStorage.getItem('token'),
                },
            };
            try {
                const res = await axios(req);

                localStorage.setItem('user-info', req.data);
                this.$toast.success('Certificate Deleted');
                this.loadScreen.hide();
                return res.data;
            } catch (error) {
                console.log(error);
                this.$toast.error('Id is Invalid');
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