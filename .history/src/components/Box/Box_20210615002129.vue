<template>
  <div
    @mouseover="isActive = true"
    @mouseleave="isActive = false"
    :class="style.main"
  >
    <div :class="[style.shadow,{'bottom-0':props.topBottom,'top-3':!props.topBottom, 'left-8':props.rightLeft && props.contentFor !='home', 'left-5':props.rightLeft && props.contentFor=='home', 'right-5':!props.rightLeft}]"/>
    <button :class="[{'mt-3':props.topBottom ,'mr-0':props.rightLeft, 'ml-0':!props.rightLeft},style.mainBox]">
        <div v-if="props.contentFor=='home'">       
          <p :class="style.primaryText"> {{props.primary}} </p>
          <p :class="style.secondaryText"> {{props.secondary}} </p>
          <p :class="style.tertiaryText">{{props.tertiary}}
            <i :class="[style.icon,{ move: isActive }]"/>
          </p>
        </div>
        <div v-if="props.contentFor=='events'">        
          <p :class="style.primaryEventsText"> {{props.primary}} </p>
          <p :class="style.secondaryText"> Registration deadline: <span class="font-normal text-blue-900">{{props.secondary}}</span> </p>
          <div class="flex justify-between">
            <div>
              <p class="mt-6 text-lg font-semibold text-blue-900">Seminar</p>
              <p class="text-lg "><i class="fa fa-calendar" aria-hidden="true"></i> Jun 14, 2021 10:00 - Jun 16, 2021 16:00</p>
            </div>
            <p :class="style.previousButton">More about the event</p>
          </div>
        </div>

        <div   v-if="props.contentFor=='resource'">        
          <div class="border-b-2 py-3 border-secondary" v-for="resource in props.resources">
            <p class="text-xl font-semibold text-secondary"> {{resource.primary}} </p>
            <p class="text-lg"> {{resource.secondary}} </p>
          </div>
        </div>
    </button>
  </div>
</template>

<script>
  export default {
    name: "Box",
    props: ['props','primary', 'secondary', 'tertiary', 'rightLeft', 'topBottom','contentFor'],
    data() {
      return {
        contentFor:'',
        isActive: false,
        top:false,
        bottom:false,
        style:{
          main:"relative w-full h-full bg-",
          shadow:"shadow absolute bg-blue-900",
          mainBox:"mainBox relative z-20 text-left text-3xl bg-white ring-2 ring-blue-900 px-8",
          primaryText:"text-blue-900 font-bold mb-1",
          secondaryText:"mt-1 secondaryColor font-bold",
          tertiaryText:"text-xl font-normal mt-4 inline",
          icon:"fas fa-arrow-right text-md",
          primaryEventsText:"text-blue-900 text-4xl font-semibold mb-1 pt-6",
          buttonContainer: "relative flex flex-wrap py-3 w-full",
          previousButton:"py-1 px-2 mt-12 text-lg font-semibold text-secondary ring-2 ring-blue-900 bg-white mr-3 mb-4 hover:bg-secondary hover:text-white"

        }
      };
    },
  };
</script>

<style scoped>
  .mainBox {
    width: 100%;
    height: 100%;
  }
  .shadow {
    width: 98%;
    height: 100%;
  }
  .move {
    transform: translateX(30px);
    transition-duration: 1s;
    transition-timing-function: ease-in-out;
  }
</style>
