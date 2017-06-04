<template>
    <div>
        <h4>Homepage</h4>
        <h5 v-if="nameNow">Hello {{ name}}</h5>
        <button @click="updateName">Change Name</button>
        <router-link to="/about">Go to About</router-link>
    </div>
</template>
<script>
    export default {
        name: 'Home',
        serverCacheKey: () => 'home',
        data(){
            return {
                nameList: ['Foo','Bar', 'John'],
                nameNow: false
            }
        },
        methods: {
            updateName(){
                let rand = parseInt(Math.random() * 3);
                this.nameNow = this.nameList[rand];
            }
        }
    }
</script>