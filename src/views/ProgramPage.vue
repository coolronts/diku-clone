<template>
  <div>
    <section v-if="show==0">
      <SectionOne @modal="modal"
        :title="programData.title"
        :info="programData.info"
        :deadline="programData.deadline"
        :over="over"
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
        deadline:''
      }
    },
    mounted(){
      fetch('https://api.npoint.io/6e3818d3fae2f180e31e')
      .then(res => res.json())
      .then(data => data.find(element => element.title == this.nameOutput))
      .then(found => {
        this.programData = found
        this.deadline=found.deadline
        this.deadlineOver()
      })
      .catch(err => console.log(err.message))  
    },
    created(){
      for (var i = 0; i < this.$route.params.title.length; i++) {
        (this.$route.params.title[i] == "-" ?
          this.nameOutput += " " : this.nameOutput += this.$route.params.title[i]
        )
      } 
      this.nameOutput +="."
    },
    methods:{
      modal(x){
        this.show = x;
      },
      deadlineOver(){
        var DateTime = luxon.DateTime;
      var year =[]
      var month =[]
      var day =[]
      var daty =[]
      var j =0
      var h = 0
      
      for(var i=0; i<this.deadline.length;i++){
        if(this.deadline[i] != '/'){
          if(j==0){month[h] = this.deadline[i]}
          else if(j==1){day[h] = this.deadline[i]}
          else{year[h] = this.deadline[i]}
          h++
        }else{
          if(month.length == 1 && month.length != 2 ){month.unshift('0')}
          if(day.length < 2 ){day.unshift('0')}
          h=0;j++
        }
        daty = year
        var yrmo = daty.concat('-')
        daty = yrmo.concat(month)
        var yrmodt = daty.concat('-')
        var datey = yrmodt.concat(day)
        var hello =datey.join(datey)
        var d =DateTime.fromISO(datey.join(""))
        var now = DateTime.now().toISODate();
      }
      (datey.join("") > now ? this.over=false : this.over=true)
      }
    }
  };
</script>

