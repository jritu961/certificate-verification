<template>
    <div class="container">
        <div class="d-flex justify-content-evenly">
            <button type="button" class="btn btn-danger m-3">
                <router-link to="/remove" class="nav-link mx-3 text-light"
                    ><span id="nav-link">Delete Certificate </span></router-link
                >
            </button>

            <button type="button" class="btn btn-info m-3">
                <router-link to="/update" class="nav-link mx-3 text-light"
                    ><span id="nav-link">Add Certificate</span></router-link
                >
            </button>

            <button type="button" class="btn btn-success m-3">
                <router-link to="/viewAll" class="nav-link mx-3 text-light">
                    <span id="nav-link">View All Certificate</span>
                </router-link>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NavFeatures',
    components: {},
};
</script>

<style scoped>
.option {
    width: 800px;
    margin: 0 auto;
}
</style>