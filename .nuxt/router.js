'use strict'

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


const _155fb0aa = process.BROWSER_BUILD ? () => System.import('/Users/ola/Projects/nuxt-graphcms/pages/index.vue') : require('/Users/ola/Projects/nuxt-graphcms/pages/index.vue')

const _9cb2369c = process.BROWSER_BUILD ? () => System.import('/Users/ola/Projects/nuxt-graphcms/pages/_projects.vue') : require('/Users/ola/Projects/nuxt-graphcms/pages/_projects.vue')

const _47812859 = process.BROWSER_BUILD ? () => System.import('/Users/ola/Projects/nuxt-graphcms/pages/_property-developers.vue') : require('/Users/ola/Projects/nuxt-graphcms/pages/_property-developers.vue')



const scrollBehavior = (to, from, savedPosition) => {
  // savedPosition is only available for popstate navigations.
  if (savedPosition) {
    return savedPosition
  } else {
    let position = {}
    // if no children detected
    if (to.matched.length < 2) {
      // scroll to the top of the page
      position = { x: 0, y: 0 }
    }
    else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
      // if one of the children has scrollToTop option set to true
      position = { x: 0, y: 0 }
    }
    // if link has anchor,  scroll to anchor by returning the selector
    if (to.hash) {
      position = { selector: to.hash }
    }
    return position
  }
}


export default new Router({
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  scrollBehavior,
  routes: [
		{
			path: "/",
			component: _155fb0aa,
			name: "index"
		},
		{
			path: "/:projects",
			component: _9cb2369c,
			name: "projects"
		},
		{
			path: "/:property-developers",
			component: _47812859,
			name: "property-developers"
		}
  ]
})
