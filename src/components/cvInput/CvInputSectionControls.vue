<template>
  <v-flex xs1>
    <div class="arrow-container pt-2 pr-2">
      <v-btn
        @click="removeSection(title)"
        text
        icon>
        <v-icon
        >cancel
        </v-icon>
      </v-btn>

      <v-btn
        @click="moveTop()"
        text
        icon>
        <v-icon
        >expand_less
        </v-icon>
      </v-btn>

      <v-btn
        @click="moveBottom()"
        text
        icon>
        <v-icon
        >expand_more
        </v-icon>
      </v-btn>
    </div>
  </v-flex>
</template>

<script>
  export default {
    name: 'CvInputSectionControls',
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
        this.$store.commit('REMOVE_SECTION', {index: this.index, title: this.title});
      }
    }
  };
</script>

<style scoped>
  .arrow-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
