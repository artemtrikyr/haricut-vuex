<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
/* Глобальні стилі */
body {
  background-color: #ffffff; 
  margin: 0;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

/* Навігація */
nav {
  padding: 10px 20px; /* Адаптивні відступи */
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

nav a {
  font-weight: bold;
  color: #000000;
  text-decoration: none;
  margin: 0 10px;
}

nav a.router-link-exact-active {
  color: #a08582;
}

/* Плавний скролінг */
html {
  scroll-behavior: smooth;
}
</style>
