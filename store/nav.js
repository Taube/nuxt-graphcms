import apolloClient from '~plugins/apolloClient';
import gql from 'graphql-tag';

export const state = {
	navItems: []
};

export const actions = {
	fetchNavItems (state) {
		const pagesQuery = gql`
			query allNavItems {
				allNavItems(filter: {
					isPublished: true,
					slug_not: ""
				}) {
					id,
					title,
					slug
				}
			}
		`;
		apolloClient.query({ query: pagesQuery })
		.then((res) => {
			// console.log(res.data);
			state.commit('setNavItems', res.data.allNavItems);
		})
	}
};

export const mutations = {
	setNavItems: (state, data) => {
		state.navItems = Object.assign({}, data)
	}
};