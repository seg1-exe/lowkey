<template>
    <h2>{{ article.nom }}</h2>
    <div class="article-page">
      <div class="paragraph" v-for="paragraph in article.paragraphes">
        <Paragraphe :id="paragraph.id" />
      </div>
    </div>
</template>
  
<script setup>
import { ref } from 'vue';
import { useDefaultStore } from '../stores/index.js';
import { useRoute } from 'vue-router';
import Paragraphe from './Paragraphe.vue';

const store = useDefaultStore();
const article = ref(null);
const articleId = useRoute().params.id;

article.value = store.getArticleById(articleId);
</script>

<style>
</style>
  