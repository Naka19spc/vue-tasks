<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';

const photosData =ref([])
 onMounted(async() => {
    const photosInfo = await axios.get('https://jsonplaceholder.typicode.com/photos')
    console.log(photosInfo.data);
    photosData.value=photosInfo.data
  })
</script>

<template>
    <div class="main-container">
        <li class="lists"  v-for="item in photosData.slice(0,15)">
            <Photo :kata = 'item'/>
        </li>

    </div>

</template>

<style>
.main-container{
   display: flex; 
   flex-wrap: wrap;
   gap: 5px;
   
}
.lists{
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border: solid 1px black;
  color: rgb(1, 106, 1);
}

</style>