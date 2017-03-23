<template>
	<main>
		<top-bar />
		<main-nav />
		<nuxt/>
		<main-footer/>
	</main>
</template>

<script>
import TopBar from '~components/Top.vue';
import MainNav from '~components/Nav.vue';
import MainFooter from '~components/Footer.vue';


export default {
	components: {
		TopBar,
		MainNav,
		MainFooter
	}
}
</script>


<style lang="scss">
@import '~bootstrap/scss/bootstrap-reboot';
@import '~bootstrap/scss/buttons';
@import '~bootstrap/scss/grid';
@import '~bootstrap/scss/type';
@import '~bootstrap/scss/nav';
@import '~bootstrap/scss/navbar';
</style>