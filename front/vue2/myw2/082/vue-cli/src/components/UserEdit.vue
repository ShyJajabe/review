<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <p>{{userAge}}</p>
        <p>{{bus}}<button @click="editBus">bus</button></p>
        <button @click="changeAge">edit</button>
    </div>
</template>

<script>
    import {eventBus} from '../main'
    export default{
        props:{
            changeAge:Function,
            userAge:Number,
            bus:Number

        },
        methods:{
            edit:function(){
                this.userAge='29';
                this.$emit('ageWasEdited',this.userAge);
            },
            editBus:function(){
                this.bus=2222;
                eventBus.$emit('busEdited',this.bus)
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
