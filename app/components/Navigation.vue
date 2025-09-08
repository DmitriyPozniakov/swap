<template>
  <nav class="navbar">
    <img src="/images/icons/logo-icon.svg" class="logo" alt="" />
    <div class="mobile-wrap">
      <img src="/images/icons/hamburger-icon.svg" class="burger" alt="" @click="toggleMobileMenu" />
      <img
        src="/images/icons/mobile-logo-icon.svg"
        class="mobile-logo"
        alt=""
      />
    </div>
    <ul class="nav-links">
      <li>{{ $t("nav.link_1") }}</li>
      <li>{{ $t("nav.link_2") }}</li>
      <li>{{ $t("nav.link_3") }}</li>
    </ul>

    <div class="wrapper">
      <div class="currency-change" @click="toggleCurrencyMenu">
        <div class="selected">
          <img
            src="/images/icons/mobile-currency.svg"
            alt="currency"
            class="currency-icon"
          />
          <span>{{ currentCurrency }}</span>
          <img
            src="/images/icons/arrow-icon.svg"
            alt="arrow"
            class="arrow"
            :class="{ open: currencyMenuOpen }"
          />
        </div>

        <ul v-if="currencyMenuOpen" class="dropdown">
          <li @click.stop="changeCurrency('PLN')">PLN</li>
          <li @click.stop="changeCurrency('USD')">USD</li>
        </ul>
      </div>

      <div class="language-change" @click="toggleLangMenu">
        <div class="selected">
          <img :src="currentFlag" alt="flag" class="flag" />
          <img
            src="/images/icons/arrow-icon.svg"
            alt="arrow"
            class="arrow"
            :class="{ open: langMenuOpen }"
          />
        </div>

        <ul v-if="langMenuOpen" class="dropdown">
          <li @click.stop="changeLanguage('en')">
            <img src="/images/flags/en.svg" alt="EN" class="flag" />
            English
          </li>
          <li @click.stop="changeLanguage('pl')">
            <img src="/images/flags/pl.svg" alt="PL" class="flag" />
            Polski
          </li>
        </ul>
      </div>

      <button class="steam-login hover">
        <img src="/images/icons/steam-icon.svg" alt="" />
        Login via Steam
      </button>
      <button class="steam-login-mobile hover">
        <img src="/images/icons/mobile-steam-icon.svg" alt="" />
        Login
      </button>
    </div>
  </nav>

  <!-- Mobile Menu -->
  <div v-if="mobileMenuOpen" class="mobile-menu-overlay" @click="closeMobileMenu">
    <div class="mobile-menu" @click.stop>
      <div class="mobile-menu-header">
        <img src="/images/icons/mobile-logo-icon.svg" class="mobile-menu-logo" alt="" />
        <button class="close-menu" @click="closeMobileMenu">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
      
      <ul class="mobile-nav-links">
        <li @click="closeMobileMenu">{{ $t("nav.link_1") }}</li>
        <li @click="closeMobileMenu">{{ $t("nav.link_2") }}</li>
        <li @click="closeMobileMenu">{{ $t("nav.link_3") }}</li>
      </ul>
      
      <div class="mobile-menu-footer">
        <button class="mobile-steam-login" @click="closeMobileMenu">
          <img src="/images/icons/steam-icon.svg" alt="" />
          Login via Steam
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";

const langMenuOpen = ref(false);
const currencyMenuOpen = ref(false);
const currentCurrency = ref("PLN");
const mobileMenuOpen = ref(false);

const { locale, setLocale, locales } = useI18n();

function toggleLangMenu() {
  langMenuOpen.value = !langMenuOpen.value;
}

function toggleCurrencyMenu() {
  currencyMenuOpen.value = !currencyMenuOpen.value;
}

function toggleMobileMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value;
}

function closeMobileMenu() {
  mobileMenuOpen.value = false;
}

async function changeLanguage(lang: string) {
  console.log(`Изменяем язык с ${locale.value} на ${lang}`); // Отладка
  try {
    await setLocale(lang);
    console.log(`Язык успешно изменен на ${locale.value}`); // Отладка
  } catch (error) {
    console.error("Ошибка при изменении языка:", error);
  }
  langMenuOpen.value = false;
}

function changeCurrency(curr: string) {
  currentCurrency.value = curr;
  currencyMenuOpen.value = false;
}

const currentFlag = computed(() => {
  console.log("Текущий язык:", locale.value); // Отладка
  return locale.value === "en"
    ? "/images/flags/en.svg"
    : "/images/flags/pl.svg";
});

