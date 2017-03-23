module.exports = {
	env: {
		runningPort: process.env.PORT || 3000
	},
	build: {
		vendor: ['isomorphic-fetch', 'apollo-client', 'graphql-tag']
	},
	plugins: ['~plugins/apolloClient'],
	head: {
		title: 'Nuxt.js Apollo Client',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' }
		],
		link: [
			{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:600,400,300,200' }
		]
	},
	router: {
		routes: [
			{ path: '/projekt/', component: 'pages/_projects' },
			{ path: '/fastighetsutvecklare/', component: 'pages/_property-developers' }
		]
	},
	loading: {
    	color: '#0cb699'
	}
}
