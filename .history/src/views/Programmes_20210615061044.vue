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
  import SectionOne from "/src/components/Programmes/SectionOne.vue";
  import SectionTwo from "/src/components/Programmes/SectionTwo.vue";

  export default {
    name: "Programmes",
    components: {
      SectionOne,
      SectionTwo,
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
