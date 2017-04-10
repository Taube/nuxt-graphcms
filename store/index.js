import apolloClient from '~plugins/apolloClient'
import gql from 'graphql-tag'
import { dispatch } from 'vuex'

export const state = {
  page: {},
  blocks: [],
  navItems: []
}

export const actions = {
  nuxtServerInit ({ dispatch }, { route }) {
    return Promise.all([
      dispatch('fetch', route.name)
    ])
  },
  fetch (state, slug) {
    const pageQuery = gql`
  	query pageDetails($slug: String!) {
  		Page(slug: $slug) {
  			title
  			description
  			keywords
        block {
          id
          type
          title
          subtitle
          preamble
          image {
            fileName
            handle
            url
            mimeType
            size
          }
        }
  		},
  		allLinks(filter: {
  			isPublished: true
  		}) {
  			title
  			class
  			page {
  				slug
  			}
  			section {
  				name
  			}
  			child {
  				title
  				class
  				page {
  					slug
  				}
  			}
  		}
  	}`
    return new Promise((resolve, reject) => {
      apolloClient.query({
        query: pageQuery,
        variables: { slug: slug },
        fetchPolicy: 'cache-first'
      }).then((res) => {
        // console.log(res.data)
        state.commit('setPage', res.data.Page)
        state.commit('setBlocks', res.data.Page.block)
        state.commit('setNavItems', res.data.allLinks)
        resolve()
      }).catch((error) => {
        // console.error(error)
        reject()
      })
    })
  }
}

export const mutations = {
  setPage: (state, data) => {
    state.page = Object.assign({}, data)
  },
  setBlocks: (state, data) => {
    state.blocks = Object.assign({}, data)
  },
  setNavItems: (state, data) => {
    state.navItems = Object.assign({}, data)
  }
}
