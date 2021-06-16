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
    import ("@/components/Events/SectionOne.vue"));

  const SectionTwo = defineAsyncComponent(() =>
    import ("@/components/Events/SectionTwo.vue"));
  
  const ModalSearch = defineAsyncComponent(() =>
    import ("@/components/ModalSearch.vue"));

  const ModalMenu = defineAsyncComponent(() =>
    import ("@/components/ModalMenu.vue"));
    
  const Footer = defineAsyncComponent(() =>
    import ("@/components/Footer.vue"));
  

  export default {
    name: "Events",
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
        title: this.$route.params.title,
        programData: [],
        nameOutput: '',
      }
    },
    
    methods:{
      modal(x){
        this.show = x;
      },
    }
  };
</script>

