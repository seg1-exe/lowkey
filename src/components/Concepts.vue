<template>
    <div class="article-display">
        <router-link v-for="article in concept.articles" :key="article.id" :to="{ name: 'article', params: { id: article.id } }" class="oneArticle" :style="`background: linear-gradient(to top, var(--noir), #0000), url('/images/${store.getArticleImageByConceptId(concept.id)(article.id).image}')`">
          <div class="oneArticleText">
            <h1>{{ article.nom }}</h1>
            <h2>{{ concept.nom }}</h2>
          </div>
        </router-link>
      </div>
</template>

<script setup>
import { ref } from 'vue';
import { useDefaultStore } from '../stores/index.js';
import { useRoute } from 'vue-router';

const store = useDefaultStore();
const concept = ref(null);
const conceptId = useRoute().params.id;

concept.value = store.getConceptById(conceptId);
</script>