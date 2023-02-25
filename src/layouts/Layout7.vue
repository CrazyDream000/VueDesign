<script>
</script>

<template>
  <div class="layout7-container f-row f-center">
    <div class="layout7-content ma">
        <div class="layout7-caption f60 f-dark-blue w100 f-ac ftb" style="padding:101px 143px 0px 143px">Utility of the HUMAN Token</div>
        <div class="lists-view ma">
            <div class="HMT-link-lists f-center">
                <div class="HMT-list-item f-col f-center">
                    <img src="@/assets/Group1.png"/>
                    <div class="f18 f-dark-blue ftb mt40">Complete Jobs</div>
                </div>
                <div class="HMT-list-item f-col f-center">
                    <img src="@/assets/Group2.png"/>
                    <div class="f18 f-dark-blue ftb mt40">Grants Program</div>
                </div>
                <div class="HMT-list-item f-col f-center">
                    <img src="@/assets/Group3.png"/>
                    <div class="f18 f-dark-blue ftb mt40">Ambassador Program</div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<style scoped>
    .layout7-container{
        padding: 200px 0px 200px 0px;
        width: 100%;
    }
    .layout7-content{
        width:1472px;
        height:auto;
        background: #F2F2FA;
        border-radius: 40px;
    }
    @media only screen and (max-width:1175px){
        .layout7-content{
            width: 100%!important;
            border-radius:0px;
            height:auto!important;
            overflow: hidden;
        }
        .lists-view{
            width:100vw!important;
            height:auto!important;
            overflow-x: scroll;
        }
        .layout7-caption {
            font-size:50px;
        }
    }
    .lists-view{
        width:1272px;
        height:280px;
    }
    .HMT-link-lists{
        width:1272px;
        margin-top:80px;
        padding:0px 100px 100px 100px;
        display: flex;
    }
    .HMT-list-item{
        margin:0px 15px;
        width:367px;
        height:368px;
        background: #FFFFFF;
        border-radius: 10px;
        box-shadow: 4px 4px 10px #F0F2FC;
    }
    .HMT-list-item>img{
        width:62px;
        height:82px;
    }
</style>
