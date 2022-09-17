
<template>
    <div class="page">
        <NavBar tab="tutor" />
        <div class="container">
            <div class="form-div row">
                <div class="col-md-5 col-sm-0">
                    <img src="@/assets/tutorlogin.svg" class="img-fluid float-end" alt="..." />
                </div>
                <div class="col-md-1 col-sm-0"></div>
                <form class="col-md-6 col-sm-12">
                    <div class="row mb-2">
                        <h1>Tutor sign in</h1>
                        <div class="col-sm-12 col-md-12">
                            <label for="inputEmail3" class="my-3">Email</label>
                            <input
                                v-model.trim="$v.email.$model"
                                type="email"
                                class="form-control"
                                id="inputEmail3"
                                placeholder="Email"
                                :class="{ error: $v.email.$error, valid: !$v.email.$invalid }"
                            />
                            <div v-if="$v.email.$error" class="errorMessage">
                                <p v-if="!$v.email.required">Email is Required !</p>
                                <p v-else-if="$v.email.$invalid">Please enter valid Email !</p>
                            </div>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-sm-12 col-md-12">
                            <label for="inputPassword3" class="my-3">Password</label>
                            <input
                                v-model.trim="$v.password.$model"
                                type="password"
                                class="form-control"
                                id="inputPassword3"
                                placeholder="Password"
                                :class="{ error: $v.password.$error, valid: !$v.password.$invalid }"
                            />
                            <div v-if="$v.password.$error" class="errorMessage">
                                <p v-if="!$v.password.required">Password is Required !</p>
                                <p v-else-if="!$v.password.minLength">Password should contain 8 Minimum Character !</p>
                            </div>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-sm-12 col-md-6 mt-3">
                            <button type="submit" class="btn btn-primary" @click.prevent="onSubmit">Sign up</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import { required, email, minLength } from 'vuelidate/lib/validators';
import NavBar from './NavBar.vue';
import axios from 'axios';
export default {
    name: 'AdminPage',
    components: {
        NavBar,
    },
    data() {
        return {
            email: '',
            password: '',
            roles: '',
        };
    },
    validations: {
        email: {
            required,
            email,
            isUnique(value) {
                if (value === '') return true;

                //eslint-disable-next-line
                var email_regex = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,12})+$/;
                return new Promise((resolve) => {
                    setTimeout(() => {
                        resolve(email_regex.test(value));
                    }, 350 + Math.random() * 300);
                });
            },
        },
        password: {
            required,
            minLength: minLength(8),
        },
    },
    methods: {
        async login() {
            this.loadScreen = this.$loading.show(this.$spinner);
            const data = {
                email: this.email,
                password: this.password,
            };
            const req = {
                method: 'post',
                url: `https://public-verify-certificate.herokuapp.com/api/login`,
                data,
            };
            try {
                const res = await axios(req);

                if (res.data.data.roles === 'student') {
                    this.loadScreen.hide();
                    this.$toast.error('Please Login To User Portel');
                    this.$router.push({ name: 'userLogin' });
                } else {
                    this.$toast.success('Login Successfully');
                    localStorage.setItem('token', res.data.data.token);
                    localStorage.setItem('roles', res.data.data.roles);
                    this.loadScreen.hide();
                    this.$router.push({ name: 'UpdateCert' });

                    return res.data;
                }
            } catch (error) {
                console.log(error);
                this.$toast.error('Email or Password is invalid');
                this.loadScreen.hide();
                return false;
            }
        },
        onSubmit() {
            this.$v.$touch();
            if (this.$v.$invalid) {
                this.submitStatus = 'FAIL';
            } else {
                this.submitStatus = 'SUCCESS';
                this.login();
            }
        },
    },
};
</script>

<style scoped>
.form-div {
    margin: 60px auto;
    padding: 40px;
    border: 1px solid rgb(160, 159, 159);
    border-radius: 10px;
}
.image-part {
    background: url('@/assets/logo2.svg');
    background-repeat: no-repeat;
}

.errorMessage {
    transition: visibility 0s, opacity 0.5s linear;
    color: rgb(233, 64, 22);
    font-size: 0.95em;
}
.error {
    border: 1.5px solid rgb(255, 9, 9);
    color: rgb(247, 10, 10);
}
.valid {
    border: 1.5px solid rgb(55, 161, 14);
    color: rgb(26, 82, 4);
}
.errorMessage p {
    margin: 5px;
}
</style>