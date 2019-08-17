<template>
  <v-card class="mb-4">
    <cv-input-title
      title="Work experience"
      :index="index"
    />

    <v-card-text>
      dsfd
    </v-card-text>

  </v-card>
</template>

<script>
  import CvInputTitle from './CvInputTitle';
  export default {
    name: 'CvInputWorkExperience',
    components: { CvInputTitle },
    props: {
      index: {
        type: Number
      }
    }
  };
</script>

<style scoped>

</style>
