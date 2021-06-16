<template>
  <div :class="style.main">
    <Header :class="style.head" @modal="modal"/>
    <router-link :to="{name:'Programmes'}" >
      <p :class="style.back"><i :class="style.icon"/>Programmes</p>
    </router-link>
    <p :class="style.title"> {{programData.title}} </p>
    <p :class="style.info"> {{programData.info}} </p>
    <p :class="[style.deadline,{slash:over}]"> Application deadline: <span class="text-black"> {{programData.deadline}} within 12:00 PM </span> </p>
  </div>  
</template>

<script>

  import {defineAsyncComponent} from "vue";
  const Header = defineAsyncComponent(() =>
    import ("/src/components/Header.vue"));
    
  export default {
    name: "SectionOne",
    props: ['title', 'info', 'deadline'],
    components:{Header},
    data(){ return{
        nameOutput:'',
        programData: [],
        over: false,
        date:'',
        style:{
          main:"pt-12 bg-white flex flex-col justify-between",
          back:"hover:text-blue-900 my-12 px-12 text-2xl text-secondary font-bold",
          icon:"mr-4 fas fa-chevron-left",
          head:"px-24",
          title:"px-24 mt-8 font-semibold text-5xl text-blue-900 mb-3",
          info:"px-24 mb-24 text-2xl leading-relaxed font-normal tracking-wider w-2/3",
          deadline:"mb-12 px-24 text-xl text-blue-900 font-semibold"          
        }
    }},
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
      
      console.log(this.programData)
    },
    
    methods:{
      modal(x){this.$emit('modal',x)},
    },
  };
</script>

<style scoped>
  .slash{
    text-decoration: line-through;
  }
</style>
