<template>
  <div :class="style.main">
    <Header @modal="modal"/>
    <div :class="style.info">
      <div :class="style.buttons">
        <router-link to="/en/about-diku" type="button" :class="style.button1" aria-expanded="false">
          About Diku
        </router-link>

        <router-link to="/en/about-diku/employees" type="button2" :class="style.button2" aria-expanded="false">
          Employees
        </router-link>
      </div>
      <div :class="style.image"><img src="https://i.ibb.co/W58Q85N/section1.png" :class="style.image"/></div>
    </div>
  </div>
</template>

<script>
  import {defineAsyncComponent} from "vue";
  const Header = defineAsyncComponent(() =>
    import ("/src/components/Header.vue"));
  
  export default {
    name: "SectionOne",
    components:{Header},
    data() {
    return {
    canvasImage: "section1.png",
    style:{
      main:"h-screen flex flex-col justify-between pt-12 px-24 homeSectionOne",
      info:"flex justify-between items-center h-screen",
      image: "h-full"
      buttons:"pb-24 ml-1",
      button1:"bg-blue-900 px-6 py-3 inline-flex items-center justify-center text-xl font-semibold ring-2 ring-blue-900 text-white hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500",
      button2:"bg-white mx-3 px-6 py-3 inline-flex items-center justify-center text-xl font-semibold text-indigo-900 ring-2 ring-blue-900 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500",
    }
   };
  },
  methods:{
    modal(x){this.$emit('modal',x)},
  },
};
</script>

<style>
  .homeSectionOne {
    background-color: #e8eae9;
  }
</style>
