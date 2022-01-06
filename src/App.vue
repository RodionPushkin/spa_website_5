<template>
  <div class="content mf m">
    <!-- <router-link to="/">page</router-link> -->
    <main class="main">
      <router-view/>
    </main>
  </div>
</template>

<style lang="scss">
:root {
  --main-color: #f9f9f9;
  --second-color: #f9f9f9;
  --third-color: #f9f9f9;
  --bg-color: #000015;
  --light-color: rgba(255, 255, 255, 0.90);
  --dark-color: #000015;
}
*{padding: 0;margin: 0;border: 0; scroll-behavior: smooth;color: inherit;}
*,*:before,*:after{-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;}
:focus,:active{outline: none;}
a:focus,a:active,a{outline: none;color: inherit;}
nav,footer,header,aside{display: block;}
html,body{height:100%;width:100%;font-size:100%;line-height:1;font-size:14px;-ms-text-size-adjust:100%;-moz-text-size-adjust:100%;-webkit-text-size-adjust:100%;}
input,button,textarea{font-family:inherit;}
input::-ms-clear{display: none;}
button{cursor: pointer;}
button::-moz-focus-inner{padding:0;border:0;}
a,a:visited{text-decoration: none;}
a:hover{text-decoration: none;}
ul li{list-style: none;}
img{vertical-align: top;object-fit: contain;}
h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight: inherit;}
body{overflow-x: hidden;overflow-y: overlay;}
@media (min-width: 700px) {
  ::-webkit-scrollbar{width:30px}
  ::-webkit-scrollbar-track{border-radius:100px;background-clip:border-box}
  ::-webkit-scrollbar-thumb{background:rgba(0,0,0,.2);background-clip:padding-box;border:13px solid transparent;border-radius:100px; transition: 1s;}
  ::-webkit-scrollbar-button,::-webkit-scrollbar-track-piece{background:transparent}
  ::-webkit-scrollbar-corner{background:transparent}
}
/////////////////////////////////////////////////////////
// font sizes
.s{
  transition: 0.2s;
  @media (min-width: 700px){
    font-size: 16px;
    line-height: 20px;
  }
  @media (max-width: 700px){
    font-size: 13.33px;
    line-height: 17.33px;
  }
}
.m{
  transition: 0.2s;
  @media (min-width: 700px){
    font-size: 23.04px;
    line-height: 27.04px;
  }
  @media (max-width: 700px){
    font-size: 19.2px;
    line-height: 23.2px;
  }
}
.l{
  transition: 0.2s;
  @media (min-width: 700px){
    font-size: 33.18px;
    line-height: 37.18px;
  }
  @media (max-width: 700px){
    font-size: 27.65px;
    line-height: 31.65px;
  }
}
.xl{
  transition: 0.2s;
  @media (min-width: 700px){
    font-size: 47.77px;
    line-height: 51.77px;
  }
  @media (max-width: 700px){
    font-size: 39.81px;
    line-height: 43.81px;
  }
}
/////////////////////////////////////////////////////////
// colors b is bg c is font color
.mb{
  background: var(--main-color);
}
.mc{
  color: var(--main-color);
}
.sb{
  background: var(--second-color);
}
.sc{
  color: var(--second-color);
}
/////////////////////////////////////////////////////////
// main and second fonts
.mf{
  font-family: 'Roboto', sans-serif;
}
.sf{
  font-family: 'Istok Web', sans-serif;
}
/////////////////////////////////////////////////////////
// settings
.link{
  color: var(--main-color);
  transition: 0.2s;
  &.nuxt-link-exact-active{
    color: var(--dark-color);
  }
  @media (min-width: 700px){
    &:hover{
      color: var(--second-color);
    }
  }
}
.main{
  flex: 1 0 auto;
  min-height: 100vh;
}
.content{
  display: flex;
  flex-direction: column;
  width: 100vw;
  position: relative;
  background: var(--bg-color);
  overflow: hidden;
}
.page{
  width: 100%;
  min-height: 100vh;
}
.padding{
  transition: 0.04s;
  @media (min-width: 700px){
    padding: 24px 72px 0px 72px;
  }
  @media (min-width: 1400px){
    padding: 48px 144px 0px 144px;
  }
  @media (max-width: 700px){
    padding: 24px 24px 0px 24px;
  }
}
.button{
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--dark-color);
  color: var(--light-color);
  transition: 0.4s;
  border-radius: 4px;
  font-size: 16px;
  border: 1px solid rgba(0, 0, 0, 0);
  @media (min-width: 700px){
    &:hover{
      transition: 0.2s;
      background: var(--light-color);
      color: var(--dark-color);
    }
  }
}
.input{
  padding: 12px 24px;
  background: rgba(0, 0, 0, 0);
  border: 1px solid var(--dark-color);
  border-radius: 4px;
  font-size: 16px;
  margin-bottom: 24px;
  color: var(--dark-color);
}
.input-wrapp{
  position: relative;
  margin-top: 40px;
  .input{
    padding: 18px;
    width: 100%;
    height: 56px;
    margin: 0px;
  }
  .text{
    position: absolute;
    top: 50%;
    left: 18px;
    font-size: 18px;
    line-height: 18px;
    pointer-events: none;
    transform: translateY(-50%);
    height: 18px;
  }
  .active{
    border: 2px solid var(--second-color);
  }
}
.password{
  position: absolute;
  height: 32px;
  left: 18px;
  top: 50%;
  transform: translateY(-50%);
  width: calc(100% - 32px);
  background: var(--bg-color);
  display: flex;
  align-items: center;
  pointer-events: none;
  span{
    display: block;
    height: 8px;
    width: 8px;
    background: var(--dark-color);
    border-radius: 50%;
    margin-left: 4px;
  }
}
</style>