<template>
  <header class="header padding">
    <label class="menu-button" for="menu">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.25 1H2.05769C1.47354 1 1 1.47354 1 2.05769V9.25C1 9.83415 1.47354 10.3077 2.05769 10.3077H9.25C9.83415 10.3077 10.3077 9.83415 10.3077 9.25V2.05769C10.3077 1.47354 9.83415 1 9.25 1Z" stroke="var(--dark-color)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M21.9424 1H14.7501C14.1659 1 13.6924 1.47354 13.6924 2.05769V9.25C13.6924 9.83415 14.1659 10.3077 14.7501 10.3077H21.9424C22.5265 10.3077 23.0001 9.83415 23.0001 9.25V2.05769C23.0001 1.47354 22.5265 1 21.9424 1Z" stroke="var(--dark-color)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9.25 13.6923H2.05769C1.47354 13.6923 1 14.1659 1 14.75V21.9423C1 22.5265 1.47354 23 2.05769 23H9.25C9.83415 23 10.3077 22.5265 10.3077 21.9423V14.75C10.3077 14.1659 9.83415 13.6923 9.25 13.6923Z" stroke="var(--dark-color)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M21.9424 13.6923H14.7501C14.1659 13.6923 13.6924 14.1659 13.6924 14.75V21.9423C13.6924 22.5265 14.1659 23 14.7501 23H21.9424C22.5265 23 23.0001 22.5265 23.0001 21.9423V14.75C23.0001 14.1659 22.5265 13.6923 21.9424 13.6923Z" stroke="var(--dark-color)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </label>
    <nav class="nav">
      <input type="checkbox" id="menu">
    </nav>
    <h1 class="logo">sneakers <span v-html="smile"></span></h1>
    <router-link class="cart-button" to="/cart">
      <svg width="28" height="25" viewBox="0 0 28 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.11363 23.3125C9.67376 23.3125 10.1278 22.8584 10.1278 22.2983C10.1278 21.7382 9.67376 21.2841 9.11363 21.2841C8.5535 21.2841 8.09943 21.7382 8.09943 22.2983C8.09943 22.8584 8.5535 23.3125 9.11363 23.3125Z" stroke="var(--dark-color)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M23.3125 23.3125C23.8726 23.3125 24.3267 22.8584 24.3267 22.2983C24.3267 21.7382 23.8726 21.2841 23.3125 21.2841C22.7524 21.2841 22.2983 21.7382 22.2983 22.2983C22.2983 22.8584 22.7524 23.3125 23.3125 23.3125Z" stroke="var(--dark-color)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M1 1H5.05682L8.09943 18.2415H24.3267" stroke="var(--dark-color)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M8.09943 14.1847H23.9109C24.0282 14.1847 24.1418 14.1442 24.2326 14.0699C24.3233 13.9955 24.3855 13.8921 24.4085 13.7771L26.234 4.64924C26.2488 4.57564 26.247 4.49968 26.2288 4.42686C26.2106 4.35403 26.1765 4.28615 26.1289 4.22811C26.0813 4.17008 26.0214 4.12333 25.9535 4.09126C25.8856 4.05918 25.8115 4.04257 25.7364 4.04262H6.07102" stroke="var(--dark-color)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </router-link>
  </header>
</template>

<script>
export default {
  name: 'headerComponent',
  data(){
    return{
      smile: "&#128150;",
      smiles: [
        "&#128150;",
        "&#129505;",
        "&#128155;",
        "&#128154;",
        "&#128153;",
        "&#128156;",
        "&#128420;",
        "&#128165;",
        "&#128172;",
        "&#128075;",
        "&#128400;",
        "&#128406;",
        "&#129310;",
        "&#9996;",
        "&#129305;",
        "&#129311;",
        "&#129304;",
        "&#129305;",
        "&#128077;",
        "&#128079;",
        "&#128588;",
        "&#129309;",
        "&#128170;",
        "&#128064;",
        "&#129412;",
      ]
    }
  },
  mounted(){
    this.smile = this.smiles[Math.floor(Math.random()*this.smiles.length)]
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header{
  width: 100vw;
  display: flex;
  justify-content: space-between;
  position: fixed;
  padding-top: 24px;
  z-index: 99999999999;
  h1{
    color: var(--dark-color);
  }
}
.nav{
  display: none;
}
.menu-button{
  cursor: pointer;
  height: 24px;
  width: 24px;
}
.cart-button{
  cursor: pointer;
  height: 24px;
  width: 24px;
}
</style>
