<template>
  <v-container class="cv-builder-view-container">

    <v-layout class="justify-center">
      <v-flex
        class="justify-center"
        md6
        xs12>
        <cv-input-container/>
      </v-flex>

      <v-flex
        md6
        xs0>
        <cv-preview-container/>
      </v-flex>

    </v-layout>

  </v-container>
</template>

<script>
  import CvInputContainer from '../components/cvInput/CvInputContainer';
  import CvPreviewContainer from '../components/cvPreview/CvPreviewContainer';
  export default {
    name: 'CvBuilder',
    components: { CvPreviewContainer, CvInputContainer }
  };
</script>

<style scoped>
  @media (min-width: 960px) {
    .container {
      max-width: 100%;
    }
  }

  .cv-builder-view-container {

  }
</style>
