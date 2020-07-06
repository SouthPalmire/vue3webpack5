import VueRouter from 'vue-router'
import IssuesTable from './pages/IssuesTable'
import Issue from './pages/Issue'

export default new VueRouter({
  routes: [
    { path: '/', component: IssuesTable },
    { path: '/issue/:id', component: Issue }
  ],
  mode: 'history'
})