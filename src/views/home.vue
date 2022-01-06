<template>
  <div class="page padding">
    <div class="video-wrapp">
      <img src="/shum.png" alt="">
      <video class="video" src="/pexels-rostislav-uzunov-9150545.mp4" autoplay muted loop preload></video>
    </div>
    <h2 class="xl sf"><span class="l">Самые лучшие</span><br>кросовочки<br>для тебя солнце</h2>
    <a class="l sf" href="">посмотреть</a>
    <div class="product product-1">
      <img src="/pictures/1.png">
    </div>
    <div class="product product-2">
      <img src="/pictures/2.png">
    </div>
    <div class="product product-3">
      <img src="/pictures/3.png">
    </div>
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
  }
  a.l{
    color: var(--light-color);
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    margin: 0;
    bottom: 144px;
    transition: 0.3s;
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
  &:hover{
    background: #fff;
    img{
      opacity: 0;
    }
  }
}
.product-1{
  bottom: 120px;
  left: 30px;
}
.product-2{
  top: 178px;
  right: 496px;
  transform: scale(1.4);
}
.product-3{
  bottom: 48px;
  right: 48px;
  transform: scale(1.3);
}
</style>
