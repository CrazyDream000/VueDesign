<script setup>
defineProps({
  value: {
    type: String,
    required: true
  }
})
</script>

<template>
    <button>{{ value }}</button>
</template>

<style>
    button{
        cursor:pointer;
        background: linear-gradient(145.2deg, #F0F2FC -4.32%, #FFFFFF 61.97%);
        border: 4px solid #FFFFFF;
        border-radius: 10px;
        box-shadow: 4px 4px 10px #F0F2FC;
    }
</style>