// Отладочная информация
onMounted(() => {
  console.log("Доступные языки:", locales.value);
  console.log("Текущий язык при монтировании:", locale.value);
});
</script>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  border-bottom: 1px solid #1a1a20;
  position: relative;
}

.burger {
  display: none;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.burger:hover {
  transform: scale(1.1);
}

.logo {
  height: 40px;
  flex: 0 0 auto;
}

.mobile-logo {
  display: none;
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
  flex: 0 0 auto;
}

.nav-links {
  display: flex;
  justify-content: center;
  gap: 40px;
  flex: 1;
}

.nav-links li {
  color: var(--color-white);
  font-size: 1.4rem;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.3s ease;
}

.nav-links li:hover {
  color: #fff;
}

.language-change {
  position: relative;
  display: inline-block;
  cursor: pointer;
  user-select: none;
  padding: 8px 16px;
}

.selected {
  display: flex;
  align-items: center;
  gap: 8px;
}

.flag {
  width: 24px;
  height: 24px;
}

.arrow {
  width: 12px;
  height: 12px;
  transition: transform 0.3s ease;
}

.arrow.open {
  transform: rotate(180deg);
}

.hover:hover {
  background: #3ed34f;
  transform: translateY(-5px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 6px;
  background-color: #121219;
  color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
  z-index: 10;
  min-width: 120px;
}

.dropdown li {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  cursor: pointer;
  transition: background 0.2s;
}

.dropdown li:hover {
  background-color: #1a1a20;
}

.currency-change {
  display: none;
  position: relative;
  cursor: pointer;
  user-select: none;
}

.currency-change span {
  color: var(--color-white);
  font-size: 1.2rem;
}

.steam-login {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 8px 16px;
  background: var(--color-green);
  border-radius: 8px;
  font-size: 1.4rem;
  font-weight: 500;
  border: none;
  cursor: pointer;
  color: #090910;
  height: 40px;
  transition: all 0.3s ease;
}

.steam-login-mobile {
  display: none;
  background: var(--color-green);
  border-radius: 8px;
  font-size: 1.4rem;
  font-weight: 500;
  border: none;
  cursor: pointer;
  color: #090910;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 8px 16px;
  height: 36px;
  transition: all 0.3s ease;
}

/* Mobile Menu Styles */
.mobile-menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1000;
  display: flex;
  justify-content: flex-end;
}

.mobile-menu {
  width: 280px;
  height: 100vh;
  background: #121219;
  padding: 20px;
  display: flex;
  flex-direction: column;
  animation: slideIn 0.3s ease;
}

@keyframes slideIn {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}

.mobile-menu-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  padding-bottom: 20px;
  border-bottom: 1px solid #1a1a20;
}

.mobile-menu-logo {
  height: 32px;
}

.close-menu {
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-white);
  transition: color 0.3s ease;
}

.close-menu:hover {
  color: var(--color-green);
}

.mobile-nav-links {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: auto;
}

.mobile-nav-links li {
  color: var(--color-white);
  font-size: 1.6rem;
  font-weight: 500;
  cursor: pointer;
  padding: 12px 0;
  border-bottom: 1px solid transparent;
  transition: all 0.3s ease;
}

.mobile-nav-links li:hover {
  color: var(--color-green);
  border-bottom-color: var(--color-green);
}

.mobile-menu-footer {
  padding-top: 20px;
  border-top: 1px solid #1a1a20;
}

.mobile-steam-login {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  background: var(--color-green);
  border-radius: 8px;
  font-size: 1.4rem;
  font-weight: 500;
  border: none;
  cursor: pointer;
  color: #090910;
  transition: all 0.3s ease;
}

.mobile-steam-login:hover {
  background: #3ed34f;
  transform: translateY(-2px);
}

@media (max-width: 850px) {
  nav {
    padding: 16px 8px !important;
  }
  .language-change {
    padding: 8px !important;
  }
  .logo,
  .nav-links,
  .steam-login {
    display: none;
  }

  .mobile-logo {
    display: block;
  }

  .steam-login-mobile {
    display: flex;
  }
  .burger {
    display: block;
  }
  .mobile-wrap {
    display: flex;
    gap: 12px;
  }

  .currency-change {
    display: block;
  }
}

@media (min-width: 851px) {
  .mobile-menu-overlay {
    display: none !important;
  }
}
</style>