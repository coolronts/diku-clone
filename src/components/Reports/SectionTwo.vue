<template>
  <div :class="style.main">
   <div :class="style.inputContainer">
    <div :class="style.sortByButtonContainer">
      <p @click="isSortYear=true" :class="style.sortByButton">{{sortByYear}}<i :class="style.sortIcon"/></p>
      <div v-if="isSortYear" :class="style.sortOptionContainer">
        <div :class="style.list" v-for="year of years" :key="year">
         <p @click="sortYear(year)" :class="[style.sortOption,{orangeSort: sortSelect==year}]">{{year}}</p>
        </div>
      </div>
    </div>

    <div :class="style.sortByButtonContainer">
      <p @click="isSortPublication=true" :class="style.sortByButton">{{sortByPublication}}<i :class="style.sortIcon"/></p>
      <div v-if="isSortPublication" :class="style.sortOptionContainer">
        <div :class="style.list" v-for="publication of publications" :key="publication">
         <p @click="sortPublication(publication)" :class="[style.sortOption,{orangeSort: sortSelect==publication}]">{{publication}}</p>
        </div>
      </div>
    </div>
    
    <div :class="style.searchContainer">
      <input v-model="searchData" :class="style.searchInput" placeholder="Search"/>
      <i @click="clear()" :class="[{'fas fa-search':!searchData},{'fa fa-times':searchData},style.searchIcon]"></i>
    </div>

    
  </div>
    <BulletinBox :props="{
        color:'blue',
        picName:'https://i.ibb.co/JHG1c2n/Bulletine1.jpg',
        picLeftRight:'right',
        pic: true,
        type: 'Report',
        title: BulletineBox1.title,
        subtitle: BulletineBox1.subtitle,
        info: BulletineBox1.info
      }" 
    />
    <BulletinBox :props="{
        color:'blue',
        picLeftRight:'right',
        pic: false,
        type: 'Report',
        title: BulletineBox2.title,
        subtitle: BulletineBox2.subtitle,
        info: BulletineBox2.info
      }" 
    />
    <BulletinBox :props="{
        color:'blue',
        picName:'https://i.ibb.co/4mTrk1N/International-Students-in-Norway.jpg',      
        picLeftRight:'right',
        pic: true,
        type: 'Report',
        title: BulletineBox3.title,
        subtitle: BulletineBox3.subtitle,
        info: BulletineBox3.info
      }" 
    />
    <BulletinBox :props="{
        color:'blue',
        picName:'Bulletine1.jpg',
        picLeftRight:'right',
        pic: false,
        type: 'Report',
        title: BulletineBox4.title,
        subtitle: BulletineBox4.subtitle,
        info: BulletineBox4.info
      }" 
    />
  </div>
</template>

<script>
  import {defineAsyncComponent} from "vue";
  const BulletinBox = defineAsyncComponent(() =>
    import ("/src/components/BulletinBox/BulletinBox.vue"));
  export default {
    name: "SectionTwo",
    components: {
    BulletinBox,
  },
    data(){
      return{
        searchData: '',
        sortByYear:'Year',
        sortByPublication:'Publication',
        isSortYear: false,
        isSortPublication: false,
        sortSelect: 1,
        years:['All','2021','2020','2019','2018','2017','2016','2015','2014','2013','2012','2011','2010','2009','2008','2007'],
        publications:['All','Report','Worknote','Publication','Annual Report'],
        style:{
          main: "relative z-10 pt-12 pb-24 px-12 flex flex-col bg-red-50",
          inputContainer: "flex",
          sortByButtonContainer: "flex flex-col py-3 mr-6",
          sortByButton: "flex justify-between w-52 px-2 py-3 bg-secondary text-xl text-white hover:bg-blue-900",
          sortIcon: "text-xl ml-2 fas fa-arrow-down",
          sortOptionContainer: "h-64 overflow-y-scroll absolute top-28 z-90 w-52 bg-secondary text-xl text-white",
          sortOption: "py-3 px-2 hover:bg-blue-900",
          searchContainer: "relative mt-3 flex-grow",
          searchInput: "w-full px-6 text-xl text-blue-500 placeholder-blue-500 py-3 focus:outline-none",
          searchIcon: "absolute right-10 top-3 z-50 text-blue-900 text-2xl",
        },
        BulletineBox1:{
          title:"Diku's report series 06/2021",
          subtitle:"Crisis and creativity. Consequences of the Covid-19 pandemic for international educational cooperation",
          info:"Norway and Sri Lanka are working together through the Nor-Lanka-project in order to strengthen the Blue Economy. Diku will fund the project until 2023.",
        },
        BulletineBox2:{
          title:"The Vienna Declaration on Artistic Research",
          info:"Artistic Research is practice-based, practice-led research in the arts which has developed rapidly in the last twenty years globally and is a key knowledge base for art education in Higher Arts Education Institutions. The Vienna Declaration is intended as a policy document addressing political decision makers, funding bodies, higher education and research institutions as well as other organisations and individuals catering for and undertaking artistic research.",
        },
        BulletineBox3:{
          title:"International Students in Norway",
          subtitle:"Contributors to Quality in Higher Education",
          info:"The survey has gathered information among international students in Norway. The report presents their motivations for, experiences with and assessments of their studies in Norway.",
        },
        BulletineBox4:{
          title:"UTFORSK Partnership Programme 2013–2016:",
          subtitle:"Analysis of project results",
          info:"This report reviews the pilot period of the UTFORSK Partnership Programme that ran from 2013 to 2016. UTFORSK (2013-2016) targeted research collaborations funded by the Research Council of Norway in Brazil, Russia, India, China, South Africa and Japan. The aim of the programme was to use research as a basis for educational cooperation."
        }
      } 
    },

    methods: {
      clear(){
        this.searchData = ''
      },
      sortYear(e){
       this.sortByYear = e
       this.isSortYear = false
      },
      sortPublication(e){
       this.sortByPublication = e
       this.isSortPublication = false
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