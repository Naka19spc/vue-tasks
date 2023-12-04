
<script setup>
const props = defineProps(['kata'])
console.log(123,'kata', props.kata);
</script>

<template>
{{props.kata.albumId }} {{ props.kata.title }} {{ props.kata.id }}
</template>

<style>

</style>
