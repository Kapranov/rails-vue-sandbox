import Vue from 'vue'
import Book from './components/book.vue'
import Resource from 'vue-resource'
import BootstrapVue from 'bootstrap-vue'

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(Resource);

//const book = new Vue({
//  el: '#book',
//  template: '<Book/>',
//  components: { Book }
//})

//console.log(book)

document.addEventListener('DOMContentLoaded', () => {
  Vue.http.headers.common['X-CSRF-Token'] = document.getElementsByName('csrf-token')[0].getAttribute('content')
  document.body.appendChild(document.createElement('book'))
  //const book = new Vue(Book).$mount('book')
  const book = new Vue({
    el: '#book',
    template: '<Book/>',
    components: { Book }
  }).$mount('book')
})
