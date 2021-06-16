<template>
  <router-link :to="{name:'ProgramPage', params:{title: nameOutput, id:id}}" >
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
        over:false,
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
    
    created: function () {
      var DateTime = luxon.DateTime;
      var now = DateTime.now().toISODate();
      var d =DateTime.fromISO('2017-04-01')
      var a= '2020-12-15'
      var year =[]
      var month =[]
      var day =[]
      var j =0
      var h = 0
      var daty =[]
      for(var i=0; i<this.deadline.length;i++){
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
        
      
      }
      console.log(this.deadline, month, month.length, day, year,yrmodt,datey.join())
    
    
      for (var i = 0; i < this.title.length; i++) {
        (this.title[i] == " " ?
          this.nameOutput += "-" : this.nameOutput += this.title[i]
        )
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
