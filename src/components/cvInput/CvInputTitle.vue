<template>
  <v-layout
    class="pa-3"
    row>
    <v-flex xs11>

      <v-card-title class="pt-2">
        {{ title }}
      </v-card-title>
    </v-flex>
    <v-flex xs1>
      <div class="arrow-container">
        <v-btn
          @click="removeSection(title)"
          text
          icon
        >

            <v-icon
            >cancel
            </v-icon>


        </v-btn>

        <v-btn
          @click="moveTop()"
          text
          icon
        >

          <v-icon
          >expand_less
          </v-icon>


        </v-btn>

        <v-btn
          @click="moveBottom()"
          text
          icon
        >

            <v-icon

            >expand_more
            </v-icon>

        </v-btn>
      </div>
    </v-flex>


  </v-layout>

</template>

<script>
  export default {
    name: 'CvInputTitle',
    props: {
      title: {
        type: String
      },
      index: {
        type: Number
      }
    },
    methods: {
      moveTop() {
        this.$store.commit('MOVE_TOP', this.title);
      },
      moveBottom() {
        this.$store.commit('MOVE_BOTTOM', this.title);
      },
      removeSection() {
        this.$store.commit('REMOVE_SECTION', this.index)
      }
    }
  };
</script>

<style scoped>
  .arrow-container {
    display: flex;
    flex-direction: column;
  }
</style>
