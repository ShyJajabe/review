/**
 * Created by admin on 2017/6/30.
 */
new Vue({
    el:'#app',
    data:{
        playerHealth:100,
        monsterHealth:100,
        showButton:true,
        turns:[]
    },
    methods:{
        attack:function(){
            var damage=this.calculateDamage(3,10);
            this.monsterHealth=this.monsterHealth-damage;
            this.turns.unshift({
                styleClass:'pAttack',
                text:'player hits monster for'+damage,
            });
            if(this.checkWin()){
                return false;
            }
            this.monsterAttack();
        },
        specialAttack:function(){
            var damage=this.calculateDamage(10,20);
            this.monsterHealth=this.monsterHealth-damage;
            this.turns.unshift({
                styleClass:'sAttack',
                text:'player hits monster specially for'+damage,
            });
            if(this.checkWin()){
                return false;
            }
            this.monsterAttack();
        },
        monsterAttack:function(){
            var damage=this.calculateDamage(5,12);
            this.playerHealth=this.playerHealth-damage;
            this.turns.unshift({
                styleClass:'mAttack',
                text:'monster hits player for'+damage,
            });
            this.checkWin();
        },
        playerHeal:function(){
            if(this.playerHealth<=90){
            this.playerHealth= this.playerHealth+10;}
            else{
                this.playerHealth=100;
            }
            this.turns.unshift({
                styleClass:'pHeal',
                text:'player heal for 10',
            });
            this.monsterAttack();
        },
        giveUp:function(){
            this.showButton=true;
        },
        newGame:function(){
            this.playerHealth=100;
            this.monsterHealth=100;
            this.showButton=false;
            this.turns = [];
        },
        calculateDamage:function(min,max){
            return Math.max(Math.floor(Math.random()*max)+1,min);
        },
        checkWin:function(){
            if(this.monsterHealth<=0){
                if(confirm('you won')){
                    this.newGame();
                }
                else{
                    this.showButton=true;
                }
                return true
            }
            else if(this.playerHealth<=0){
                if(confirm('you lose')){
                    this.newGame();
                }
                else{
                    this.showButton=true;
                }
                return true
            }
            return false;
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