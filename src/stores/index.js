import { defineStore } from 'pinia';

export const useDefaultStore = defineStore({
  id: 'default',
  state: () => ({
    lowkey: {
      "articles": [
        {
          id: 1,
          nom: "abel31 - 200",
          image: "200.jpg",
          date: "2023-03-29T00:00:00+00:00"
        },
        { 
          id: 2,
          nom: "TestArticles",
          image: "von.jpg",
          date: "2023-04-11T00:00:00+00:00"
        },
        { 
          id: 3,
          nom: "Test11",
          image: "von.jpg",
          date: "2023-06-11T00:00:00+00:00"
        },
        { 
          id: 4,
          nom: "Test12",
          image: "von.jpg",
          date: "2023-02-11T00:00:00+00:00"
        }
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
          id: 1,
          nom: "Préface"
        }
      ]
    }
  }),
  getters: {
    getArticleById: (state) => (id) => {
      return state.lowkey.articles.find((article) => article.id === id);
    }
  },
  actions: {}
});