<template>
    <div id="root">
        <h4>Root Component</h4>
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                name: 'Test'
            }
        }
    }
</script>
<style lang="scss">
    .sub{
        color: blue;
    }
</style>