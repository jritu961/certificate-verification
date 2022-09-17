<template>
    <div id="navbar">
        <nav class="navbar navbar-expand-lg nav-color">
            <div class="container">
                <router-link class="navbar-brand" to="/">
                    <img src="@/assets/Fynd.png" alt="" width="25" height="30" class="d-inline-block align-text-top" />
                    <span class="p-2 fw-bold" id="nav-link">Fynd Academy</span>
                </router-link>

                <form class="d-flex">
                    <router-link to="/contact" class="nav-link mx-3"><span id="nav-link">Contact Us</span></router-link>
                    <router-link to="/register" class="nav-link mx-3">
                        <span id="nav-link" @click.prevent="logout()">Logout </span>
                    </router-link>
                </form>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: ':LoginNavBar',
    methods: {
        logout() {
            this.loadScreen = this.$loading.show(this.$spinner);
            setTimeout(() => {
                localStorage.clear('token');
                localStorage.clear('id');
                this.loadScreen.hide();
                this.$router.push({ name: 'LandingPage' });
            }, 1000);
        },
    },
};
</script>

<style scoped>
.nav-link:link {
    color: rgb(253, 253, 253);
    background-color: transparent;
    text-decoration: none;
}
.nav-link:visited {
    color: rgb(243, 243, 243);
    background-color: transparent;
    text-decoration: none;
}
.nav-link:hover {
    color: rgb(6, 181, 250);
    background: rgba(0, 128, 0, 0.555);
    text-decoration: none;
    font-weight: 600;
    border-radius: 5px;
    padding: 3px;
}
.nav-link:active {
    color: yellow;
    background-color: transparent;
    text-decoration: none;
    background: green;
}

#nav-link {
    color: rgb(53, 51, 51);
}
.nav-color {
    background: lightgray;
}
</style>