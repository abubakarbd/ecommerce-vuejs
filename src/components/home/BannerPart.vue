<script setup>
  import { ref } from 'vue';
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/pagination';
  import 'swiper/css/navigation';

  // import required modules
  import { Autoplay, Pagination, Navigation } from 'swiper';

  const modules = ref([Autoplay, Pagination, Navigation]);
 
</script>
<template>
  <div>
    <section class="banner-part">
      <div class="">
        <div class="row">
          <div class="col-lg-12 order-0 order-lg-1 order-xl-1">
            <div class="home-grid-slider slider-arrow slider-dots">
              <swiper
                :spaceBetween="30"
                :loop="true"
                :autoplay="{
                  delay: 2000,
                }"
                :pagination="{
                  clickable: true,
                }"
                :modules="modules"
                class="mySwiper"
              >
                <swiper-slide
                  ><a href="#"
                    ><img src="@/assets/images/banner/01.jfif" alt="" /></a
                ></swiper-slide>
                <swiper-slide
                  ><a href="#"
                    ><img src="@/assets/images/banner/02.jfif" alt="" /></a
                ></swiper-slide>
                <swiper-slide
                  ><a href="#"
                    ><img src="@/assets/images/banner/03.jfif" alt="" /></a
                ></swiper-slide>
              </swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>