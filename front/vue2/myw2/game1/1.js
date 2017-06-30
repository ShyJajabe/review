/**
 * Created by admin on 2017/6/30.
 */
new Vue({
    el:'#app',
    data:{
        playerHealth:100,
        monsterHealth:100,
        showButton:true,

    },
    methods:{
        playerAttack:function(){
            this.monsterHealth=this.monsterHealth-10;
            this.monsterAttack();
        },
        monsterAttack:function(){
            this.playerHealth=this.playerHealth-5;
        },
        playerHeal:function(){
            this.playerHealth= this.playerHealth+3;
            this.monsterAttack();
        },
        giveUp:function(){
            this.showButton=true;
        },
        newGame:function(){
            this.playerHealth=100;
            this.monsterHealth=100;
            this.showButton=false;
        }

    },
    computed:{
        playerWidth:function(){
            return {
                width:this.playerHealth+'%'
            }
        },
        monsterWidth:function(){
            return {
                width:this.monsterHealth+'%'
            }
        }
    },
    watch:{

    }
})