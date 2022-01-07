<template>
  <div class="page padding">
    <div class="video-wrapp">
      <img src="/shum.png" alt="">
      <video class="video" src="/pexels-rostislav-uzunov-9150545.mp4" autoplay muted loop preload></video>
    </div>
    <router-link to="/">
      <h2 class="xl sf"><span class="l">Самые лучшие</span><br>кросовочки<br>для тебя солнце</h2>
    </router-link>
    <router-link  class="l sf" to="/cart">в каталог</router-link>
    <router-link to="/products/1" class="product product-1">
      <img src="/pictures/1.png">
      <div class="product__description">
        <button class="button sf m">посмотреть</button>
      </div>
    </router-link>
    <router-link to="/products/2" class="product product-2">
      <img src="/pictures/2.png">
      <div class="product__description">
        <button class="button sf m">посмотреть</button>
      </div>
    </router-link>
    <router-link to="/products/3" class="product product-3">
      <img src="/pictures/3.png">
      <div class="product__description">
        <button class="button sf m">посмотреть</button>
      </div>
    </router-link>
  </div>
</template>
<script>
import gsap from 'gsap'
export default {
  mounted(){
  }
}
</script>
<style scoped lang="scss">
.page{
  transition: 0s;
  position: relative;
  h2{
    color: var(--light-color);
    margin-top: 72px;
    margin-left: 72px;
    @media (max-width: 1356px) {
      margin-top: 56px;
      margin-left: 24px;
    }
    @media (max-width: 466px) {
      margin-top: 56px;
      margin-left: 12px;
    }
    @media (max-width: 412px) {
      font-size: 24px;
    }
    span{
      @media (max-width: 412px) {
        font-size: 24px;
      }
    }
  }
  a.l{
    color: var(--light-color);
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    margin: 0;
    bottom: 144px;
    transition: 0.3s;
    word-break: none;
    @media (max-width: 412px) {
      font-size: 24px;
      width: 100%;
      text-align: center;
    }
  }
  a.l:hover{
    transition: 0.2s;
    color: var(--dark-color);
  }
}
.video-wrapp{
  height: calc(100vh - 144px);
  border-radius: 4px;
  overflow: hidden;
  position: absolute;
  top: 72px;
  z-index: -1;
  img{
    height: 100%;
    width: 100%;
    position: absolute;
    object-fit: cover;
    opacity: 0.07;
  }
  @media (min-width: 700px){
    width: calc(100vw - 144px);
  }
  @media (min-width: 1400px){
    width: calc(100vw - 288px);
  }
  @media (max-width: 700px){
    width: calc(100vw - 48px);
  }
  transition: 0s;
}
.video{
  object-fit: contain;
  height: 100%;
  transition: 0s;
  @media (min-width: 1700px){
    width: 100%;
    height: auto;
  }
}
.product{
  position: absolute;
  transition: 0.3s;
  border-radius: 4px;
  cursor: pointer;
  transform: scale(1.1);
  img{
    transition: 0.5s;
    border-radius: 4px;
  }
  .product__description{
    transition: 0.5s;
    opacity: 0;
  }
  &:hover{
    background: #fff;
    img{
      opacity: 0;
    }
    .product__description{
      opacity: 1;
    }
  }
  .product__description{
    position: absolute;
    top: 0px;
    left: 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 16px;
    height: 100%;
    width: 100%;
    .button{
      background: none;
      color: var(--dark-color);
      border-radius: 0px
    }
    .product__description-cost{
      text-align: center;
      margin-bottom: 16px;
    }
  }
}
.product-1{
  bottom: 120px;
  left: 30px;
  @media (max-width: 1041px) {
    display: none;
  }
}
.product-2{
  top: 178px;
  right: 496px;
  transform: scale(1.4);
  @media (max-width: 1620px) {
    right: 296px;
  }
  @media (max-width: 1356px) {
    right: 96px;
    transform: scale(1.1);
  }
  @media (max-width: 1041px) {
    display: none;
  }
}
.product-3{
  bottom: 48px;
  right: 48px;
  transform: scale(1.3);
  @media (max-width: 1041px) {
    display: none;
  }
}
</style>
