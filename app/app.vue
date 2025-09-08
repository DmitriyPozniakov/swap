<template>
  <div class="container">
    <Navigation />
    <HeroSection />
    <ChooseUs />
    <SellSkins />
    <FAQ />
    <Footer />
  </div>
</template>

<script setup >
import Navigation from "./components/Navigation.vue";
import HeroSection from "./components/section/HeroSection.vue";
import ChooseUs from "./components/section/ChooseUs.vue";
import SellSkins from "./components/section/SellSkins.vue";
import FAQ from "./components/section/FAQ.vue";
import Footer from "./components/Footer.vue";
</script>

<style scoped>
.container {
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
}
</style>

