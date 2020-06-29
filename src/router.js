import VueRouter from 'vue-router';
import IssuesTable from './pages/IssuesTable'
import Issue from './pages/Issue'

export default new VueRouter({
  routes: [
    { path: '/issue/:id', component: IssuesTable },
    { path: '/', component: Issue },
  ],
  mode: 'history'
})