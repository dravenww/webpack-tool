/**
 * @file     desc
 * @author   author
 * @dateTime date
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import './index.scss';

// routes
import list from './app.vue';
const routes = [
    {path: '/list', component: list}
];

Vue.use(VueRouter);
let router = new VueRouter({
    routes
});
const app = new Vue({
    router: router,
    el: '#wrapContainer',
    data: {
        msg: 'hello world'
    }
});