<template>
  <div :class="style.main">
    <Header @modal="modal" />
    <p :class="style.info"> Employees </p>
  </div>
</template>

<script>
  import {defineAsyncComponent} from "vue";
  const Header = defineAsyncComponent(() =>
    import ("@/components/Header.vue"));
    
  export default {
    name: "SectionOne",
    components:{Header},
    data(){
      return{
        style:{
          main:"pt-12 px-24",
          info:"text-5xl my-12 font-semibold text-blue-900"
        },
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
  .homeSectionOne {
    background-color: #e8eae9;
  }
</style>
