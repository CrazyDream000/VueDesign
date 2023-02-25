<script setup>
    import HumanButtom from "../components/Button.vue"
    
</script>
<script>
    export default {
        data() {
            return {
                mobileToggle:0
            }
        },
        methods: {
            greet(event) {
            // `this` inside methods points to the current active instance
                if(this.mobileToggle == 0)
                {
                    this.$refs['mobile-menu'].style.display = "flex"
                    this.mobileToggle = 1;
                }else{
                    this.mobileToggle = 0;
                    this.$refs['mobile-menu'].style.display = "none"
                }
            }
        }
    }
</script>

<template>
  <div class="navbar-container">
        <img class="logo" alt="Vue logo" src="@/assets/HMark.png" />
        
        <div class="navbar-menu-container">
            <div class="navbar-menu f-row f-center">
                <div class="navbar-menu-item f16 f-dark-blue ftb"> Products </div>
                <div class="navbar-menu-item f16 f-dark-blue ftb"> Code </div>
                <div class="navbar-menu-item f16 f-dark-blue ftb"> Ecosystem </div>
                <div class="navbar-menu-item f16 f-dark-blue ftb"> Team </div>
                <div class="navbar-menu-item f16 f-dark-blue ftb"> Resources </div>
                <HumanButtom class="join-btn f-dark-blue f16 ftb" value="Join"/>
            </div>
        </div>
        <div class="mobile-menu-btn d-in-r">
            <button  @click="greet"><img src="@/assets/MobileBtn.png"></button>
            <div class="mobile-menu-container f-col f-center" ref="mobile-menu">
                <div class="mobile-menu-item f-col f-center f16 f-dark-blue ftb"> Products </div>
                <div class="mobile-menu-item f-col f-center f16 f-dark-blue ftb"> Code </div>
                <div class="mobile-menu-item f-col f-center f16 f-dark-blue ftb"> Ecosystem </div>
                <div class="mobile-menu-item f-col f-center f16 f-dark-blue ftb"> Team </div>
                <div class="mobile-menu-item f-col f-center f16 f-dark-blue ftb"> Resources </div>
            </div>
         </div>
  </div>
</template>

<style scoped>
    .mobile-menu-container{
        padding:20px;
        width:200px;
        position:absolute;
        top:36px;
        right:0px;
        display: none;
        background-color: #fdfdfd;
        box-shadow: 4px 4px 10px #fdfdfd;
        z-index: 99;
    }
    .mobile-menu-item {
        width: 100%;
        cursor:pointer;
        background-color: none;
        transition: .5s;
    }

    .mobile-menu-item:hover {
        background-color:rgb(168, 168, 168)
    }
    .navbar-container{
        padding:62px 75px;
    }
    .logo{
        width:134.23px;
        height:32px;
        display: inline-block;
    }
    .mobile-menu-btn{
        cursor:pointer;
        position: relative;
        display: none!important;
        width:36px;
        height:36px;
    }
    @media only screen and (max-width: 1175px) 
    {
           .mobile-menu-btn{
            display: inline-block!important;
           }
           .navbar-menu-container{
                display: none!important;
           }
    }
    .navbar-menu-container{
        display: inline-block;
        float: right;
    }
    .navbar-menu-item {
        cursor:pointer;
        margin-left: 65px;
        
        background-color: none;
        transition: .2s;
    }
    .navbar-menu-item:hover{
        background-color: lightgray;
    }
    .join-btn{
        display: inline-block;
        float: right;
        width:144px;
        height:56px;
        margin-left: 68px;
    }
</style>
