<script setup>
    import HumanButtom from "../components/Button.vue"
</script>

<template>
  <div class="company-show-container">
     <div class="show-background">
        <div class="show-caption f-col">
            <div class="f80 f-light-blue ftb">HUMAN Token</div>
            <div class="f80 f-dark-blue ftb">(HMT)</div>
            <div class="f18 mt40">Fuelling the HUMAN ecosystem</div>
            <HumanButtom class="leave-btn mt40 f16 f-dark-blue ftb" value="Leave more"/>
        </div>
        <div class="big-logo">
            <img alt="Vue logo" src="@/assets/HBigMark.png" />
        </div>
     </div>
  </div>
</template>

<style scoped>
    .company-show-container{
        padding: 0px 72px;
    }
    .show-background{
        position: relative;
        width:100%;
        height:680px;
        background: linear-gradient(167.14deg, #F0F2FC 9.58%, #FFFFFF 93.46%);
        background: #F2F2FA;
        border-radius: 40px;
    }
    @media only screen and (max-width: 1175px) 
    {
        .company-show-container{
            padding: 0px;
        }
        .show-background{
            border-radius: 0px;
        }
    }
    @media only screen and (max-width:704px)
    {
        .big-logo{
            width:100%!important;
            height:auto!important;
            left:0px!important;
            bottom: 0px!important;
        }
    }
    .show-caption{
        z-index: 5;
        position: relative;
        padding:167px 100px;
    }

    .big-logo{
        z-index: 0;
        position:absolute;
        width:704px;
        height:592px;
        right:95px;
        top:87px;
    }
    .big-logo>img{
        width:100%;
        height: 100%;
    }
    .leave-btn{
        width:127px;
        height:56px;
    }
</style>
