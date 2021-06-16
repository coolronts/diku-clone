<template>
  <div :class="style.main">
    <p :class="style.label">Education level</p>
    <div :class="style.buttonContainer">
      <div :class="style.button">Elementary school and kindargarten </div>
      <div :class="style.button">Upper secondary education </div>
      <div :class="style.button">Higher vocational education </div>
      <div :class="style.button">Higher education </div>
      <div :class="style.button">Adult learning </div>
      <div :class="style.button">Voccational education </div>
    </div>
    
    <div :class="style.searchContainer">
      <input v-model="searchData" :class="style.searchInput" placeholder="Search"/>
      <i @click="clear()" :class="[{'fas fa-search':!searchData},{'fa fa-times':searchData},style.searchIcon]"></i>
    </div>
  
      <Box class="mt-12"
        :props = "{
          resources: resources,
          topBottom:false,
          rightLeft:true,
          contentFor: 'resource'
        }"
      /> 
  </div>
</template>

<script>
  import {defineAsyncComponent} from "vue";
  const Box = defineAsyncComponent(() =>
    import ("/src/components/Box/Box.vue"));

  export default {
    name: "SectionTwo",
    components: {Box},
    data(){
      return{
        resources:[
          {
            primary:"Diku's project database",
            secondary: 'Searchable database of all projects granted support by Diku.',
          },
          {
            primary:'EEA and Norway Grants',
            secondary: 'Establish cooperation and network in education with Norwegian partners.',
          },
          {
            primary:'Norwegian Centres for Excellence in Education (SFU)',
            secondary: "Academic communities with the status of 'Centre for Excellence in Education' (SFU) demonstrate excellent quality and innovative practices in education.",
          },
          {
            primary:'Student welfare organisations',
            secondary: 'Here you will find information on student welfare organisations for students in Norway.',
          },
        ],
        searchData: '',
        style:{
          main: "pt-24 pb-24 px-24 flex flex-col bg-red-50",
          label: "mt-4 font-semibold text-xl text-blue-900",
          buttonContainer: "relative flex flex-wrap py-3 w-full",
          button: "py-3 px-2 text-xl text-white bg-secondary mr-3 mb-4 hover:bg-blue-900",
          searchContainer: "relative mt-2 mb-12",
          searchInput: "w-full absolute z-10 px-6 text-xl text-blue-500 placeholder-blue-500 py-3 focus:outline-none",
          searchIcon: "absolute right-10 top-3 z-20 text-blue-900 text-2xl",
          twoButtonsContainer:"flex justify-between",
          previousButton:"py-3 px-2 mt-12 text-xl text-secondary ring-2 ring-blue-900 bg-white mr-3 mb-4 hover:bg-secondary hover:text-white"

        }
      } 
    },
    methods: {
      clear(){
        this.searchData = ''
      },

    }
  };
</script>
