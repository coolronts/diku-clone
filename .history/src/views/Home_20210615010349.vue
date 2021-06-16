<template>
  <div>
    <section v-if="show==0">
      <SectionOne @modal="modal"/>
      <SectionTwo></SectionTwo>
      <SectionThree/>
      <Footer/>
    </section>
    <ModalSearch @modal="modal" v-if="show==1"/>
    <ModalMenu @modal="modal" v-if="show==2"/>
  </div>
</template>

<script>
// @ is an alias to /src
  import {defineAsyncComponent} from "vue";
  
  const SectionOne = defineAsyncComponent(() =>
    import ("@/components/Home/SectionOne.vue"));

  const SectionTwo = defineAsyncComponent(() =>
    import ("@/components/Home/SectionTwo.vue"));

  const SectionThree = defineAsyncComponent(() =>
    import ("@/components/Home/SectionThree.vue"));
  
  const ModalSearch = defineAsyncComponent(() =>
    import ("@/components/ModalSearch.vue"));

  const ModalMenu = defineAsyncComponent(() =>
    import ("@/components/ModalMenu.vue"));
    
  const Footer = defineAsyncComponent(() =>
    import ("@/components/Footer.vue"));

    

  export default {
    name: "Home",
    components: {
      SectionOne,
      SectionTwo,
      SectionThree,
      Footer,
      ModalSearch,
      ModalMenu,
    },    
    data(){
      return{
        show:0,
      }
    },
    methods:{
      modal(x){
        this.show = x;
      },
    }
  };
</script>
