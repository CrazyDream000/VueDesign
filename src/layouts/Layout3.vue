<script>
</script>

<template>
  <div class="layout3-container f-row f-center">
    <div class="layout3-content">
        <div class="f60 f-dark-blue w100 f-ac" style="padding:101px 143px">HUMAN in the media</div>
        <div class="company-link-lists f-center">
            <div class="company-list-item f-row f-center">
                <img src="@/assets/company1.png"/>
            </div>
            <div class="company-list-item f-row f-center">
                <img src="@/assets/company4.png"/>
            </div>
            <div class="company-list-item f-row f-center">
                <img src="@/assets/company3.png"/>
            </div>
            <div class="company-list-item f-row f-center">
                <img src="@/assets/company1.png"/>
            </div>
            <div class="company-list-item f-row f-center">
                <img src="@/assets/company2.png"/>
            </div>
            <div class="company-list-item f-row f-center">
                <img src="@/assets/company3.png"/>
            </div>
            <div class="company-list-item f-row f-center">
                <img src="@/assets/company1.png"/>
            </div>
            <div class="company-list-item f-row f-center">
                <img src="@/assets/company4.png"/>
            </div>
        </div>
    </div>
  </div>
</template>

<style scoped>
    .layout3-container{
        padding: 89px 0px 89px 0px;
        width: 100%;
    }
    .layout3-content{
        width:1472px;
        height:auto;
        background: #F2F2FA;
        border-radius: 40px;
    }
    
    @media only screen and (max-width:1175px)
    {
        .layout3-container{
            padding:0px;
        }
        .layout3-content{
            width:100%;
            border-radius: 0px;
        }
    }
    .company-link-lists{
        padding:0px 100px 100px 100px;
        display: flex;
        flex-wrap:wrap;
    }
    .company-list-item{
        margin:9px 8px;
        width:288px;
        height:134px;
        background: #FFFFFF;
        border-radius: 30px;
    }
    .company-list-item>img{
        width:50%;
        height:20%;
    }
</style>
