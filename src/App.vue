<script setup>
import {
  HeaderPart,
  NavBarPart,
  CategorySidebar,
  CartSidebar,
  MobileMenu,
  ProductModal,
  TopFooter,
  FooterPart
} from '@/components/commons';
</script>

<template>
  <div>
    <HeaderPart />

    <NavBarPart />

    <CategorySidebar />

    <CartSidebar />


    <MobileMenu />

    <ProductModal />

    <router-view></router-view>

    <TopFooter />


    <FooterPart />
  </div>
</template>
