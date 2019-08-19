<template>
  <v-card class="mb-4 pl-3 pr-3">


    <v-layout row>
      <v-flex xs11>
        <cv-input-title
          title="Profile"
        />

        <v-textarea
          @keyup="updateCv(cv.profile)"
          v-model="cv.profile"
          outlined
          class="textarea-field-height ml-3"
          name="input-7-1"
          label="E.g: I'm software developer who.."
          value=""
          hint="Html elements allowed here"
          rows="7"
        />


      </v-flex>

      <cv-input-section-controls
        title="Profile"
        :index="index"/>
    </v-layout>

  </v-card>
</template>

<script>
  import { mapState, mapGetter, mapActions, mapMutations } from 'vuex';

  import CvInputTitle from './CvInputTitle';
  import CvInputSectionControls from './CvInputSectionControls';

  export default {
    name: 'CvInputProfile',
    components: {
      CvInputSectionControls,
      CvInputTitle
    },
    props: {
      index: {
        type: Number
      },
    },
    computed: {
      ...mapState({
        cv: state => state.cvData.cv
      }),
    },
    methods: {
      updateCv(hh) {
        console.log('huhuu')
        this.$store.commit('UPDATE_CV', { section: 'profile', data: hh})
      }
    }
  };
</script>

<style scoped>
</style>
