import Vue from 'vue';

const cvDataState = {
  state: {
    sectionOrder: [
      'profile',
      'work experience',
      'skills'
    ],
    cv: {
      personalInfo: {
        imgLink: '',
        fName: '',
        lName: '',
        dateOfBirth: '',
        nationality: '',
        address: '',
        phone: '',
        email: '',
        role: 'Full-stack developer',
        socialMediaLinks: [
          {
            iconType: '',
            link: ''
          }
        ]
      },
      profile: '',
      workExperience: [
        {
          companyName: '',
          city: '',
          country: '',
          timePeriod: '',
          jobTitle: '',
          jobDescription: ''
        },
        {
          companyName: '',
          city: '',
          country: '',
          timePeriod: '',
          jobTitle: '',
          jobDescription: ''
        }
      ],
      skills: {
        primary: [
          {
            skillName: '',
            experience: ''
          },
          {
            skillName: '',
            experience: ''
          }
        ],
        'other dev-tools': [
          '',
          '',
          ''
        ],
        others: [
          '',
          '',
          ''
        ]
      },
      projects: [
        {
          name: '',
          description: '',
          iconType: '',
          repositoryLink: '',
          projectLink: ''
        }
      ],
      education: [
        {
          institutionName: '',
          fieldOfStudy: '',
          city: '',
          country: '',
          timePeriod: ''
        }
      ],
      languages: [
        {
          name: '',
          skillLevel: ''
        },
        {
          name: '',
          skillLevel: ''
        }
      ],
      hobbies: [
        {
          name: '',
          description: '',
          iconType: ''
        }
      ],
      references: [
        {
          personName: '',
          company: '',
          email: '',
          phone: ''
        }
      ]
    }
  },
  getters: {},
  mutations: {
    MOVE_BOTTOM(state, data) {
      const item = data.toLowerCase();
      const inputIndex = state.sectionOrder.findIndex(section => section === item);

      const swappedItemIndex = inputIndex + 1;
      const swappedItem = state.sectionOrder.find((section, index) => index === swappedItemIndex);

      //  state.sectionOrder[swappedItemIndex] = item
      //  state.sectionOrder[inputIndex] = swappedItem

      if (swappedItem) {
        Vue.set(state.sectionOrder, swappedItemIndex, item);
        Vue.set(state.sectionOrder, inputIndex, swappedItem);
      }


      console.log('bot: ', state.sectionOrder);
    },
    MOVE_TOP(state, data) {
      const item = data.toLowerCase();
      const inputIndex = state.sectionOrder.findIndex(section => section === item);
      const swappedItemIndex = inputIndex - 1;
      const swappedItem = state.sectionOrder.find((section, index) => index === swappedItemIndex);

      //  state.sectionOrder[swappedItemIndex] = item
      //  state.sectionOrder[inputIndex] = swappedItem

      if (swappedItem) {
        Vue.set(state.sectionOrder, swappedItemIndex, item);
        Vue.set(state.sectionOrder, inputIndex, swappedItem);
      }

      console.log('top: ', state.sectionOrder);
    },
    ADD_NEW_SECTION(state, title) {
      const item = title.toLowerCase();
      state.sectionOrder.push(item);
    },
    REMOVE_SECTION(state, index) {
      state.sectionOrder.splice(index, 1);
    }
  },
  actions: {},
};

export default cvDataState;
