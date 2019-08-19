<template>
  <v-container>

    <cv-input-personal-info/>

    <div v-for="(item, index) in sectionOrder">
      <div v-if="item === 'profile'">
        <cv-input-profile
          :index="index"/>
      </div>
      <div v-else-if="item === 'work experience'">
        <cv-input-work-experience :index="index"/>
      </div>
      <div v-else-if="item === 'skills'">
        <cv-input-skills :index="index"/>
      </div>
    </div>


    <cv-input-new-section/>


  </v-container>
</template>

<script>
  import { mapState, mapGetter, mapActions, mapMutations } from 'vuex';

  import CvInputPersonalInfo from './CvInputPersonalInfo';
  import CvInputProfile from './CvInputProfile';
  import CvInputWorkExperience from './CvInputWorkExperience';
  import CvInputSkills from './CvInputSkills';
  import CvInputNewSection from './CvInputNewSection';

  export default {
    name: 'CvInputContainer',
    components: {
      CvInputNewSection,
      CvInputSkills,
      CvInputWorkExperience,
      CvInputProfile,
      CvInputPersonalInfo
    },
    computed: {
      ...mapState({
        sectionOrder: state => state.cvData.sectionOrder,
        cv: state => state.cvData.cv
      }),
    }
  };
</script>

<style scoped>

</style>
