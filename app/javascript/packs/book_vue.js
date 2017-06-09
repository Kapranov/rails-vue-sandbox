import Vue from 'vue'
import Book from './components/book.vue'
import Resource from 'vue-resource'
import BootstrapVue from 'bootstrap-vue'

Vue.config.productionTip = false;

Vue.use(Resource);

const book = new Vue({
  el: '#book',
  template: '<Book/>',
  components: { Book }
})

console.log(book)
