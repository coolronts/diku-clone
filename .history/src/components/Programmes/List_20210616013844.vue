<template>
  <router-link :to="{name:'ProgramPage', params:{title: nameOutput, id:id, over:over}}" >
    <div @mouseover="isMove=true" @mouseleave="isMove=false" :class="style.main">
      <div :class="style.primaryTexts">
        <p :class="style.title"> {{title}} </p>
        <p :class="style.subtitle"> {{subtitle}} </p>
      </div>
      <div :class="style.secondaryInfo">
        <p :class="[style.deadline,{slash:over}]" > Application deadline: <span class="text-black"> {{deadline}} </span></p> 
      </div>
      <i :class="[style.icon,{move:isMove}]" aria-hidden="true"></i>
    </div>
  </router-link> 
</template>

<script>

  export default {
    name: "List",
    props:['title', 'subtitle', 'deadline', 'id'],
    data(){
      return{
        isMove:false,
        
        nameOutput:'',
        style: {
          main: "w-full border-b-2 border-secondary z-80 px-6 py-2 flex items-center justify-between bg-white",
          primaryTexts: "w-2/3",
          title:"text-secondary text-lg font-semibold",
          subtitle:"text-medium",
          secondaryInfo:"flex",
          deadline:"font-semibold text-blue-900 mr-3",
          icon:"w-auto text-3xl text-secondary text-right fa fa-arrow-right"
        }
      }
    },
    
    created() {
      this.deadlineOver()

      for (var i = 0; i < this.title.length-1; i++) {
        (this.title[i] == " " ?
          this.nameOutput += "-" : this.nameOutput += this.title[i]
        )
      }    
    },
    methods: {
      deadlineOver(){
        var DateTime = luxon.DateTime;
        var year =[]
        var month =[]
        var day =[]
        var tempDate =[]
        var date =[]
        var now = DateTime.now().toISODate();
        var j =0
        var h = 0
        for(let i of this.deadline){
          if(this.deadline[i] != '/'){
            j==0 ? month[h] = this.deadline[i]
            : j==1 ? day[h] = this.deadline[i]
            :  year[h] = this.deadline[i]
            h++
          }else{
            (month.length == 1 && month.length != 2 ) && month.unshift('0')
            day.length < 2 && day.unshift('0')
            h=0; j++
          }
          date = year
          tempDate = date.concat('-')
          date = tempDate.concat(month)
          tempDate = date.concat('-')
          date = tempDate.concat(day)
          tempDate =date.join(date)
        }
        date.join("") > now ? this.over=true : this.over=false
      }
    },
  };
</script>

<style>
 .move{
  transform: translateX(10px);
 }
 .slash{
  text-decoration: line-through;
 }
</style>
