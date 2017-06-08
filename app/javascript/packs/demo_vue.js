import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

Vue.config.productionTip = false;

Vue.use(BootstrapVue);

new Vue({
  el: '#app',
  data: {
    items: [{
      isActive: true,
      age: 40,
      name: {
        first: 'Dickerson',
        last: 'Macdonald'
      }

    }, {
      isActive: false,
      age: 21,
      name: {
        first: 'Larsen',
        last: 'Shaw'
      }

    }, {
      isActive: false,
      age: 9,
      state: 'success',
      name: {
        first: 'Mitzi',
        last: 'Navarro'
      }

    }, {
      isActive: false,
      age: 89,
      name: {
        first: 'Geneva',
        last: 'Wilson'
      }

    }, {
      isActive: true,
      age: 38,
      name: {
        first: 'Jami',
        last: 'Carney'
      }

    }, {
      isActive: false,
      age: 27,
      name: {
        first: 'Essie',
        last: 'Dunlap'
      }

    }, {
      isActive: false,
      age: 25,
      name: {
        first: 'Dickerson',
        last: 'Donald'
      }

    }, {
      isActive: true,
      age: 33,
      name: {
        first: 'Larsen',
        last: 'Michael'
      }

    }, {
      isActive: false,
      age: 56,
      name: {
        first: 'Mitzi',
        last: 'John'
      }

    }, {
      isActive: true,
      age: 42,
      name: {
        first: 'Geneva',
        last: 'Wiliams'
      }

    }, {
      isActive: false,
      age: 318,
      name: {
        first: 'Jami',
        last: 'Niff'
      }

    }, {
      isActive: true,
      age: 17,
      name: {
        first: 'Essie',
        last: 'Garner'
      }

    }],
    fields: {
      name: {
        label: 'Person Full name',
        sortable: true
      },
      age: {
        label: 'Person age',
        sortable: true
      },
      isActive: {
        label: 'is Active'
      },
      actions: {
        label: 'Actions'
      }
    },
    currentPage: 1,
    perPage: 5,
    filter: null
  },
  methods: {
    details(item) {
      alert(JSON.stringify(item));
    }
  }
})
