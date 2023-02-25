<script setup>
    import HumanButtom from "../components/Button.vue"
</script>

<template>
  <div class="layout10-container">
        <div class="l10-left d-in-l">
            <div class="f-col">
                <div class="f24 f-dark-blue">Get HUMAN news and updates</div>
                <div class="f-row mt30">
                    <div class="comment-container f-row f-ccenter">
                        <div class="f16 f-dark-blue">your@email.com</div>
                    </div>
                    <button class="submit-btn f-white f16">
                        Subscribe
                    </button>
                </div>
                <div class="f16 f-dark-blue mt10">By subscribing you agree to our<span class="ftb"> Privacy Policy</span></div>
            </div>
        </div>
        <div class="l10-right d-in-r">
            <div class="f-row f-center h100">
                <img src="@/assets/linker1.png"/>
                <img class="ml20" src="@/assets/linker2.png"/>
                <img  class="ml20" src="@/assets/linker3.png"/>
                <img  class="ml20" src="@/assets/linker4.png"/>
                <img  class="ml20" src="@/assets/linker.png"/>
            </div>
        </div>
  </div>
</template>

<style scoped>
    @media only screen and (max-width:1450px){
        .layout10-container{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding:100px 50px 0px 50px!important;
        }
        .l10-left{
            width:100%;
            justify-content: center;
            align-items: center;
            display: flex!important;
        }
        .l10-right{
            width:100%;
            justify-content: center;
            align-items: center;
            display: flex!important;
        }
        .comment-container{
            width:300px!important;
        }
    }
    .layout10-container{
        width:100%;
        padding:100px 229px 200px 229px;
        background: #FBFBFE;
    }
    .comment-container{
        width:456px;
        height: 56px;
        background: #FFFFFF;
        /* Blue/400 */
        padding-left: 50px;
        border: 2px solid #320A8D;
        border-radius: 10px;
    }
    .submit-btn{
        background: #320A8D;
        border-radius: 10px;
        width:152px;
        height:56px;
    }
</style>
