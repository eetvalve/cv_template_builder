<template>
  <v-card class="mb-4 pl-3 pr-3">

    <v-layout row>
      <v-flex xs11>

        <cv-input-title
          title="Skills"
          :index="index"
        />

        <v-card-text>

          <!--  PRIMARY SKILLS start -->
          <v-card
            class="pl-2 pr-2 pb-2 elevation-0">


             <h2 class="pl-3">Primary skills</h2>


            <v-card
              v-for="(category, index) in skills.categories"
              flat
              class="pa-3 mb-2">

              <v-layout class="justify-end">
                <v-btn
                  v-if="index > 0"
                  @click="removeCategory(index, category.id)"
                  text
                  icon>
                  <v-icon
                  >cancel
                  </v-icon>
                </v-btn>
              </v-layout>

              <v-text-field
                @input="updateCv(category, index, 'categories')"
                :value="category.categoryName"
                label="Category name"></v-text-field>


              <div v-for="(skill, i) in skills.primary">

                <div v-if="skill.categoryId === category.id">

                  <v-layout
                    class="pl-3 pr-3 align-center"
                    row>

                    <v-flex xs5>
                      <v-text-field
                        @input="updateCv(skill, i, 'primary')"
                        :value="skill.skillName"
                        label="Skill name"
                        class="mr-2"></v-text-field>
                    </v-flex>

                    <v-flex xs5>
                      <v-text-field
                        @input="updateCv(skill, i, 'primary')"
                        :value="skill.experience"
                        label="Skill level"></v-text-field>
                    </v-flex>

                    <v-flex xs1>
                      <v-btn
                        @click="removeSkill(i)"
                        text
                        icon>
                        <v-icon
                        >delete
                        </v-icon>
                      </v-btn>
                    </v-flex>

                  </v-layout>

                </div>
              </div>

              <v-flex>
                <v-btn
                  class="align-end mb-2"
                  @click="addSkill(category.id)"

                  color="primary">
                  <v-icon>
                    add_circle_outline
                  </v-icon>
                  add new skill
                </v-btn>
              </v-flex>

              <v-divider></v-divider>

            </v-card>



            <v-btn
              @click="addCategory()"
              block
              color="primary"
              class="mt-5">
              <v-icon>
                add_circle_outline
              </v-icon>
              add new Category
            </v-btn>

          </v-card>
          <!--  PRIMARY SKILLS end -->

          <v-divider class="mt-5"></v-divider>

          <!--  OTHER SKILLS start -->
          <v-card
            flat
            class="pl-2 pr-2 pb-2 mt-5 elevation-0">

            <h2 class="pl-0">Other skills</h2>

            <v-textarea
              :value="skills.others"
              outlined
              class="mt-3"
              name="input-7-1"
              label="Other skills"
              value=""
              hint="Html elements allowed here"
              rows="5"
            />

          </v-card>
          <!--  OTHER SKILLS end -->

        </v-card-text>

      </v-flex>

      <cv-input-section-controls
        title="Skills"
        :index="index"/>
    </v-layout>
  </v-card>
</template>

<script>
  import { mapState, mapGetter, mapActions, mapMutations } from 'vuex';

  import CvInputTitle from './CvInputTitle';
  import CvInputSectionControls from './CvInputSectionControls';

  export default {
    name: 'CvInputSkills',
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
        skills: state => state.cvData.cv.skills
      }),
    },
    methods: {
      addCategory() {
        this.$store.commit('ADD_CATEGORY');
      },
      removeCategory(index, itemId) {
        if (index > 0) {
          this.$store.commit('REMOVE_CATEGORY', {
            index: index,
            itemId: itemId
          });
          // this.updateCv()
        }
      },
      addSkill(category) {
        this.$store.commit('ADD_SKILL', category);
      },
      removeSkill(index) {
        this.$store.commit('REMOVE_SKILL', index);
        // this.updateCv()
      },
      updateCv(data, index, childProp) {

        const obj = {
          section: 'skills',
          childProperty: childProp,
          data: data,
          index: index
        };


        this.$store.commit('UPDATE_CV', obj);
      }
    }
  };
</script>

<style scoped>

</style>
