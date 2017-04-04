<template>
  <div>
    <div id="fb-root"></div>
    <div class="fb-like"
      data-href="https://www.facebook.com/tessinpunktse"
      width="300"
      data-colorscheme="dark"
      data-layout="standard"
      data-action="like"
      data-size="small"
      data-show-faces="false"
      data-share="false">
    </div>
  </div>
</template>

<script>
export default {
  mounted: function mounted() {
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.8&appId=172578929464792";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }
}
</script>

<style>
/*
.fb-like--loading {
  display: inline-block;
  zoom: 1;
  border-radius: 3px;
  font-size: 11px;
  height: 20px;
  padding: 0 0 0 2px;
  background: #4267b2;
  border: 1px solid #4267b2;
  color: #fff;
  cursor: pointer;
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  margin: 0;
  -webkit-user-select: none;
  white-space: nowrap;
}
.fb-like {
  color: #fff;
  background-color: transparent;
}
*/
</style>
