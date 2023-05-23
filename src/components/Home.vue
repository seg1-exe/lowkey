<template>
  <div class="homepage-presentation">
    <p>3 points comme nos plumes. Nous avons fait le choix de la discrétion afin de mieux vous mettre en lumière... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices neque ornare aenean euismod elementum. Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in.</p>
    <h2>Lowkey</h2>
  </div>

  <div class="homepage-articles">
    <h2 class="homepage-title">Derniers articles</h2>
    <div class="article-display" >
      <router-link v-for="article in lastThreeArticles" :key="article.id" :to="{ name: 'article', params: { id: article.id } }" class="oneArticle" :style="`background: linear-gradient(to top, var(--noir), #0000), url('/images/${article.image}')`">
          <div class="oneArticleText">
            <h1>{{ article.nom }}</h1>
            <h2>{{ store.getConceptByArticleId(article.id).nom }}</h2>
          </div>
        </router-link>
      </div>
    </div>

  <div class="green-line"></div>

  <div id="contact">
    <h2>Nous contacter</h2>
    <div class="reseaux">
      <a><i class="fa-solid fa-envelope"></i></a>
      <a href="https://twitter.com/lowkeypack?lang=fr"><i class="fa-brands fa-twitter"></i></a>
      <a href="https://www.instagram.com/lowkeypack.mp4/"><i class="fa-brands fa-instagram"></i></a>
    </div>
  </div>
</template>

<script setup>
import { useDefaultStore } from '../stores/index.js';
import { ref, watch, onMounted } from 'vue';
const store = useDefaultStore();
const lastThreeArticles = ref([]);

onMounted(() => {
    const updateLastThreeArticles = () => {
    const sortedArticles = [...store.lowkey.articles].sort((a, b) => b.id - a.id).slice(0, 3);
    lastThreeArticles.value = sortedArticles;
  };

  watch(() => store.lowkey.articles, updateLastThreeArticles, { immediate: true });
});

</script>

<style>
  html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    list-style: none;
}

body{
  font-family: 'Commissioner', sans-serif;
  --noir : #000000;
  --vert : #00FF00;
}

*{
  background-color: var(--noir);
  color: var(--vert);
}
router-link{
  color: var(--vert);
}

/* NAVBAR */

header{
  border-bottom: var(--vert) solid 3px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-left{
  font-size: 2rem;
  text-decoration: none;
}

.nav-left, .nav-right, .nav-mid{
  flex: 1;
  text-align: center;
}

.nav-mid img{
  width: 80px;
}

.nav-right a{
  position: relative;
  color: var(--vert);
  text-decoration: none;
  margin-left: 10px;
  font-size: 1.2rem;
}

.nav-right a::before{
  content:"";
  position: absolute;
  width: 0%;
  height: 2px;
  bottom: 0;
  background-color: var(--vert);
  transition: width 0.5s ease-out;
}

.nav-right a:hover::before{
  width: 100%;
}

/* BANNER */

.homepage-presentation{
  text-align: center;
  margin: 10%;
}

.homepage-presentation h2{
  margin-top: 30px;
  font-size: 1.2rem;
}

/* ARTICLES */

.homepage-title{
  text-align: center;
  margin-bottom: 30px;
  font-size: 1.5rem;
}

.article-display{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}

.oneArticle{
  width: 300px;
  height: 300px;
  margin: 10px 10px;
  border: var(--vert) solid 2px;
  background-position: center;
  background-size: 100%;
  position: relative;
}

.oneArticleText{
  position: absolute;
  bottom: 0;
  height: 50px;
  left: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: none;
}

.oneArticleText h1{
  font-size: 1.2rem;
  background: none;
  bottom: 0;
}

.oneArticleText h2{
  background: none;
  bottom: 0; 
  font-style : italic;
}

/* CONTACT */
.green-line{
  border: var(--vert) solid 1px;
  margin: 10%;
}

#contact{
  display: flex;
  flex-direction: column;
  align-items: center;
}

#contact h2{
  font-size: 1.5rem;
}

.reseaux{
  margin-top: 40px;
  font-size: 3rem;
}

.reseaux a{
  margin: 0 10px;
}

/* FOOTER */
footer{
  font-size: 1.2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 10%;
}



/*ARTICLE PAGE*/

.article-page{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5%;
}

.paragraph p{
  width: 40%;
}

.paragraph img{
  width: 400px;
}

.paragraph{
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0 10%;
  font-size: 1.2rem;
}


/* ARTICLES PAGE */
  .articles-category{
    display: flex;
    flex-direction: column;
    margin-top: 8%;
    align-items: center;
    padding: 0% 13%;
  }

  .articles-category-text{
    align-self: flex-start;
    margin-bottom: 10px;
  }

  .articles-category-text>h1{
    font-size: 1.5rem;
    margin-left: 10px;
  }

  .sub{
    display:flex;
    justify-content: space-between;
    margin: 0 10px;
  }

  .categories-title{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5% 0;
  }

  .categories-title h1{
    font-size: 1.5rem;
    margin-bottom: 20px;
  }



/** Animations */


</style>
