<script setup>
</script>

<template>
  <div class="layout1-container f-row f-center">
    <img class="layout1-image" src="@/assets/Image1.png" />
    <div class="layout1-content f48 f-dark-blue">HMT funds the processing of digitized work, and rewards workers for their contributions.</div>
  </div>
</template>

<style scoped>
    .layout1-container{
        padding: 193px 0px;
        width: 100%;
    }
    .layout1-image{
        width:608px;
        height:608px;
    }
    .layout1-content{
        width:608px;
    }
    @media only screen and (max-width: 925px){
      .layout1-container{
        flex-direction: column!important;
        flex-flow:column-reverse;
      }      
    }
    @media only screen and (max-width:608px){
      .layout1-image{
        width:100%;
        height:auto;
      }
      .layout1-content{
        width:100%;
      }
    }
</style>
