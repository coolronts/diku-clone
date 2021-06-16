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
    components:{Header},
    data(){ return{
        nameOutput:'',
        programData: [],
        isOver: false,
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
      
      var DateTime = luxon.DateTime;
      var year =[]
      var month =[]
      var day =[]
      var j =0
      var h = 0
      var daty =[]
      for(var i=0; i<this.programData.deadline.length;i++){
        if(this.deadline[i] != '/'){
          if(j==0){
            month[h] = this.deadline[i]
          }
          else if(j==1){
            day[h] = this.deadline[i]
          }
          else{
            year[h] = this.deadline[i]
          }
          h++
        }else{
          if(month.length == 1 && month.length != 2 ){
          month.unshift('0');
          }
          if(day.length < 2 ){
            day.unshift('0');
          }
          
          h=0
          j++
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

      
      for (var i = 0; i < this.$route.params.title.length; i++) {
        (this.$route.params.title[i] == "-" ?
          this.nameOutput += " " : this.nameOutput += this.$route.params.title[i]
        )
      } 
      this.nameOutput +="."
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
