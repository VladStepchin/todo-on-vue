// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Materialize from 'materialize-css'
// import App from './App'
// import router from './router'

Vue.config.productionTip = false

// eslint-disable-next-line to ignore the next line.
/* eslint-disable */
var vm = new Vue({
  el: "#example",
  data: {
    newItem: '',
    isDisabled: true,
    todoes: [],
    counter: 1
  },
  watch: {
    todoes: function (val) {
      this.isDisabled = val.length ? false : true;
    }
  },
  methods: {
    addNewTask: function () {
      this.todoes.push({
        id: this.counter++,
        name: this.newItem,
        date: new Date().toLocaleTimeString(),
        editing: false,
        isDone: false
      })
      this.newItem = ''
    },
    removeItem: function (id) {
      Materialize.toast(this.todoes[id].name.toString() + ' task' + ' was removed :(', 4000)
      this.todoes.splice(id, 1);
    },
    selectAll: function () {
      this.todoes.forEach((v, index) => {
        v.isDone = true;
      })
    },
    removeAll: function () {
      if (this.todoes.some((v) => {
          return v.isDone
        })) {
        this.todoes = this.todoes.filter((v, index) => {
          return !v.isDone;
        })
        Materialize.toast('Selected items were removed :(', 4000)
      }
    },
    sortByDate: function () {
      let tmp = this.todoes.filter((v, index, item) => {
        return v.isDone == true;
      }).sort((a, b) => {
        return a.date < b.date;
      })

      this.todoes = this.todoes.filter((v, index, item) => {
        return v.isDone == !true;
      });
      this.todoes = tmp.concat(this.todoes);
    },
    convertToLocalStorage: function () {
      debugger;
      var serialObj = {
        "item1": this.todoes
      }

      serialObj = JSON.stringify(serialObj);
      localStorage.setItem("todoesObj", serialObj);

    },
    restoreFromLocalStorage: function () {
      debugger;
      var a = JSON.parse(localStorage.getItem("todoesObj"));
      this.todoes = a.item1;
    }
  }
})
