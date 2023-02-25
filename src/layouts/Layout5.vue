<script setup>
import AreaChart from "../components/AreaChart.vue"
</script>

<template>
  <div class="layout5-container f-row f-center ftb">
        <div class="layout5-content f-col">
            <div class="layout5-caption f60 f-dark-blue">
                Supply Over Time
            </div>
            <div class="f-row w100">
                <div class="w50" style="flex-grow=4">
                    <AreaChart class="chart"/>
                </div>
                <div class="f-col ml40 w100 w50">
                    <div class="f-row">
                        <div class="" style="flex-grow:1"><div class="graph-color" style="background-color:#f8797964"></div></div>
                        <div class="" style="flex-grow:2"><div class="f14 f-light-blue f-ac">25%</div></div>
                        <div class="" style="flex-grow:5"><div class="f14 f-light-blue f-ac">Operating Trust Unlocked Tokens</div></div>
                    </div>
                    <div class="f-row mt20">
                        <div class="" style="flex-grow:1"><div class="graph-color" style="background-color:#3d793f64"></div></div>
                        <div class="" style="flex-grow:2"><div class="f14 f-light-blue f-ac">34%</div></div>
                        <div class="" style="flex-grow:5"><div class="f14 f-light-blue f-ac">Operating Trust Unlocked Tokens</div></div>
                    </div>
                    <div class="f-row mt20">
                        <div class="" style="flex-grow:1"><div class="graph-color" style="background-color:#2679f264"></div></div>
                        <div class="" style="flex-grow:2"><div class="f14 f-light-blue f-ac">67%</div></div>
                        <div class="" style="flex-grow:5"><div class="f14 f-light-blue f-ac">Operating Trust Unlocked Tokens</div></div>
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>

<style scoped>
    .layout5-container{
        padding: 50px 0px;
        width: 100%;
    }
    .layout5-image{
        width:796px;
        height:438px;
    }
    .chart{
        height: 400px!important;
    }
    .layout5-content{
        width:1242px;
    }
    .layout5-caption{
        padding:81px 0px;
    }
    .graph-color{
        background-color: brown;
        width:20px;
        height:20px;
        border-radius: 50%;
    }
</style>
