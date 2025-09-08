<template>
  <section class="sell-skins">
    <div class="heading-wrapper">
      <h2>SELL YOUR SKINS IN <span>THREE EASY STEPS</span></h2>
      <button class="base-button">SELL SKINS NOW</button>
    </div>
  </section>
</template>

<style scoped>
.heading-wrapper {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
}

h2 {
  color: var(--color-white);
  font-size: clamp(3rem, 5vw, 5.2rem);
  font-weight: 700;
  max-width: 59rem;
}

span {
  color: var(--color-green);
}
</style>