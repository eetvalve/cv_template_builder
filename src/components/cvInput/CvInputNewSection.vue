<template>
  <v-card>

    <v-card-title>
      Add section
    </v-card-title>

    <v-card-actions>
      <v-layout
        row
        wrap
        class="ma-1"
      >

        <v-btn
          v-for="(item, index) in sections"
          @click="addSection(item.name)"
          class="ma-1"
        >
          <v-icon
            v-if="item.icon"
            class="mr-2">
            {{ item.icon }}
          </v-icon>

          {{ item.name }}
        </v-btn>
      </v-layout>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    name: 'CvInputNewSection',
    methods: {
      addSection(itemName) {
        this.$store.commit('ADD_NEW_SECTION', itemName)
      }
    },
    data() {
      return {
        sections: [
          {
            name: 'Personal info',
            icon: 'home'
          },
          {
            name: 'Profile',
            icon: 'account_box'
          },
          {
            name: 'Work experience',
            icon: 'work'
          },
          {
            name: 'Skills',
            icon: 'business_center'
          },
          {
            name: 'Projects',
            icon: 'laptop_chromebook'
          },
          {
            name: 'Education',
            icon: 'school'
          },
          {
            name: 'Languages',
            icon: 'language'
          },
          {
            name: 'Hobbies',
            icon: 'beach_access'
          },
          {
            name: 'References',
            icon: 'people'
          },
          {
            name: 'Custom',
            icon: ''
          },
        ]
      };
    }
  };
</script>

<style scoped>

</style>
