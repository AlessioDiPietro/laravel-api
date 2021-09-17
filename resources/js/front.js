require('./bootstrap');
 window.vue = require('vue');
import Vue from 'vue';
 import App from './views/App';

 const App = new Vue({
     el:'#root',
     render: h => h(App)
 })