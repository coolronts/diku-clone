<template>
  <div :class="style.main">
    <div :class="[{expandShadowLeft: isExpandLeft}, {expandShadowRight: isExpandRight}, style.shadow] "/>
    <div :class="[{expandMainLeft: isExpandLeft}, {expandMainRight: isExpandRight}, style.mainBoxContainer]">
      <img :class="style.porPic" :src= picture />
      <div :class="style.info">
        <button @click="expand" :class="style.name">{{firstName}} {{lastName}}</button>
        <button @click="departmentSearch" :value="department" :class="style.department">{{department}}</button>
        <p :class="style.position">{{position}}</p>
        <div v-if="isExpand">
          <p :class="style.phone"> {{phone}} </p>
          <p :class="style.email"> {{email}} </p>
        </div>
        <div @mouseover="isActive = true" @mouseleave="isActive = false" @click ="expand" v-if="!isExpand">
          <p :class="style.moreInfo" >More information<i class="[{move: isActive},style.icon]"></i></p> 
        </div>
      </div>
      <i @click="shrink" v-if="isExpand" :class="style.closeIcon" aria-hidden="true"></i>
    </div> 
  </div>
</template>

<script>
  export default{
    name: "EmployeeBox",
    props: ['picture', 'firstName', 'lastName', 'department', 'position', 'phone', 'email'],
    data() {
      return {
        isActive: false,
        isExpand: false,
        isExpandLeft:false,
        isExpandRight:false,
        dataSearch:"",
        style: {
          section:"flex justify-between",
          main:"relative h-48 mx-2",
          shadow: "shadows absolute right-0 bottom-0 bg-blue-900",
          mainBoxContainer: "flex focus:outline-none justify-start ml-1 absolute main bg-white ring-4 ring-blue-900 p-2",
          proPic: "w-48",
          info:"h-full",
          name:"focus:outline-none mt-3 block text-2xl font-bold text-blue-900",
          department:"focus:outline-none mt-1 text-xl underline font-normal text-blue-900",
          position:"text-lg font-bold text-blue-900 mb-3",
          phone:"text-secondary font-medium text-lg",
          email:"underline text-secondary font-medium text-lg",
          moreInfo: "focus:outline-none text-lg inline underline text-secondary font-bold",
          icon: "fas fa-arrow-right text-md",
          closeIcon: "absolute right-0 mr-12 fa fa-times text-5xl text-blue-900"
        }
      };
    },

    methods: {
    expand(e){
      (e.clientX > (screen.availWidth/2) ? 
        this.isExpandRight = true 
        :this.isExpandLeft = true 
      );
      this.isExpand = true;
    },

    shrink(e){
      this.isExpand = false;   
      this.isExpandRight=false;
      this.isExpandLeft = false;
    },

    departmentSearch(e){
      this.dataSearch = e.target.value;
      this.$emit('departmentSearch',e.target.value)
    }
  },
}
</script>

<style>
  .main {
    width: 97%;
    height: 95%;
  }
  .shadows {
    width: 90%;
    height: 85%;
  }
  .move {
    transform: translateX(10px);
    transition-duration: 1s;
    transition-timing-function: ease-in-out;
  }
  .expandShadowLeft{
    width: 81vw;
    z-index: 10;
    transition: width 1s;
    left:0;
  }
  .expandMainLeft{
    width: 88vw;
    z-index: 10;
    transition: width 1s;
    left:0;
    color:red;
  }
  .expandShadowRight{
    width: 81vw;
    z-index: 10;
    transition: width 1s;
    right:0;
  }
  .expandMainRight{
    width: 83vw;
    z-index: 10;
    transition: width 1s;
    right:0;
  }
</style>
