<script setup>
function headerCart(){
    $("body").css("overflow", "hidden"),
      $(".cart-sidebar").addClass("active"),
      $(".cart-close").on("click", function () {
        $("body").css("overflow", "inherit"),
          $(".cart-sidebar").removeClass("active"),
          $(".backdrop").fadeOut();
      });
}
function headerSrc(){
    $(".header-form").toggleClass("active"),
      $(".header-src").children(".fa-search").toggleClass("fa-times");
}
</script>
<template>
  <div>
    <div class="backdrop"></div>
    <a class="backtop fas fa-arrow-up" href="#"></a>
    <div class="header-top">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-lg-5">
            <div class="header-top-welcome">
              <p>Welcome to Ecomart in Your Dream Online Store!</p>
            </div>
          </div>
          <div class="col-md-5 col-lg-3"></div>
          <div class="col-md-7 col-lg-4">
            <ul class="header-top-list">
              <li><a href="offer.html">Seller Apply</a></li>
              <li><a href="faq.html">need help</a></li>
              <li><a href="contact.html">contact us</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <header class="header-part">
      <div class="container">
        <div class="header-content">
          <div class="header-media-group">
            <button class="header-user">
              <img src="@/assets/images/menu.png" alt="user" /></button
            ><router-link :to="{name:'index'}"
              ><img src="@/assets/images/logo.png" alt="logo" /></router-link
            ><button class="header-src" @click="headerSrc"><i class="fas fa-search"></i></button>
          </div>
          <router-link :to="{name:'index'}" class="header-logo"
            ><img src="@/assets/images/logo.png" alt="logo"
          /></router-link>

          <form class="header-form">
            <input type="text" placeholder="Search anything..." /><button>
              <i class="fas fa-search"></i>
            </button>
          </form>
          <div class="header-widget-group hover-nav">
            <li class="nav-item dropdown">
              <a
                class="nav-link header-widget"
                href="#"
                data-bs-toggle="dropdown"
                ><i class="fas fa-user"></i
              ></a>
              <ul class="dropdown-menu dropdown-menu-end">
                <li><router-link :to="{name:'user.login'}" class="dropdown-item"> Login</router-link></li>
                <li>
                  <router-link :to="{name:'user.register'}" class="dropdown-item"> Register</router-link>
                </li>
              </ul>
            </li>

            <router-link :to="{name : 'wishlist'}" class="header-widget" title="Wishlist"
              ><i class="fas fa-heart"></i><sup>0</sup></router-link
            ><button class="header-widget header-cart" @click="headerCart" title="Cartlist">
              <i class="fas fa-shopping-basket"></i><sup>9+</sup
              ><span>total price<small>$345.00</small></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>


<style>
.hover-nav .nav-item .dropdown-menu {
  display: none;
  margin-top: 0;
}
.hover-nav .nav-item:hover .nav-link {
}
.hover-nav .nav-item:hover .dropdown-menu {
  display: block;
}
</style>
