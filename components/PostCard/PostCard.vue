<template>
  <article class="invisible-link-wrapper">
    <h2>{{ post.title }}</h2>
    <p class="description">{{ description }}</p>
    <a :href="`/posts/${post.id}`" class="invisible-link">Read more</a>
  </article>
</template>

<script lang="ts" setup>
const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
});

const description = props.post.description
  ? props.post.description
  : props.post.content
    ? props.post.content?.slice(0, 100) + "..."
    : "";
</script>

<style lang="scss" scoped>
article {
  // rounder corners
  @apply bg-gray-100 p-4 my-4;
  @apply p-4 m-1;
  @apply rounded-lg;

  h2 {
    @apply text-xl font-semibold text-gray-800;
  }

  &.invisible-link-wrapper {
    position: relative;

    .invisible-link {
      position: absolute;
      bottom: 0;
      right: 0;
      padding: 0;
      margin: 0;
      color: transparent;
      text-decoration: none;
      display: block;
      width: 100%;
      height: 100%;
    }

    &:hover,
    &:focus,
    &:active {
      @apply bg-gray-800;

      h2,
      .description {
        @apply text-white;
      }
    }
  }
}
</style>
