<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>username {{name}}</p>
        <p>{{userAge}}</p>
        <p><button @click="resetName">reset name</button></p>
        <p><button @click="parentReset">reset name</button></p>
        <p>{{bus}}</p>
    </div>
</template>

<script>
    import {eventBus} from '../main'
    export default {
        props:{name,
                parentReset:Function,
            userAge:Number,
            bus:Number
        },

        methods:{
            resetName:function () {
                this.name='max';
                this.$emit('nameWasReset',this.name)
            }
        },
        created() {
            console.log('created',this);
            var vm=this;
            eventBus.$on('busEdited',function(data){
                console.log('created1',this)
               vm.bus=data;console.log('created2',data,this.bus)
            })
        }
    }

</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>

