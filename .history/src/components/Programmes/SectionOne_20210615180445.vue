<template>
  <div :class="style.main">
    ss
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
    canvasImage: "Programmes.png",
    additionalImage: "1.jpg",
    style:{
      main:"h-screen relative pt-12 px-24 homeSectionOne",
      mainContent:"h-full flex flex-col justify-between",
      info:"flex mb-12 items-end",
      textContainer:"font-semibold text-5xl mb-36",
      heading:" text-blue-900 mb-3",
      subHeading:" text-secondary",
      mainImageContainer:"w-full h-full absolute bottom-8 right-6",
      mainImage:"w-full h-full",
      addiitonalImage:"absolute right-3 bottom-6 img",
    }
   };
  },
  methods:{
    modal(x){
      this.$emit('modal',x)
    },
  },
};
</script>

<style>
  .homeSectionOne {
    background-color: #FAFAFC;
  }
</style>
