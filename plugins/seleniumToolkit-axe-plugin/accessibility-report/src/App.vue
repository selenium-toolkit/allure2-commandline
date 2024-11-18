// App.vue

<template>
  <v-app :class="{ dark: dark }">
    <v-main>
      <AccessibilityReport :file="file" />
    </v-main>
  </v-app>
</template>

<script>
import AccessibilityReport from './components/AccessibilityReport.vue';

export default {
  name: 'App',
  components: {
    AccessibilityReport,
  },
  data() {
    return {
      file: this.getQueryParam('file') || '', // Liest den Abfrageparameter "file" aus der URL
      dark: this.normalizeBoolean(this.getQueryParam('dark')) // Liest den Abfrageparameter "dark" aus der URL
    };
  },
  methods: {
    getQueryParam(param) {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get(param);
    },
    normalizeBoolean(value) {
      // Konvertiert die Zeichenkette "true" zu einem echten Boolean, Standard ist false
      return value === 'true' ? true : false;
    },
  },
};
</script>
<style>
.dark {
  background-color: #575757;
  color: #fff;
}
</style>