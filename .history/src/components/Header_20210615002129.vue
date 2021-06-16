<template>
  <div :class="style.main">
    <router-link to="/">
      <img src="@/assets/logo.svg"/>
    </router-link>
    <div :class="style.iconsContainer">
      <button @click="modal(1)" :class="style.iconContainer">
        <i :class="['fas fa-search',style.icon]"></i>
        <h1 :class="style.text" >Search</h1>
      </button>
      <button @click="modal(2)" :class="style.iconContainer">
        <i :class="['fa fa-bars',style.icon]" aria-hidden="true"></i>
        <h1 :class="style.text" >Menu</h1>
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Header",
    data() {
      return {
        canvasImage: "section1.png",
          style:{
            main:"flex justify-between",
            iconsContainer:"flex",
            iconContainer:"mr-8 focus:outline-none text-blue-900 hover:text-secondary",
            menu:"text-blue-900 focus:outline-none hover:text-secondary",
            icon:"text-5xl",
            text:"text-xl font-bold"
          }          
        }
      },
      methods:{
        modal(x){
          this.$emit('modal',x)
        },
      },
    };
</script>

<style>
  .sectionOne {
    background-color: #e8eae9;
  }
</style>
