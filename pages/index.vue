<template>
  <div class="container">
    <Head>
      <Title>My Blog</Title>
      <Meta name="description" content="My Blog" />
      <Html lang="en" />
    </Head>
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
</script>
