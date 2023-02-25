<script setup>
</script>
<script>
</script>
<template>
  <div class="layout8-container f-col f-center">
    <div class="w100 layout8-header" style="padding:0px 225px">
        <div class="f60 f-dark-blue d-in-l ftb">Recent Entries</div>
        <button class="go-blog-btn f16 f-dark-blue d-in-r">Go Blog</button>
    </div>
    <div class="layout8-content mt40">
       <div class="layout8-view-content ">
            <div class="layout8-view f-row">
                <div class="card-list-item" style="margin-left: 225px;">
                    <img src="@/assets/Screen1.png" style="z-index: 5;position:relative"/>
                    <div class="selected-area"></div>
                    <div class="f-col card-list-detail" style="z-index: 5;">
                        <div class="f-row f-ccenter mt20">
                            <div class="f18 f-dark-blue">Mar 31  2022</div>
                            <button class="guest-post-btn ml40">Guest Post</button>
                        </div>
                        <div class="f34 f-dark-blue ftb mt20">
                            Interview with Andreas Schemm, Head of Ecosystem Development & Operations at HUMAN Protocol
                        </div> 
                        <button class="community-btn mt40 f16 f-dark-blue">Community</button>
                    </div>
                </div>
                <div class="card-list-item f-col ml40">
                    <img src="@/assets/Screen2.png"/>
                    <div class="f-col card-list-detail">
                        <div class="f-row f-ccenter mt20">
                            <div class="f18 f-dark-blue">Mar 31  2022</div>
                            <button class="guest-post-btn ml40">Guest Post</button>
                        </div>
                        <div class="f34 f-dark-blue ftb mt20">
                            Interview with Andreas Schemm, Head of Ecosystem Development & Operations at HUMAN Protocol
                        </div> 
                        <button class="community-btn mt40 f16 f-dark-blue">Community</button>
                    </div>
                </div>
                <div class="card-list-item f-col ml40">
                    <img src="@/assets/Screen3.png"/>
                    <div class="f-col card-list-detail">
                        <div class="f-row f-ccenter mt20">
                            <div class="f18 f-dark-blue">Mar 31  2022</div>
                            <button class="guest-post-btn ml40">Guest Post</button>
                        </div>
                        <div class="f34 f-dark-blue ftb mt20">
                            Interview with Andreas Schemm, Head of Ecosystem Development & Operations at HUMAN Protocol
                        </div> 
                        <button class="community-btn mt40 f16 f-dark-blue">Community</button>
                    </div>
                </div>
            </div>
       </div>
    </div>
    <div class="arrow-container">
        <button class="arrow-btn f18 f-ac d-in-r ml40 mr10 f-dark-blue">{{ ">" }}</button>
        <button class="arrow-btn f18 f-ac d-in-r ml40 f-dark-blue">{{ "<" }}<ArrowBackIcon/></button>
    </div>
  </div>
</template>

<style scoped>
    @media only screen and (max-width:1175px){

        .layout8-header{
            padding: 0px!important;
        }        
        .layout8-content{
            width: 100%!important;
            border-radius:0px!important;
            height: auto!important;
        }
        .layout8-view-content{
          height:auto!important;
        }
        .layout8-view{
            width:100%!important;
            flex-direction: column!important;
            justify-content: center;
            align-items: center;
        }
        .card-list-item{
            width:100%!important;
            margin:0px!important;
        }
        .arrow-container{
            display: none!important;
        }
        .selected-area{
            width:100%!important;
        }
    }
    .layout8-container{
        padding: 0px 0px 100px 0px;
    }
    .layout8-content{
        overflow:hidden;
        width:100vw;
        height:780px;
    }
    .arrow-container{
        width:100%;
        padding:40px 227px 0px 0px;
    }
    .arrow-btn{
        width:80px;
        height:80px;
        background: linear-gradient(145.2deg, #F0F2FC -4.32%, #FFFFFF 61.97%);
        box-shadow: 0px 12px 16px rgba(12, 32, 213, 0.07);
        backdrop-filter: blur(4.07742px);
        border:solid 5px white;
        border-radius: 50%;
    }
    .layout8-view-content{
        overflow-y: hidden;
        overflow-x: auto;
        height:820px;
    }
    .layout8-view{
        width:2500px;
    }
    .card-list-item
    {
        position:relative;
        width:712px;
        height:758px;
        z-index: 5;
    }
    .selected-area
    {
        z-index: 1;
        position:absolute;
        width:760px;
        height:615px;
        left:-24px;
        top:120px;
        background: #FFFFFF;
        border-radius: 40px;
        box-shadow: 4px 4px 10px #F2F2FA;
    }
    .card-list-item>img{
        z-index: 5;
        padding:50px;
        width:100%;
        height:50%;
    }
    .go-blog-btn{
        border: 2px solid #320A8D;
        border-radius: 10px;
        width:184px;
        height:56px;
    }
    .guest-post-btn{
        width:133px;
        height:32px;
        background: #FFFFFF;
        /* Blue/400 */

        border: 1px solid #320A8D;
        border-radius: 10px;
    }
    .community-btn{
        width:133px;
        height:40px;
        border: none;
        background: #F2F2FA;
        border-radius: 20px;
    }
    .card-list-detail{
        position: relative;
        width:100%;
        height:50%;
        padding:0px 76px 0px 76px;
    }
</style>
