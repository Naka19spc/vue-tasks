<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';
 const usersData = ref([])

onMounted(async() => {
    const usersInfo = await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log(123 ,usersInfo.data);
    usersData.value =usersInfo.data
    
  })

</script>
<template>
    <li v-for="item in usersData"> 
       {{ item.id }} {{ item.name }}
    </li>

 </template>
 <style>
</style>