<template>
    <div>
        <h4>Homepage</h4>
        <h5 v-if="nameNow">Hello {{ nameNow }}</h5>
        <button @click="updateName">Change Name</button>
        <br>
        <br>
        <input v-model="newItem" placeholder="New Item (enter to add)" @keyup.13="newItemAdd">
        <br>
        <br>
        <router-link to="/about">Go to About</router-link>
    </div>
</template>
<script>
    import { mapActions } from 'vuex';

    export default {
        name: 'Home',
        serverCacheKey: () => 'home',
        data(){
            return {
                nameList: ['Foo','Bar', 'John'],
                nameNow: false,
                newItem: ''
            }
        },
        methods: {
            ...mapActions({
                addToList: 'addToList'
            }),
            updateName(){
                let rand = parseInt(Math.random() * 3);
                this.nameNow = this.nameList[rand];
            },
            newItemAdd(){
                if(this.newItem === '') return;
                this.addToList(this.newItem);
                this.newItem = '';
            }
        }
    }
</script>