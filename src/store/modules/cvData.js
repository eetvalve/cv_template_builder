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
      profile: 'I\'m softweare developer',
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
        categories: [
          {
            id: 0,
            categoryName: 'Front-End'
          },
          {
            id: 1,
            categoryName: 'Back-End'
          }
        ],
        primary: [
          {
            categoryId: 1,
            skillName: 'Kotlin',
            experience: '2'
          },
          {
            categoryId: 0,
            skillName: 'Angular',
            experience: '4'
          },
          {
            categoryId: 0,
            skillName: 'AngularJs',
            experience: '5'
          }
        ],
        others: ''
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
    },
    cvTemplate: { // stays always empty
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
      profile: 'I\'m softweare developer',
      workExperience: [
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
        categories: [
          {
            id: 0,
            categoryName: ''
          },
        ],
        primary: [
          {
            categoryId: 0,
            skillName: '',
            experience: ''
          },
        ],
        others: ''
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
      ],
      custom: {
        title: '',
        description: ''
      }
    }
  },
  getters: {},
  mutations: {
    UPDATE_CV(state, content) {

      const data = state.cv[content.section];

      if (!content.childProperty) {
        state.cv[content.section] = content.data;
      } else if (content.index == null) {
        state.cv[content.section][content.childProperty] = content.data;
      } else {
        state.cv[content.section][content.childProperty][content.index] = content.data;
      }

      console.log('data: ', data);
    },
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

      if (state.sectionOrder.indexOf(item) === -1) {
        state.sectionOrder.push(item);
        state.cv[item] = Object.create(state.cvTemplate[item]);
      }

    },
    REMOVE_SECTION(state, item) {
      console.log('name: ', item.title);
      state.sectionOrder.splice(item.index, 1);
      state.cv[item.title.toLowerCase()] = null;
      console.log('state.cv[item.title.toLowerCase()]: ', state.cv[item.title.toLowerCase()]);
    },
    REMOVE_CHILD_SECTION(state, data) {
      state.cv[data.section].splice(data.index, 1);
    },
    ADD_CHILD_SECTION(state, data) {
      state.cv[data.section].push({ ...state.cvTemplate[data.section][0] });
    },
    ADD_CATEGORY(state) {
      let categoryLength = 0;

      if (state.cv.skills.categories) {
        categoryLength = state.cv.skills.categories.length + 1;
      }

      state.cv.skills.categories.push({
        id: categoryLength,
        categoryName: ''
      });
      console.log('categories: ', state.cv.skills.categories);
    },
    REMOVE_CATEGORY(state, item) {
      state.cv.skills.categories.splice(item.index, 1);
      state.cv.skills.primary = state.cv.skills.primary.filter(skill => skill.categoryId !== item.itemId);
    },
    ADD_SKILL(state, category) {
      const obj = { ...state.cvTemplate.skills.primary[0] };
      obj['categoryId'] = category;
      state.cv.skills.primary.push(obj);
    },
    REMOVE_SKILL(state, index) {
      state.cv.skills.primary.splice(index, 1);
    },
    UPDATE_SKILL_CATEGORIES(state, category) {

    }
  },
  actions: {},
};

export default cvDataState;
