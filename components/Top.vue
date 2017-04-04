<template>
    <section class="topbar">

        <div class="container">
          <div class="topbar__social">
              <Facebook />
          </div>
          <nav class="topbar__nav">
            <nuxt-link
                class="button button--primary"
                v-if="$store.state.lang.lang === 'se'"
                :to="`/no` + $route.fullPath"
                active-class="none">
                {{ $t('links.norwegian') }}
            </nuxt-link>
            <nuxt-link
                class="button button--primary"
                v-else :to="$route.fullPath.replace(/^\/[^\/]+/, '')"
                active-class="none">
                {{ $t('links.swedish') }}
            </nuxt-link>
            <!--
            <a class="button button--primary" href="/jobba-hos-oss/">We're hiring!</a>
            <a class="button button--secondary" href="/blogg/">
                Senast från bloggen
            </a>
            -->
            </nav>
        </div>

    </section>
</template>

<script>
import { mapActions } from 'vuex';
import Facebook from '~components/Facebook.vue';

export default {
  	components: {
  		Facebook
  	},
    methods: {
        path (url) {
            return (this.$store.state.lang.lang === 'se' ? url : '/' + this.$store.state.lang.lang + url)
        }
    }
}
</script>

<style lang="scss">
@import '~bootstrap/scss/variables';
@import '~bootstrap/scss/mixins';
@import 'assets/postcss.scss';

.topbar {
  background-color: $gray-dark;
  display: none;
}
@media (--desktop) {
  .topbar {
    display: block;
  }
}

.topbar__social {
  padding-top: 10px;
  height: 42px;
  lost-column: 1/2;
}

.topbar__nav {
  text-align: right;
  padding-top: 10px;
  padding-bottom: 12px;
  lost-column: 1/2;
}

.button {
    color: #fff;
    font-family: "Source Sans Pro", sans-serif;
    background-color: #0cb699;
    padding: 4px 10px;
    border-radius: 3px;
    line-height: 5px;
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 700;
}
</style>
