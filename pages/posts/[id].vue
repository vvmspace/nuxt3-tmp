<template>
  <Head>
    <Title>{{ post.title }}</Title>
    <Meta name="description" :content="post.description" />
    <Html lang="en" />
  </Head>
  <div class="container mx-auto">
    <PageTitle :title="title" />
    <article>{{ content }}</article>
  </div>
</template>

<script lang="ts" setup>
// mock post data
const {
  params: { id },
} = useRoute();

const title = `Post ${id}`;
const contents = [
  "This is the first post",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.",
];

const content = contents[(id - 1) % contents.length];

const post: Post = {
  id,
  title,
  content,
  description: content.slice(0, 100) + "...",
};
</script>

<style lang="scss" scoped>
article {
  @apply p-3 m-2 bg-gray-100 rounded-lg;
}
</style>
