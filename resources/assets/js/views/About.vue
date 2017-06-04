<template>
    <div class="about">
        <h4 class="title">Hi, i'm foo</h4>
        <router-link to="/">Go to Home</router-link>
    </div>
</template>
<script>
    export default {
        name: 'About',
        serverCacheKey: () => 'about',
    }
</script>
<style lang="scss">
    .about{
        .title{
            color: red;
        }
    }
</style>