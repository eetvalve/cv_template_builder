<template>
  <v-card class="mb-4 pl-3 pr-3">


    <v-layout row>
      <v-flex xs11>
        <cv-input-title
          title="Work experience"
        />

        <v-card-text>

          <v-card
            v-for="(item, index) in cv.workExperience"
            flat
            class="pa-3 mb-2">

            <v-layout class="justify-end">
              <v-btn
                v-if="index > 0"
                @click="removeChildSection(index)"
                text
                icon>
                <v-icon
                >cancel
                </v-icon>
              </v-btn>
            </v-layout>

            <v-layout
              row
              class="justify-space-around">
              <v-flex xs5>
                <v-text-field
                  v-model="item.companyName"
                  class="text-field-height"
                  label="Company name"></v-text-field>
              </v-flex>

              <v-flex xs5>
                <v-text-field
                  v-model="item.jobTitle"
                  class="text-field-height"
                  label="Job title"></v-text-field>
              </v-flex>

              <v-flex xs5>
                <v-text-field
                  v-model="item.city"
                  class="text-field-height"
                  label="City"></v-text-field>
              </v-flex>

              <v-flex xs5>
                <v-text-field
                  v-model="item.country"
                  class="text-field-height"
                  label="Country"></v-text-field>
              </v-flex>

              <v-flex xs5>
                <v-text-field
                  v-model="item.timePeriod"
                  class="text-field-height"
                  label="Time period"></v-text-field>
              </v-flex>

              <v-flex xs11>
                <v-textarea
                  v-model="item.jobDescription"
                  outlined
                  class="mt-3"
                  name="input-7-1"
                  label="job description"
                  value=""
                  hint="Html elements allowed here"
                  rows="7"
                />
              </v-flex>


            </v-layout>

<v-divider></v-divider>

          </v-card>

          <v-btn
            @click="addChildSection()"
            block
            color="primary">
            <v-icon>
              add_circle_outline
            </v-icon>
            add new
          </v-btn>

        </v-card-text>


      </v-flex>

      <cv-input-section-controls
        title="Work experience"
        :index="index"/>


    </v-layout>

  </v-card>
</template>

<script>
  import { mapState, mapGetter, mapActions, mapMutations } from 'vuex';
  import CvInputTitle from './CvInputTitle';
  import CvInputSectionControls from './CvInputSectionControls';

  export default {
    name: 'CvInputWorkExperience',
    components: {
      CvInputSectionControls,
      CvInputTitle
    },
    props: {
      index: {
        type: Number
      }
    },
    computed: {
      ...mapState({
        cv: state => state.cvData.cv,
      }),
    },
    methods: {
      addChildSection() {
        this.$store.commit('ADD_CHILD_SECTION', {
          section: 'workExperience',
        });
      },
      removeChildSection(index) {
        if (index > 0) {
          this.$store.commit('REMOVE_CHILD_SECTION', {
            section: 'workExperience',
            index: index
          });
        }
      },
      updateCv(hh) {
        this.$store.commit('UPDATE_CV', {
          section: 'profile',
          data: hh
        });
      }
    }
  };
</script>

<style scoped>

</style>
