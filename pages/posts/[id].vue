<template>
    <PageTitle :title="title" />
    <article>{{ content }}</article>
</template>

<script setup>
    const { params : { id } } = useRoute();
    const title = `Post ${id}`;
    const contents = [
        'This is the first post',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.',
    ]

    const content = contents[(id - 1) % contents.length];

    useHead({
        title,
        meta: [
            { name: 'description', content: title }
        ],
        htmlAttrs: {
            lang: 'en'
        }
    });
</script>

<style lang="scss" scoped>
    article {
        @apply p-3 m-2 bg-gray-100 rounded-lg;
    }
</style>