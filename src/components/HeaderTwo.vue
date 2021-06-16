<template>
  <div :class="style.header">
    <router-link to="/">
      <img src="https://i.ibb.co/2twhHb5/1negative-logo.png" />
    </router-link>
    <div :class="style.iconsContainer">
      <button @click="modal(1)" :class="style.iconContainer">
        <i :class="['fas fa-times',style.icon]"/>
        <h1 :class="style.text" >Search</h1>
      </button>
      <button  @click="modal(2)" :class="style.iconContainer">
        <i :class="['fa fa-bars',style.icon]" aria-hidden="true"/>
        <h1 :class="style.text" >Menu</h1>
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    name:"HeaderTwo",
    data(){
      return{
        style:{
          main:"h-screen w-screen bg-blue-900",
          header:"flex justify-between px-24 py-12",
          iconsContainer:"flex items-end",
          iconContainer:"mr-8 focus:outline-none hover:text-white text-secondary",
          icon:"text-5xl",
          text:"text-xl font-bold",
          lists:"flex",
          firstCol:"w-1/3",
          content:"w-1/3 flex flex-col text-2xl font-semibold leading-relaxed text-white",
          border:"mb-4 border-b-4 border-blue-500",
          mainMenuText:"hover:text-blue-500",
          secondaryMenu:"text-xl mt-6 text-blue-500",
          secondaryaryMenuText:"hover:text-white"
        }
      }
    },
    methods:{
      modal(x){
        this.$emit('modal',x)
      },
    },
   }
</script>
