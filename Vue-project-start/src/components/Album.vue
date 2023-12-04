<script setup>
const props = defineProps(['naka'])
console.log(123,'nata', props.naka);
</script>

<template>
 {{ props.naka.title }} {{ props.naka.id }} {{ props.naka.userId }}
</template>

<style>

</style>
