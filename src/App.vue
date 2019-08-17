<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>

      <v-btn
        text
        outlined
        onclick="window.print();"
      >
        <span class="mr-2">DOWNLOAD PDF</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <cv-builder/>
    </v-content>
  </v-app>
</template>

<script>
  import HelloWorld from './components/HelloWorld';
  import CvBuilder from './views/CvBuilder';

  export default {
    name: 'App',
    components: {
      CvBuilder,
      HelloWorld,
    },
    data: () => ({
      //
    }),
  };
</script>
