<template>
  <div>
    <div class="header">
      <h1>Admin</h1>
    </div>
    <div class="posts">
      <h2>Posts</h2>
      <ul>
        <li v-for="post in posts" :key="post.id">
          <nuxt-link :to="`/admin/posts/${post.id}`">{{
            post.title
          }}</nuxt-link>
        </li>
      </ul>
      <div>{{ JSON.stringify(posts) }}</div>
    </div>
    <div class="footer">
      <p>Footer</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const posts = ref([
  { id: "1", title: "Post 1" },
  { id: "2", title: "Post 2" },
  { id: "3", title: "Post 3" },
]);
</script>
