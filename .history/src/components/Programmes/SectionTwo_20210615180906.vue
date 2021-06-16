<template>
  ss
</template>

<script>
  var DateTime = luxon.DateTime;
  var now = DateTime.now();

  import {defineAsyncComponent} from "vue";
  const List = defineAsyncComponent(() =>
    import ("/src/components/Programmes/List.vue"));

  export default {
    name: "SectionTwo",
    components: {List},
    data(){
      return{
        searchData: '',
        sortBy:'Application deadline',
        isSort: false,
        sortSelect: 1,
        programmesData:[],
        style:{
          main: "relative z-10 pt-24 pb-24 px-24 flex flex-col bg-red-50",
          info: " w-2/3 font-bold text-2xl text-blue-900 ",
          label: "mt-4 font-semibold text-xl text-blue-900",
          buttonContainer: "relative flex flex-wrap py-3 w-3/4",
          button: "py-3 px-2 text-xl text-white bg-secondary mr-3 mb-4 hover:bg-blue-900",
          sortByButtonContainer: "relative z-30 flex flex-col w-64 py-3",
          sortByButton: "w-full px-2 py-3 bg-secondary text-xl text-white hover:bg-blue-900",
          sortIcon: "text-xl ml-2 fas fa-arrow-down",
          sortOptionContainer: "absolute top-16 z-90 w-full bg-secondary text-xl text-white",
          sortOption: "py-3 px-2 hover:bg-blue-900",
          searchContainer: "relative mt-20",
          searchInput: "w-full absolute z-10 px-6 text-xl text-blue-500 placeholder-blue-500 py-3 focus:outline-none",
          searchIcon: "absolute right-10 top-3 z-50 text-blue-900 text-2xl",
          listBox: "relative mt-24",
          listContainer: "relative z-30 mb-2 mr-2 shadow-lg",
          blueShadow: "blueShadow h-3/4 absolute z-0 right-0 bottom-0 bg-blue-900",
        }
      } 
    },
    mounted(){
      fetch('https://api.npoint.io/6e3818d3fae2f180e31e')
      .then(res => res.json())
      .then(data => {this.programmesData = data})
      .catch(err => console.log(err.message))
    },

    methods: {
      clear(){
        this.searchData = ''
      },

      sortA(type){
        if(type == '1'){
          this.sortBy ='Application deadline'
          this.sortSelect = 1
          this.programmesData.sort(function compare(a, b) {
            var dateA = new Date(a.deadline);
            var dateB = new Date(b.deadline);
            return dateA - dateB;
          });
        }else if(type == '2'){
          this.sortBy ='Programe Name'
          this.sortSelect = 2
        }else{
          this.sortBy ='Action Name'
          this.sortSelect = 3
        }
        this.isSort = false
      }
    }
  };
</script>
<style scoped>
  .blueShadow{
    width:95%;
    height: 94%;
  }
  .orangeSort{
    background-color:pink;
  }
</style>