<template>
  <section :class="style.main">
    <HeaderTwo @modal="modal"/>
    <div :class="style.searchContainer">
      <input :class="style.inputBox" placeholder="Search on Diku.no">
      <div div :class="style.text">Search</div>
      <i :class="style.icon"/>
      </div>
    <div :class="style.border"/>
  </section>
</template>

<script>
  import {defineAsyncComponent} from "vue";
  const HeaderTwo = defineAsyncComponent(() =>
    import ("/src/components/HeaderTwo.vue"));
    
  export default {
    name:"ModalSearch",
    components:{HeaderTwo},
    data(){
      return{
        style:{
          main:"h-screen w-screen bg-blue-900",
          searchContainer:"px-28 w-2/3 flex",
          inputBox:"focus:outline-none form-input text-3xl font-semibold text-white placeholder-red-300 bg-blue-900",
          iconContainer:"flex",
          text:"text-2xl mr-2 text-secondary font-bold",
          icon:"fas fa-search text-5xl text-white",
          border:"w-2/5 border-b-4 mx-28"
        }
      }
    },
    methods:{
      modal(x){
        if(x==1) {x=0};
        this.$emit('modal',x);
      }
    },
  }
</script>
