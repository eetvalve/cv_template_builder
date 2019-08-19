<template>
  <v-layout
    class="pa-3"
    row>
      <v-card-title class="pt-2">
        {{ title }}
      </v-card-title>
  </v-layout>

</template>

<script>
  export default {
    name: 'CvInputTitle',
    props: {
      title: {
        type: String
      },
    },
  };
</script>

<style scoped>

</style>
