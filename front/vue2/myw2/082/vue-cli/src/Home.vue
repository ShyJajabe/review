<template>
    <div>{{status}}<button @click="change">click</button></div>

</template>
<script>
    export default{
        data:function () {
            return {
                status:'ssss'
            }
        },
        methods:{
            change:function(){
                this.status='aaa'
            }
        }
    }
</script>
<style></style>
