<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';
const photosData =ref([])
 onMounted(async() => {
    const photosInfo = await axios.get('https://jsonplaceholder.typicode.com/posts')
    console.log(photosInfo.data);
    photosData.value=photosInfo.data
  })
</script>

<template>
    <li v-for="item in photosData.slice(0,20)"></li>

</template>

<style>

</style>