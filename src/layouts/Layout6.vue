<script>
</script>

<template>
  <div class="layout6-container f-row f-center">
    <div class="layout6-content">
        <div class="layout6-caption f60 f-dark-blue w100 f-ac" style="padding:101px 143px 0px 143px">How do I get HMT?</div>
        <div class="lists-view ma">
            <div class="HMT-link-lists f-row f-center">
                <div class="HMT-list-item f-col f-center">
                    <img src="@/assets/Group1.png"/>
                    <div class="f14 f-dark-blue ftb mt40">Complete Jobs</div>
                </div>
                <div class="HMT-list-item f-col f-center">
                    <img src="@/assets/Group2.png"/>
                    <div class="f14 f-dark-blue ftb mt40">Grants Program</div>
                </div>
                <div class="HMT-list-item f-col f-center">
                    <img src="@/assets/Group3.png"/>
                    <div class="f14 f-dark-blue ftb mt40">Ambassador Program</div>
                </div>
                <div class="HMT-list-item f-col f-center">
                    <img src="@/assets/Group4.png"/>
                    <div class="f14 f-dark-blue ftb mt40">Refer Friends</div>
                </div>
                <div class="HMT-list-item f-col f-center">
                    <img src="@/assets/Group5.png"/>
                    <div class="f14 f-dark-blue ftb mt40">Validator Network</div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<style scoped>
    .layout6-container{
        padding: 200px 0px 100px 0px;
        width: 100%;
    }
    
    @media only screen and (max-width:1175px){
        .layout6-content{
            width: 100%!important;
            height:auto!important;
            border-radius:0px!important;
            overflow: hidden!important;
        }
        .lists-view{
            height:auto!important;
            width:100vw!important;
            overflow-x: scroll!important;
        }
        .layout6-caption {
            font-size:50px;
        }
    }

    .layout6-content{
        width:1472px;
        height:427px;
        background: linear-gradient(167.14deg, #F0F2FC 9.58%, #FFFFFF 93.46%);
        border-radius: 40px;
    }
    .lists-view{
        width:1272px;
        height:320px;
    }
    .HMT-link-lists{
        width:1272px;
        margin-top:80px;
        padding:0px 100px 100px 100px;
    }
    .HMT-list-item{
        margin:0px 15px;
        width:212px;
        height:229px;
        background: #FFFFFF;
        border-radius: 10px;
        box-shadow: 4px 4px 10px #F0F2FC;
    }
    .HMT-list-item>img{
        width:53px;
        height:74px;
    }
</style>
