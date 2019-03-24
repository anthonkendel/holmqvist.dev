<template>
  <div>
    <nav id="top-bar">
      <div class="container">
        <div class="row">
          <div class="navigation-bar">
            <a href="#">
              <h1>Holmqvist</h1>
            </a>
          </div>
        </div>
      </div>
    </nav>
    <main>
      <div class="container">
        <div class="row">
          <div class="column" id="contact" @click="onShowEmail">
            <a v-if="showEmail">{{ email }}</a>
            <a v-else>Contact</a>
          </div>
          <div class="column" id="resume">
            <a
              href="https://docs.google.com/document/d/1m8nfTFDbluF8VG5mvKUJTYu6yYE4OsElFEdRZfmrGIY/edit?usp=sharing"
              target="_blank"
            >Resume</a>
          </div>
        </div>
        <div class="row">
          <div class="column" id="github">
            <a href="https://github.com/anthonkendel" target="_blank">GitHub</a>
          </div>
          <div class="column" id="linkedin">
            <a href="https://www.linkedin.com/in/anthon-holmqvist" target="_blank">LinkedIn</a>
          </div>
        </div>
      </div>
    </main>
    <footer id="bottom-bar"></footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',
  data: () => ({
    showEmail: false,
    email: 'anthon.kendel@gmail.com',
  }),
  methods: {
    onShowEmail(): void {
      this.showEmail = true;
      setTimeout(() => (this.showEmail = false), 10000);
    },
  },
});
</script>

<style lang="scss">
@font-face {
  font-family: Moon;
  src: url("./assets/fonts/moon/MoonLight.otf") format("opentype");
}

@font-face {
  font-family: Moon;
  src: url("./assets/fonts/moon/MoonBold.otf") format("opentype");
  font-weight: bold;
}

body {
  margin: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: Moon, Roboto, sans-serif;
  color: #a1a1a1;
}

p {
  color: #a1a1a1;
  font-weight: 100;
  font-family: Moon, Roboto, sans-serif;
}

a {
  color: #a1a1a1 !important;
  font-weight: 100;
  font-family: Moon, Roboto, sans-serif;
  -webkit-transition: color 1s;
  transition: color 1s;
  cursor: pointer;
}

a:visited,
#contact:visited {
  color: #a1a1a1;
}

a:focus,
a:hover {
  color: #d7d7d7 !important;
}

#app {
  height: 100vh;
}

#top-bar {
  top: 0;
  height: 3em;
  background-color: transparent;
  border-bottom: 1px solid #ececec;
}

#top-bar .container {
  top: 0;
}

#top-bar .navigation-bar {
  top: 0;
  margin: 0.8em auto 0;
}

#top-bar .navigation-bar h1 {
  font-size: 1.2em;
  color: #a1a1a1;
  -webkit-transition: color 1s;
  transition: color 1s;
}

#top-bar .navigation-bar h1:hover {
  color: #d7d7d7;
}

.container {
  top: 20vh;
  text-align: center;
}

.container .column {
  padding: 0.5em 1em !important;
}

#bottom-bar {
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
  height: 3em;
  background-color: transparent;
  border-top: 1px solid #ececec;
}
</style>
