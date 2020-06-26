import VueRouter from 'vue-router';
//import markup_14 from './components/GeneratorSka'
import markup_15 from './components/InteractivePalette'
import markup_16 from './components/SmartInput'
import markup_18 from './components/IssuesTable'

export default new VueRouter({
  routes: [
    { number: '0', path: '/', component: markup_18 },
//    { number: 14, path: '/markup_14', component: markup_14 },
    { number: '15', path: '/markup_15', component: markup_15 },
    { number: '16', path: '/markup_16', component: markup_16 },
//    { number: 18, path: '/markup_18', component: markup_18 },
  ],
  mode: 'history'
})