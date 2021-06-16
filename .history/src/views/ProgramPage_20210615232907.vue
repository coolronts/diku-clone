<template>
  <div>
    <section v-if="show==0">
      <SectionOne @modal="modal"/>
      <SectionTwo
        :whoCanApply="programData.who_can_apply"
        :whatCanYouApplyFor="programData.whatCanYouApplyFor"
        :howDoYouApply="programData.howDoYouApply"
        :howDoYouReport="programData.howDoYouReport"
        :applicantSeminar="programData.applicantSeminar"
        :rightsOfAppeal="programData.rightsOfAppeal"
        :publicInformation="programData.publicInformation"
      />
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
    import ("/src/components/ProgramPage/SectionOne.vue"));

  const SectionTwo = defineAsyncComponent(() =>
    import ("/src/components/ProgramPage/SectionTwo.vue"));
  
  const ModalSearch = defineAsyncComponent(() =>
    import ("/src/components/ModalSearch.vue"));

  const ModalMenu = defineAsyncComponent(() =>
    import ("/src/components/ModalMenu.vue"));
    
  const Footer = defineAsyncComponent(() =>
    import ("/src/components/Footer.vue"));

  export default {
    name: "ProgramPage",
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
    created() {
      for (var i = 0; i < this.title.length; i++) {
        (this.title[i] == "-" ?
          this.nameOutput += " " : this.nameOutput += this.title[i]
        )
      }
    },
    methods:{
      modal(x){
        this.show = x;
      },
    }
  };
</script>

