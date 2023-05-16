<template>
  <ul>
    <li v-for="article in lastThreeArticles" :key="article.id" @click="gererRoute(article.id)">
      {{ article.nom }}
    </li>
  </ul>
  <div id="contact">
    <h2>Nous contacter</h2>
    <div class="reseaux">
      <a href="https://twitter.com/lowkeypack?lang=fr"></a>
    </div>
  </div>
</template>

<script setup>
import { useDefaultStore } from '../stores/index.js';
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const gererRoute = (id) => {
  router.push({ name: 'article', params: { id } });
};


const store = useDefaultStore();
const lastThreeArticles = ref([]);

const updateLastThreeArticles = () => {
  const sortedArticles = [...store.lowkey.articles].sort((a, b) => b.id - a.id).slice(0, 3);
  lastThreeArticles.value = sortedArticles;
};

watch(() => store.lowkey.articles, updateLastThreeArticles, { immediate: true });

</script>

<style>
</style>