<script>
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
                <button class="join-btn f-dark-blue f16 ftb">Join</button>
            </div>
        </div>
  </div>
</template>

<style scoped>
    .navbar-container{
        padding:62px 75px;
    }
    .logo{
        width:134.23px;
        height:32px;
        display: inline-block;
    }
    .navbar-menu-container{
        display: inline-block;
        float: right;
    }
    .navbar-menu-item {
        margin-left: 65px;
    }
    .join-btn{
        display: inline-block;
        float: right;
        width:144px;
        height:56px;
        margin-left: 68px;
        background: linear-gradient(145.2deg, #F0F2FC -4.32%, #FFFFFF 61.97%);
        border: 4px solid #FFFFFF;
        border-radius: 10px;
        box-shadow: 4px 4px 10px #F0F2FC;
    }
</style>
