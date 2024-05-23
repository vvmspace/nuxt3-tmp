<template>
    <h1>{{ title }}</h1>
</template>

<script setup>
const { title } = defineProps({
    title: {
        type: String,
        required: true
    }
});
    
</script>

<style lang="scss" scoped>
    h1 {
        @apply text-2xl font-semibold text-gray-800 my-4 mx-5;
    }
</style>