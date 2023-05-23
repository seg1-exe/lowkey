<template>
    <div class="paragraph">
        <p>{{ paragraphe.texte1 }}</p>
        <img :src="'/images/'+paragraphe.image1" alt="image">
    </div>
    <div class="paragraph">
        <p>{{ paragraphe.texte2 }}</p>
        <img :src="'/images/'+paragraphe.image2" alt="image">
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useDefaultStore } from '../stores/index.js';

const store = useDefaultStore();
const paragraphe = ref(null);

const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
});

paragraphe.value = store.getParagrapheById(props.id);

</script>