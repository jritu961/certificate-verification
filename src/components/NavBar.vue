<template>
    <div id="navbar">
        <nav class="navbar navbar-expand-lg nav-color">
            <div class="container">
                <router-link class="navbar-brand" to="/">
                    <img src="@/assets/Fynd.png" alt="" width="25" height="30" class="d-inline-block align-text-top" />
                    <span class="p-2 fw-bold " id="nav-link">Fynd Academy</span>
                </router-link>

                <button
                    class="navbar-toggler bg-light"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <router-link to="/public" class="nav-link mx-3"><span id="nav-link">Verify </span></router-link>
                        <router-link to="/admin" class="nav-link mx-3">
                            <span :class="{ 'active-page': tab === 'tutor' }" id="nav-link">Tutor</span></router-link
                        >
                        <router-link to="/userLogin" class="nav-link mx-3"
                            ><span :class="{ 'active-page': tab === 'userlogin' }" id="nav-link">Login </span></router-link
                        >
                        <router-link to="/contact" class="nav-link mx-3"
                            ><span :class="{ 'active-page': tab === 'contact' }" id="nav-link">Contact Us</span></router-link
                        >
                        <router-link to="/register" class="nav-link mx-3">
                            <span :class="{ 'active-page': tab === 'signup' }" id="nav-link">Sign Up </span>
                        </router-link>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'NavBar',
    props: ['tab'],
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
    background-color: transparent;
    text-decoration: none;
    font-weight: 700;
}
.nav-link:active {
    color: yellow;
    background-color: transparent;
    text-decoration: none;
    background: green;
}
.active-page {
    background: rgba(0, 128, 0, 0.555);
    border-radius: 5px;
    font-weight: 600;
    padding: 6px 12px;
}
#nav-link{
    color: rgb(53, 51, 51);
}
.nav-color{
    background: lightgray;
}
</style>