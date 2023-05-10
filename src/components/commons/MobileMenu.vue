<script setup>
function cateBtn(){
    $("body").css("overflow", "hidden"),
      $(".category-sidebar").addClass("active"),
      $(".category-close").on("click", function () {
        $("body").css("overflow", "inherit"),
          $(".category-sidebar").removeClass("active"),
          $(".backdrop").fadeOut();
      });
}
function cartBtn(){
    $("body").css("overflow", "hidden"),
      $(".cart-sidebar").addClass("active"),
      $(".cart-close").on("click", function () {
        $("body").css("overflow", "inherit"),
          $(".cart-sidebar").removeClass("active"),
          $(".backdrop").fadeOut();
      });
}
</script>
<template>
    <div>
        <aside class="nav-sidebar">
            <div class="nav-header">
                <a href="#"><img src="@/assets/images/logo.png" alt="logo" /></a><button class="nav-close"><i
                        class="icofont-close"></i></button>
            </div>
            <div class="nav-content">
                <ul class="nav-list">
                    <li>
                        <a href="#" class="nav-link"><i class="icofont-home"></i>Home</a>
                    </li>

                    <li>
                        <a class="nav-link" href="contact.html"><i class="icofont-contacts"></i>contact us</a>
                    </li>

                    <li>
                        <a class="nav-link" href="login.html"><i class="icofont-logout"></i>logout</a>
                    </li>
                </ul>
                <div class="nav-info-group">
                    <div class="nav-info">
                        <i class="icofont-ui-touch-phone"></i>
                        <p><small>call us</small><span>(+880) 183 8288 389</span></p>
                    </div>
                    <div class="nav-info">
                        <i class="icofont-ui-email"></i>
                        <p><small>email us</small><span>support@greeny.com</span></p>
                    </div>
                </div>
            </div>
        </aside>
        <!-- mobile footer menu  -->
        <div class="mobile-menu">
            <a href="/" class="active router-link-exact-active" title="Home Page" aria-current="page"><i
                    class="fas fa-home"></i><span>Home</span></a>
            <button class="cate-btn" @click="cateBtn" title="Category List">
                <i class="fas fa-list"></i><span>category</span>
            </button>
            <button class="cart-btn" @click="cartBtn" title="Cartlist">
                <i class="fas fa-shopping-basket"></i><span>Cart</span><sup>2</sup>
            </button>
            <a href="/my-wishist" class="" title="Wishlist"><i
                    class="fas fa-bell"></i><span>Notifications</span><sup>0</sup></a>
            <a href="/user/profile" class="" title="My Account"><i class="fas fa-user"></i><span>My Account</span></a>
        </div>

    </div>
</template>