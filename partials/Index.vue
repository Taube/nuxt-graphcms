<template>
	<main class="main">
		<component v-for="block in blocks"
			:id="block.id"
			:is="block.type"
			:block="block"
			:key="block.id">
		</component>
	</main>
</template>

<script>
import HERO from '~components/HERO.vue';

export default {
	components: {
		HERO
  },
	computed: {
    blocks () {
      return this.$store.state.blocks
    }
  }
}
</script>

<style>
.hero__content {
	lost-column: 1/1;
}
</style>
