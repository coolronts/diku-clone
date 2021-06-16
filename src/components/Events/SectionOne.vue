<template>
  <div :class="style.main">
   <img :class="style.img" src="https://i.ibb.co/F0bMDb3/arrangementer.jpg" />
   <Header :class="style.header" @modal="modal"/>
   <div :class="style.info">
     <p :class="style.primary">Events</p>
   </div>
  </div>   
</template>

<script>
  import {defineAsyncComponent} from "vue";
  const Header = defineAsyncComponent(() =>
    import ("/src/components/Header.vue"));
    
  export default {
    name: "SectionOne",
    components:{Header},
    data() {
    return {
    canvasImage: "arrangementer.jpg",
    style:{
      main:"h-screen flex flex-col justify-between ",
      img:"w-screen h-screen absolute object-cover",
      header:"z-20 relative px-24 pt-12",
      info:"relative z-20 px-24 pb-36",
      primary:"text-5xl font-semibold text-blue-900",
      secondary:"text-5xl font-semibold text-secondary",
    }
   };
  },
  methods:{
    modal(x){this.$emit('modal',x)},
  },
};
</script>