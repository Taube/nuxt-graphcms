<template>
  <section class="hero hero--start">
      <div class="container">
        <article class="hero__content">
          <h1 class="hero__h1">{{ block.title }}</h1>
          <h2 class="hero__h2">{{ block.subtitle }}</h2>
          <p>{{ imageUrl }}</p>
        </article>
      </div>
      <picture class="hero__picture">
        <img class="hero__image" :src="imageUrl">
      </picture>
  </section>
</template>

<script>
export default {
  props: [
    'block'
  ],
  computed: {
    imageUrl: function () {
      return this.block.image[0].url
    }
  }
}
</script>

<style>
.hero {
  position: relative;
  min-height: 500px;
}
.hero__h1 {
  font-family: "Museo";
  font-size: 48px;
  font-weight: 400;
  margin-bottom: 15px;
  color: #242628;
}
.hero__picture {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
}
.hero__image {
  width: 100%;
}
</style>
