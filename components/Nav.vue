<template>
	<ul>
		<li>
			<nuxt-link to="/" active-class="active">
				Start
			</nuxt-link>
		</li>
		<li v-for="navItem in navItems">
			<nuxt-link :to="{ path: navItem.slug }" active-class="active">
				{{ navItem.title }}
			</nuxt-link>
		</li>
	</ul>
</template>

<script>
import { mapActions } from 'vuex';

export default {
	computed: {
		navItems () {
			return this.$store.state.nav.navItems
		}
	},
	created () {
		this.fetchData();
	},
	methods: {
		fetchData () {
			this.$store.dispatch('nav/fetchNavItems');
		}
	}
}
</script>