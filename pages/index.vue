<template>
  <div class="container">
    <PageTitle title="My Blog" />
    <PostCard v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>

<script lang="ts" setup>
const { data: posts }: { data: Post[] } = await useAsyncData(
  "posts",
  async () => [
    { id: "1", title: "Post 1", description: "Post with description" },
    { id: "2", title: "Post 2", content: "Post with content" },
    { id: "3", title: "Post 3" },
  ],
);

useHead({
  title: "My Blog",
  meta: [{ name: "description", content: "My Blog" }],
  htmlAttrs: {
    lang: "en",
  },
});
</script>
