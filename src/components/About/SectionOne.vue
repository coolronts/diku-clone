<template>
  <div :class="style.main">    
    <Header class="pr-24" @modal="modal"/>
    <div :class="style.textsContainer">
      <p :class="style.heading">About Diku</p>
      <p class="style.subheading">Norwegian Agency for International Cooperation and Quality Enhancement in Higher Education</p>
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
        style: {
          main:"h-screen pt-12 pl-24 pb-32 flex flex-col justify-between sectionOne",
          textsContainer:"text-5xl font-semibold",
          heading:"text-blue-900 mb-4",
          subheading:"text-secondary"      
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
  .sectionOne {
    background-color: #FFFFFF;
  }
</style>
