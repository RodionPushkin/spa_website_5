<template>
  <div class="timer s">{{time}}</div>
</template>

<script>
export default {
  name: 'component',
  data(){
    return{
      time: "",
    }
  },
  mounted(){
    setInterval(()=>{
      this.time = this.getTime()
    },1000)
  },
  methods:{
    getTime(){
      let now = new Date;
      let time = ""
      let hours = now.getHours()
      let minutes = now.getMinutes()
      if(hours < 10){
        time = "0"+hours+":"
      }else{
        time = hours+":"
      }
      if(minutes < 10){
        time += "0"+minutes
      }else{
        time += minutes
      }
      return time
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.timer{
  position: fixed;
  bottom: 24px;
  left:0;
  text-align: center;
  @media (min-width: 700px){
    width: 72px;
  }
  @media (min-width: 1400px){
    width: 144px;
  }
  @media (max-width: 700px){
    display: none;
  }
}
</style>
