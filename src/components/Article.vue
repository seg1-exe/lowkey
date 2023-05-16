<template>
    <div v-if="article">
        <h1>Article</h1>
        <p>ID de l'article : {{ article.nom }}</p>
  </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useDefaultStore } from '../stores/index.js';
  import { useRoute, useRouter } from 'vue-router';
  
  const store = useDefaultStore();
  const $route = useRoute();
  const router = useRouter();
  const articleId = Number($route.params.id);
  const article = ref(null);
  
  onMounted(() => {
    article.value = store.getArticleById(articleId);
  
    if (!article.value) {
      router.push({ name: 'articles' });
    }
  });
  </script>
  
  <style>
  </style>
  