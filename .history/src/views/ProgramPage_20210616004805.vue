<template>
  <div>
    <section v-if="show==0">
      <SectionOne @modal="modal"
        :title="programData.title"
        :info="programData.info"
        :deadline="programData.deadline"
      />
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
        programData: [],
        nameOutput: '',
      }
    },
    mounted(){
      fetch('https://api.npoint.io/6e3818d3fae2f180e31e')
      .then(res => res.json())
      .then(data => data.find(element => element.title == this.nameOutput))
      .then(found => this.programData = found)
      .catch(err => console.log(err.message))
    },
    created: function (){
      for (var i = 0; i < this.$route.params.title.length; i++) {
        (this.$route.params.title[i] == "-" ?
          this.nameOutput += " " : this.nameOutput += this.$route.params.title[i]
        )
      } 
      this.nameOutput +="."
      var DateTime = luxon.DateTime;
      console.log(this.$route.params.over)
    },
    
    methods:{
      modal(x){
        this.show = x;
      },
    }
  };
</script>

