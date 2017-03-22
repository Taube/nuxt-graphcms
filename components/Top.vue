<template>
    <div class="topbar visible-lg">
        <div class="container">
            <nav class="topbar__nav">
                <a class="button button--primary" href="/jobba-hos-oss/">We're hiring!</a>
                <a class="button button--secondary" href="/blogg/">
                    Senast från bloggen
                </a>
                <a class="button button--text" href="/blogg/mar-man-bra-presterar-man-bra/">
                    Mår man bra - presterar man bra &nbsp; →
                </a>
            </nav>
            <div class="topbar__social">
                <div
                    class="fb-like fb_iframe_widget"
                    data-href="https://www.facebook.com/tessinpunktse"
                    data-width="300"
                    data-layout="standard"
                    data-action="like"
                    data-show-faces="false"
                    data-share="false"
                    data-colorscheme="dark"
                    fb-xfbml-state="rendered">
                    <!--
                    <span style="vertical-align: bottom; width: 300px; height: 20px;">
                    <iframe name="fdf01535ed85fc" width="300px" height="1000px" frameborder="0" allowtransparency="true" allowfullscreen="true" scrolling="no" title="fb:like Facebook Social Plugin" src="https://www.facebook.com/v2.0/plugins/like.php?action=like&amp;app_id=768966846480785&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fconnect%2Fxd_arbiter%2Fr%2Fao6eUeuGXQq.js%3Fversion%3D42%23cb%3Df3724b3f60cb024%26domain%3Dtessin.se%26origin%3Dhttps%253A%252F%252Ftessin.se%252Ff3efb616868eb5c%26relation%3Dparent.parent&amp;color_scheme=dark&amp;container_width=0&amp;href=https%3A%2F%2Fwww.facebook.com%2Ftessinpunktse&amp;layout=standard&amp;locale=sv_SE&amp;sdk=joey&amp;share=false&amp;show_faces=false&amp;width=300" style="border: none; visibility: visible; width: 300px; height: 20px;" class="">
                    </iframe>
                    </span>
                    -->
                </div>

            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '~bootstrap/scss/variables';
@import '~bootstrap/scss/mixins';
.topbar {
    background-color: $gray-dark;
    height: 44px;
}
.topbar__nav {
    float: right;
}
.button {
    color: #fff;
    font-family: "Source Sans Pro", sans-serif;
    background-color: #0cb699;
    padding: 4px 10px;
    border-radius: 3px;
    line-height: 5px;
    margin-right: 8px;
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 700;
    margin-bottom: 13px;
}

</style>