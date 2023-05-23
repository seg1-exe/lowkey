import { defineStore } from 'pinia';

export const useDefaultStore = defineStore({
  id: 'default',
  state: () => ({
    lowkey: {
      "articles": [
        {
          "id":1,
          "nom":"abel31 - 200",
          "image":"200.jpg",
          "date":"2023-03-29T00:00:00+00:00",
          "paragraphes":[
            {"id":1,"nom":"TestParagraphe","texte1":"\u003Cdiv\u003ETesteTxt1\u003C\/div\u003E","texte2":"\u003Cdiv\u003ETesteTxt2\u003C\/div\u003E","image1":"image2.jpg","image2":"image1.jpg"},
            {"id":1,"nom":"TestParagraphe","texte1":"\u003Cdiv\u003ETesteTxt1\u003C\/div\u003E","texte2":"\u003Cdiv\u003ETesteTxt2\u003C\/div\u003E","image1":"image2.jpg","image2":"image1.jpg"}
          ]},
          {
          "id":2,
          "nom":"TestArticles",
          "image":"von.jpg",
          "date":"2023-04-11T00:00:00+00:00",
          "paragraphes":[
            {"id":2,"nom":"TestParagraphe","texte1":"\u003Cdiv\u003ETesteTxt1\u003C\/div\u003E","texte2":"\u003Cdiv\u003ETesteTxt2\u003C\/div\u003E","image1":"image2.jpg","image2":"image1.jpg"}
          ]},
        { 
          "id": 6,
          "nom": "Test11",
          "image": "von.jpg",
          "date": "2023-06-11T00:00:00+00:00"
        },
        { 
          "id": 4,
          "nom": "Nekfeu - Humano\u00efde",
          "image": "von.jpg",
          "date": "2023-02-11T00:00:00+00:00"
        },
      ],
      "paragraphes": [
        {
          id: 1,
          nom: "TestParagraphe",
          texte1: "<div>TesteTxt1</div>",
          texte2: "<div>TesteTxt2</div>",
          image1: "image2.jpg",
          image2: "image1.jpg"
        }
      ],
      "concepts": [
        {
          "id":1,
          "nom":"Pr\u00e9face",
          "articles":[
            {"id":1,"nom":"abel31 - 200"},
            {"id":2,"nom":"TestArticles"},
            {"id":6,"nom":"abel32 - 200"},
            {"id":4,"nom":"TestArticles1"},
          ]},
      ]
    }
  }),
  getters: {
    getArticleById: (state) => (id) => {
      return state.lowkey.articles.find((article) => article.id == id);
    },
    getParagrapheById: (state) => (id) => {
      return state.lowkey.paragraphes.find((paragraphe) => paragraphe.id == id);
    },
    getConceptById: (state) => (id) => {
      return state.lowkey.concepts.find((concept) => concept.id == id);
    },
    getConceptByArticleId: (state) => (id) => {
      return state.lowkey.concepts.find((concept) => concept.articles.find((article) => article.id == id));
    },
    getArticleImageByConceptId: (state) => (conceptId) => (articleId) => {
      const concept = state.lowkey.concepts.find((concept) => concept.id == conceptId);
      if (concept) {
        const article = concept.articles.find((article) => article.id == articleId);
        if (article) {
          return state.lowkey.articles.find((article) => article.id == articleId)
        } else {
          console.log("Article not found");
          return null;
        }
      } else {
        console.log("Concept not found");
        return null;
      }
    },
  },
});