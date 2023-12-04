<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios'

const albumData=ref([])
 onMounted(async() => {
    const albumInfo = await axios.get('https://jsonplaceholder.typicode.com/albums')
    console.log(albumInfo.data);
    albumData.value=albumInfo.data
  })
</script>

<template>
<li v-for= "item in albumData.slice(0,15)">
    <Album :naka = 'item'/>

</li>
</template>

<style>

</style>
