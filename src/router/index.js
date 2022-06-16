import Vue from 'vue'
import Router from 'vue-router'
import Main from '../views/Main'
import BarChart from '../components/BarChart'
import PieChart from '../components/PieChart'
import WordCloud from '../components/WordCloud'

Vue.use(Router)

const originalPush = Router.prototype.push
//解决报错信息：NavigationDuplicated: Avoided redundant navigation to current location
Router.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  routes: [
    {
      path: '/',
      component: Main,
      redirect: '/bar',
      children: [
        {
          path: 'bar',
          component: BarChart
        },
        {
          path: 'pie',
          component: PieChart
        },
        {
          path: 'wordcloud',
          component: WordCloud
        },
      ]
    }
  ]
})
