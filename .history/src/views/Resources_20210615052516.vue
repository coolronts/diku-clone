<template>
  <div>
    <section v-if="show==0">
      <SectionOne @modal="modal"/>
      <SectionTwo/>
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
    import ("/src/components/Resources/SectionOne.vue"));

  const SectionTwo = defineAsyncComponent(() =>
    import ("/src/components/Resources/SectionTwo.vue"));
  
  const ModalSearch = defineAsyncComponent(() =>
    import ("/src/components/ModalSearch.vue"));

  const ModalMenu = defineAsyncComponent(() =>
    import ("/src/components/ModalMenu.vue"));
    
  const Footer = defineAsyncComponent(() =>
    import ("/src/components/Footer.vue"));
  
  export default {
    name: "Resources",
    components: {
      SectionOne,
      SectionTwo,
      Footer,
      ModalSearch,
      ModalMenu,
    },
    
    data(){
      return{
        show: 0,
      }
    },
    
    methods:{
      modal(x){
        this.show = x;
      },
    }
  };
</script>

