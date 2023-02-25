<script>
    import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
    import { Doughnut } from 'vue-chartjs'
    import * as chartConfig from './chartConfig'

    ChartJS.register(ArcElement, Tooltip, Legend)

    export default {
    name: 'App',
    components: {
        Doughnut
    },
        data() {
            return chartConfig
        }
    }
</script>

<template>
  <div class="layout4-container f-row f-center ftb">
        <div class="layout4-content f-col">
            <div class="layout-caption f60 f-dark-blue">
                Token Allocation
            </div>
            <Doughnut class="dougnut mt40 f18" :data="data" :options="options"/>
        </div>
        
  </div>
</template>

<style scoped>
    .layout4-container{
        padding: 193px 0px;
        width: 100%;
    }
    .dougnut{
        height:700px!important;
        background-image:url("@/assets/HMark.png");
        background-repeat: no-repeat;
        background-position:center;
    }
    .layout4-image{
        width:608px;
        height:608px;
    }
    .layout4-content{
        width:1242px;
    }
    .layout4-caption{
        padding:81px 0px;
    }
</style>
