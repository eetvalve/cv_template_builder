<template>

  <v-card class="mb-4">
    <v-card-title>
      Personal Info
    </v-card-title>

    <v-card-text>
      <v-layout column>

        <v-layout row>
          <v-flex
            xs4
            class="image-container pa-3">

            <div class="user-img">
              <v-btn
                text>
                add img
              </v-btn>
            </div>
          </v-flex>

          <v-flex xs8>
            <v-text-field
              v-model="item"
              class="text-field-height"
              label="First name"></v-text-field>

            <v-text-field
              v-model="item"
              class="text-field-height"
              label="Last name"></v-text-field>

            <v-text-field
              v-model="item"
              class="text-field-height"
              label="Specialization (e.g. Full-Stack developer)"></v-text-field>

          </v-flex>
        </v-layout>

        <v-text-field
          v-model="item"
          class="text-field-height"
          label="Date of birth"></v-text-field>

        <v-text-field
          v-model="item"
          class="text-field-height"
          label="Nationality"></v-text-field>

        <v-text-field
          v-model="item"
          class="text-field-height"
          label="Address"></v-text-field>

        <v-text-field
          v-model="item"
          class="text-field-height"
          label="Phone number"></v-text-field>

        <v-text-field
          v-model="item"
          class="text-field-height"
          label="Email address"></v-text-field>

      </v-layout>

    </v-card-text>

  </v-card>
</template>

<script>
  export default {
    name: 'CvInputPersonalInfo',
    data() {
      return {
        item: ''
      }
    }
  };
</script>

<style scoped>
    .image-container {
    height: 136px;
  }

  .user-img {
    border: 1px solid;
    display: flex;
    justify-content: center;
    align-items: center;
    height: inherit;
  }
</style>
