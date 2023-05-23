<template>
  <div class="articles-category" v-for="concept in store.lowkey.concepts" :key="concept.id">
    <div class="articles-category-text">
      <h1>{{ concept.nom }}</h1>
      <div class="sub">
        <h2><!--{{ concept.description }}--></h2>
        <router-link :to="{ name: 'concepts', params: {id: concept.id} }">Voir plus <i class="fa-solid fa-arrow-right"></i></router-link>
      </div>
      <div class="article-display">
        <router-link v-for="article in getLastFourArticles(concept)" :key="article.id" :to="{ name: 'article', params: { id: article.id } }" class="oneArticle" :style="`background: linear-gradient(to top, var(--noir), #0000), url('/images/${store.getArticleImageByConceptId(concept.id)(article.id).image}')`">
          <div class="oneArticleText">
            <h1>{{ article.nom }}</h1>
            <h2>{{ concept.nom }}</h2>
          </div>
        </router-link>
      </div>
    </div> 
  </div>
</template>

<script setup>
import { useDefaultStore } from '../stores/index.js';

const store = useDefaultStore();

const getLastFourArticles = (concept) => {
    return concept.articles.slice(-4);
};

    
</script>