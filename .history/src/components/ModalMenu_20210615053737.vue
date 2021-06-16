<template>
  <section :class="style.main">
    <HeaderTwo @modal="modal"/>
    <div :class="style.lists">
      <div :class="style.firstCol"/>
      <div :class="style.content">
        <div :class="style.border"/>

        <router-link to="/en/programmes">
          <p @click="method(2)" :class="style.mainMenuText">Programmes and grants</p>
        </router-link>

        <router-link to="/en/events">
          <p :class="style.mainMenuText">Events</p>
        </router-link>

        <router-link to="/en/reports">
          <p :class="style.mainMenuText">Reports and publications</p>
        </router-link>

        <router-link to="/en/resources-and-tools">
          <p :class="style.mainMenuText">Resources and tools</p>
        </router-link>

        <div :class="style.border"/>
        <div :class="style.secondaryMenu">
          <router-link to="/en/about-diku/employees">
            <p :class="style.secondaryaryMenuText">Employees</p>
          </router-link>
          <p :class="style.secondaryaryMenuText">Contact</p>
          <router-link to="/en/news">
            <p :class="style.secondaryaryMenuText">News</p>
          </router-link>
          <p :class="[style.secondaryaryMenuText,'text-white']">Norsk</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import {defineAsyncComponent} from "vue";
  const HeaderTwo = defineAsyncComponent(() =>
    import ("/src/components/HeaderTwo.vue"));
  
  export default {
    name:"ModalMenu",
    components:{HeaderTwo},
    data(){
      return{
        style:{
          main:"h-screen w-screen bg-blue-900",
          header:"flex justify-between px-24 py-12",
          iconsContainer:"flex items-end",
          iconContainer:"mr-8 focus:outline-none hover:text-white text-secondary",
          icon:"text-5xl",
          text:"text-xl font-bold",
          lists:"flex",
          firstCol:"w-1/3",
          content:"w-1/3 flex flex-col text-2xl font-semibold leading-relaxed text-white",
          border:"mb-4 border-b-4 border-blue-500",
          mainMenuText:"hover:text-blue-500",
          secondaryMenu:"text-xl mt-3 text-blue-500",
          secondaryaryMenuText:"hover:text-white"
        }
      }
    },
    methods:{
      modal(x){
        x==2 ? x=0 : x=1;
        this.$emit('modal',x);
      }
    },
  }
</script>