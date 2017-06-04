<template>
        <div id="root">
            <h1>Titolo</h1>
            <h4 class="sub">Nome utente {{ name }}</h4>
            <input v-model="name">
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