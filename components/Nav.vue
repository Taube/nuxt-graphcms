<template>
	<section class="navbar" v-sticky="{ zIndex: 0, stickyTop: 0 }">
		<div class="container">

				<nuxt-link class="navbar__brand" :to="path('/')" exact>
					<img src="/images/logo.svg" class="brand__logo">
				</nuxt-link>

				<nav class="navbar__nav">
					<ul class="navbar__ul">
						<li class="navbar__li" v-for="navItem in navItems">
							<nuxt-link :to="{ path: slug(navItem.page) }" class="navbar__a" active-class="active">
								{{ navItem.title }}
							</nuxt-link>
						</li>
					</ul>
				</nav>

		</div>
	</section>
</template>

<script>
import VueSticky from 'vue-sticky'

export default {
	directives: {
		'sticky': VueSticky
	},
	computed: {
    navItems () {
      return this.$store.state.navItems
    }
  },
	methods: {
		path (url) {
			return (this.$store.state.lang.lang === 'se' ? url : '/' + this.$store.state.lang.lang + url)
		},
		slug(page) {
			// console.log(page)
			if(page !== null) {
				return page.slug
			}
		}
	}
}
</script>

<style lang="scss">

.navbar__brand {
	lost-column: 1/3;
}
.navbar__nav {
	lost-column: 2/3;
}

.navbar {
	min-height: 84px;
	box-shadow: 0 1px 0 rgba(0,0,0,.1), 0 2px 2px rgba(0,0,0,.1);
}
.navbar__ul {
	list-style-type: none;
	padding-left: 0;
}
.navbar__li {
	float: left;
}
.navbar__a {
	display: block;
	font-size: 15px;
  font-weight: 500;
  padding: 32px 20px 27px 20px;
	height: 84px;
	line-height: 20px;
  letter-spacing: 1px;
  color: #878c92;
  font-family: 'Museo', sans-serif;
  -webkit-font-smoothing: antialiased;
  text-transform: none;
	border-bottom-width: 5px;
	border-bottom-style: solid;
	border-bottom-color: transparent;
  transition: color .2s ease,
							background-color .2s ease,
							border-bottom-color .2s ease;
	&.active,
	&:hover,
	&:focus {
		background-color: #f9fafb;
		border-bottom-color: #0cb699;
	}
	&:hover,
	&:focus {
		color: #0cb699;
	}
}
.brand__logo {
	float: left;
	width: 200px;
	height: 84px;
}
</style>
