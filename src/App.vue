<template>
  <main class="main">
    <section class="section">
      <h1>{{ startTitle }}</h1>
      <h2>{{ startSubtitles.join(' | ') }}</h2>
      <nav>
        <ul>
          <li v-for="link in startLinks" :key="link.name">
            <a :href="link.href">{{ link.name }}</a>
          </li>
        </ul>
      </nav>
    
    </section>
    <section class="section">
      <h2>{{ aboutMeTitle }}</h2>
      <p>{{ aboutMeDescription}}</p>
      <img :src="aboutMeImageSrc" alt="me">
    </section>

    <section class="section">
      <h2>{{ skillsTitle }}</h2>
      <ul>
        <li v-for="skill in skills" :key="skill.name">
          {{ skill.name }}
          <input
            v-for="(n, index) in skill.level"
            type="checkbox"
            checked
            tabindex="-1"
            v-bind="readonlyCheckbox"
          >
          <input
            v-for="(n, index) in (5 - skill.level)"
            type="checkbox"
            tabindex="-1"
            v-bind="readonlyCheckbox"
          >
        </li>
      </ul>
    </section>
  </main>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',
  computed: {
    readonlyCheckbox() {
      return {
        onclick: 'return false;',
        onkeydown: 'return false;',
        onkeyup: 'return false;',
      };
    },
  },
  data: () => ({
    startTitle: 'Anthon Kendel Holmqvist',
    startSubtitles: ['Software Developer', 'Traveler', 'Video Game enthusiast'],
    startLinks: [
      { name: 'Contact', href: 'mailto:anthon.kendel@gmail.com' },
      { name: 'GitLab', href: 'https://gitlab.com/anthonkendel' },
      {
        name: 'Resume',
        href: 'https://docs.google.com/document/d/1m8nfTFDbluF8VG5mvKUJTYu6yYE4OsElFEdRZfmrGIY/edit?usp=sharing',
      },
      { name: 'LinkedIn', href: 'https://www.linkedin.com/in/anthon-holmqvist' },
    ],

    aboutMeTitle: 'About me',
    aboutMeDescription: `
Lorem ipsum dolor sit amet consectetur, adipisicing elit.
Odit molestias excepturi ratione ullam quia asperiores deserunt iure
sed odio vitae itaque eveniet dolor magni, obcaecati rerum cum error, aperiam placeat?
Lorem ipsum dolor sit amet consectetur, adipisicing elit.
Odit molestias excepturi ratione ullam quia asperiores deserunt iure
sed odio vitae itaque eveniet dolor magni, obcaecati rerum cum error, aperiam placeat?
`,
    aboutMeImageSrc: 'https://via.placeholder.com/200x200',

    skillsTitle: 'Skills',
    skills: [
      { name: 'Cypress', level: 2 },
      { name: 'Jest.js', level: 4 },
      { name: 'TypeScript', level: 3 },
      { name: 'Vue.js', level: 4 },
      { name: 'Webpack', level: 3 },
    ],
  }),
});
</script>

<style lang="scss">
.main {
  max-width: 1300px;
  margin: 0 auto;
}

section {
  margin: 24px;
}
</style>
