<template>
	<div class="site">
		<top-section />
		<nav-section />
		<nuxt/>
		<footer-section/>
	</div>
</template>

<script>
import TopSection from '~components/Top.vue';
import NavSection from '~components/Nav.vue';
import FooterSection from '~components/Footer.vue';

export default {
	components: {
		TopSection,
		NavSection,
		FooterSection
	},
	data () {
    return {
      page: this.$store.state.page
    }
  },
	head () {
    return {
      title: this.page.title,
      meta: [
        { hid: 'description', name: 'description', content: this.page.description },
				{ hid: 'keywords', name: 'keywords', content: this.page.keywords }
      ]
    }
  }
}
</script>

<style>
@reset-global mobile;
@lost flexbox flex;
.site {
	display: flex;
	min-height: 100vh;
	flex-direction: column;
}
.main {
	flex: 1;
}
.container {
  lost-center: 980px 30px;
}

</style>
