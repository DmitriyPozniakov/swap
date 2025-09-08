<template>
  <footer>
    <div class="footer-top">
      <img src="/images/icons/logo-icon.svg" alt="" />
      <ul>
        <li>{{ $t("footer.link_1") }}</li>
        <li>{{ $t("footer.link_2") }}</li>
        <li>{{ $t("footer.link_3") }}</li>
        <li>{{ $t("footer.link_4") }}</li>
        <li>{{ $t("footer.link_5") }}</li>
      </ul>
      <div class="social">
        <img src="/images/icons/social/discord.svg" alt="" />
        <img src="/images/icons/social/steam.svg" alt="" />
        <img src="/images/icons/social/instagram.svg" alt="" />
        <img src="/images/icons/social/facebook.svg" alt="" />
        <img src="/images/icons/social/x.svg" alt="" />
      </div>
    </div>
    <div class="line"></div>
    <div class="footer-bottom">
      <div class="left">
        <span>{{ $t("footer.bottom.left.powered") }}</span>
        <span>{{ $t("footer.bottom.left.not") }}</span>
      </div>
      <div class="right">
        <span>{{ $t("footer.bottom.right.coopyright") }}</span>
        <span>{{ $t("footer.bottom.right.all") }}</span>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { locale } = useI18n();
</script>

<style scoped>
footer {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 30px;
}
.footer-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
.footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.left,
.right {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.right {
  align-items: flex-end;
}

.left span,
.right span {
  font-size: 1.4rem;
  color: #515164;
  font-weight: 400;
}

.line {
  width: 100%;
  height: 1px;
  background: #515164;
  margin: 40px 0 20px 0;
}
ul {
  display: flex;
  align-items: center;
  gap: 40px;
}
li {
  font-size: 1.4rem;
  color: var(--color-gray);
  font-weight: 500;
  transition: color 0.3s ease, transform 0.3s ease;
  cursor: pointer;
}
li:hover {
  color: #fff;
  transform: scale(1.05);
}
.social img {
  height: 25px;
  transition: transform 0.3s ease, filter 0.3s ease;
  cursor: pointer;
}

.social img:hover {
  transform: scale(1.1);
  filter: brightness(1.2); 
}
.social {
  display: flex;
  gap: 20px;
}
.social img {
  height: 25px;
}

@media (max-width: 1050px) {
  .footer-top {
    flex-direction: column;
    gap: 30px;
  }
  ul {
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .footer-bottom {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 25px;
  }
  .right,
  .left {
    align-items: center;
  }
}
</style>