<template>
  <v-card class="mb-4">
    <cv-input-title
      title="Profile"
      :index="index"
    />

    <v-card-text>

      <v-textarea
        v-model="profile"
        outlined
        class="textarea-field-height"
        name="input-7-1"
        label="E.g: I'm software developer who.."
        value=""
        hint="Html elements allowed here"
        rows="5"
      />

    </v-card-text>

  </v-card>
</template>

<script>
  import { mapState, mapGetter, mapActions, mapMutations } from 'vuex';

  import CvInputTitle from './CvInputTitle';

  export default {
    name: 'CvInputProfile',
    components: { CvInputTitle },
    props: {
      index: {
        type: Number
      },
      profile: {
        type: String
      }
    },
    computed: {

    },
  };
</script>

<style scoped>
</style>
