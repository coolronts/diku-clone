<template>
  <div :class="style.main">
    <div :class="style.Boxes">
      <router-link to="/en/programmes" class="w-full mr-12">
        <Box
          :props = "{
            primary:BoxTopLeft.primary,
            secondary:BoxTopLeft.secondary,
            tertiary:BoxTopLeft.tertiary,
            topBottom:false,
            rightLeft:true,
            contentFor:'home'
          }"
        />
      </router-link>
      <router-link to="/en/events" class="w-full">
        <Box
          :props = "{
            primary:BoxTopRight.primary,
            secondary:BoxTopRight.secondary,
            tertiary:BoxTopRight.tertiary,
            topBottom:false,
            rightLeft:false,
            contentFor:'home'
          }"
        />
      </router-link>
    </div>
    <div :class="[style.Boxes,'mt-6']">
      <router-link to="/en/reports" class="w-full mr-12">
        <Box 
          :props = "{
            primary:BoxBottomLeft.primary,
            secondary:BoxBottomLeft.secondary,
            tertiary:BoxBottomLeft.tertiary,
            topBottom:true,
            rightLeft:true,
            contentFor:'home'
          }"
        />
      </router-link>
      <router-link to="/en/resources-and-tools" class="w-full">
        <Box
          :props = "{
            primary:BoxBottomRight.primary,
            secondary:BoxBottomRight.secondary,
            tertiary:BoxBottomRight.tertiary,
            topBottom:true,
            rightLeft:false,
            contentFor:'home'
          }"
        />
      </router-link>
    </div>
  </div>
</template>

<script>
  import {defineAsyncComponent} from "vue";
  const Box = defineAsyncComponent(() =>
    import ("@/components/Box/Box.vue"));
    
  export default {
    name: "SectionTwo",
    components: {
      Box,
    },
    data(){
      return{
        style:{
          main:"h-screen pt-24 pb-24 px-24 flex flex-col bg-red-50",
          Boxes:"h-1/2 flex",
          bottomBoxes: ""
        },
        BoxTopLeft: {
          primary:'Programme',
          secondary: 'and grants',
          tertiary: 'Apply for funding',
        },
        BoxBottomLeft: {
          primary:'Reports',
          secondary: 'and publication',
          tertiary: '',
        },
        BoxTopRight: {
          primary:'Events',
          secondary: '',
          tertiary: 'Register for conferences, seminars and other events',
        },
        BoxBottomRight: {
          primary:'Resources and',
          secondary: 'tools',
          tertiary: '',
        },
      }
    }
  };
</script>

<style>
.secondaryColor {
  color: #0f5b7d;
}
</style>
