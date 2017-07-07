<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <p>{{name}}</p>
        <p><button @click="changeName">changeName</button></p>
        <p>bus {{bus}}</p>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail :name="name" v-on:nameWasReset="name=$event"
                                 :parentReset="resetName" :userAge="age" :bus="bus"></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit :userAge="age" :changeAge="changeAge" :bus="bus" ></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        data:function(){
            return {
            name:'max',
                age:27,
                bus:1111,
            }
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        },
        methods:{
            changeName:function(){
                this.name='aaa'
            },
            resetName:function(){
                this.name='max'
            },
            changeAge:function(){
                this.age=29
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
