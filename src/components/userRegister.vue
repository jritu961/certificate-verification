<template>
    <div>
        <NavBar tab="signup" />
        <div class="container">
            <div class="form-div row">
                <form class="col-md-6 col-sm-12">
                    <div class="row mb-2">
                        <h1>Sign up</h1>
                        <div class="col-sm-12 col-md-12">
                            <label for="username" class="my-3">Username</label>
                            <input
                                v-model.trim="$v.name.$model"
                                :class="{ error: $v.name.$error, valid: !$v.name.$invalid }"
                                type="text"
                                class="form-control"
                                id="username"
                                placeholder="Username"
                            />
                            <div v-if="$v.name.$error" class="errorMessage">
                                <p v-if="!$v.name.required">Username is Required !</p>
                            </div>
                        </div>
                    </div>
                    <div class="row mb-2">
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
                <div class="col-md-1 col-sm-0"></div>
                <div class="col-md-5 col-sm-0">
                    <img src="@/assets/registerlogo.svg" class="img-fluid float-end" alt="..." />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { required, email, minLength } from 'vuelidate/lib/validators';
import NavBar from '@/components/NavBar.vue';
import axios from 'axios';
export default {
    name: 'userRegister',
    components: {
        NavBar,
    },
    data() {
        return {
            name: '',
            email: '',
            password: '',
            roles: '',
        };
    },
    validations: {
        name: {
            required,
        },
        email: {
            required,
            email,
        },
        password: {
            required,
            minLength: minLength(8),
        },
    },
    methods: {
        async register() {
            // event.preventDefault()
            this.loadScreen = this.$loading.show(this.$spinner);
            const req = {
                method: 'post',
                url: `https://public-verify-certificate.herokuapp.com/api/register`,
                data: {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                },
            };

            try {
                const res = await axios(req);

                localStorage.setItem('name', res.data.data.name);
                localStorage.setItem('email', res.data.data.email);
                localStorage.setItem('id', res.data.data._id);
                localStorage.setItem('roles', res.data.data.roles);
                this.$toast.success('Successfully Registered');
                this.loadScreen.hide();
                this.$router.push({ name: 'LandingPage' });

                return res.data;
            } catch (error) {
                console.log(error);
                this.$toast.error('User Already Exits');
                this.email = this.password = this.name = '';
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
                this.register();
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