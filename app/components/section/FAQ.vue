<template>
  <section class="faq-section">
    <h3>{{ $t("sections.faq.title") }}</h3>

    <div class="wrapper">
      <BaseQuestion v-for="n in 10" :key="n">
        <template #question> What is swapx.gg? </template>
        <template #answer>
          swapx.gg is a platform where you can instantly sell your CS2, Dota2,
          and Rust skins for money or cryptocurrency. Our service makes skin
          trading fast and simple, allowing you to quickly sell the skins you no
          longer want.
        </template>
      </BaseQuestion>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import BaseQuestion from "../base/BaseQuestion.vue";

const { locale } = useI18n();
</script>

<style scoped>
h3 {
  color: var(--color-white);
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 30px;
}

.wrapper {
    display: flex;
    flex-direction: column;
}
</style>
