webpackJsonp([1],{NHnr:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=o("mvHQ"),n=o.n(s),i=o("7+uW"),r=o("0lrd"),a=o.n(r);i.a.config.productionTip=!1;new i.a({el:"#example",data:{newItem:"",isDisabled:!0,todoes:[],counter:1},watch:{todoes:function(t){this.isDisabled=!t.length}},methods:{addNewTask:function(){this.todoes.push({id:this.counter++,name:this.newItem,date:(new Date).toLocaleTimeString(),editing:!1,isDone:!1}),this.newItem=""},removeItem:function(t){a.a.toast(this.todoes[t].name.toString()+" task was removed :(",4e3),this.todoes.splice(t,1)},selectAll:function(){this.todoes.forEach(function(t,e){t.isDone=!0})},removeAll:function(){this.todoes.some(function(t){return t.isDone})&&(this.todoes=this.todoes.filter(function(t,e){return!t.isDone}),a.a.toast("Selected items were removed :(",4e3))},sortByDate:function(){var t=this.todoes.filter(function(t,e,o){return 1==t.isDone}).sort(function(t,e){return t.date<e.date});this.todoes=this.todoes.filter(function(t,e,o){return 0==t.isDone}),this.todoes=t.concat(this.todoes)},convertToLocalStorage:function(){var t={item1:this.todoes};t=n()(t),localStorage.setItem("todoesObj",t)},restoreFromLocalStorage:function(){var t=JSON.parse(localStorage.getItem("todoesObj"));this.todoes=t.item1}}})}},["NHnr"]);
//# sourceMappingURL=app.6229bdf5927c31eda068.js.map