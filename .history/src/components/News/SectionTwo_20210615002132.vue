<template>
  <div :class="style.main">
    <div :class="style.searchContainer">
      <input v-model="searchData" :class="style.searchInput" placeholder="Search"/>
      <i @click="clear()" :class="[{'fas fa-search':!searchData},{'fa fa-times':searchData},style.searchIcon]"></i>
    </div>
    <div v-for="article in articles" :key="article.id">
     <BulletinBox :props="{
        color:'red',
        type: 'News',
        shadowLeftRight:article.shadowLeftRight,
        pic: article.pic,
        picName: article.picName,
        picLeftRight:article.picLeftRight,
        title: article.title,
        info: article.info
      }" 
     />
    </div>
  </div>
</template>

<script>
  import {defineAsyncComponent} from "vue";
  const BulletinBox = defineAsyncComponent(() =>
    import ("@/components/BulletinBox/BulletinBox.vue"));
  export default {
    name: "SectionTwo",
    components: {BulletinBox},
    data(){
      return{
        articles:[
          {
           id:1,
           title:"White Paper on student mobility: A summary",
           info:"The overall goal of this White Paper, published October 2020, is to contribute to a cultural change in the higher education sector where international student mobility becomes a natural and integral part of all study programmes. Here you will find a summary of the paper.",
           pic: false,
           picName:'',
           shadowLeftRight:'left',
          },
          {
           id:2,
           title:"Information to project coordinators for projects financed by Diku",
           info:"Diku understands that the corona situation will have a significant impact on the implementation of many of the projects we finance.",
           pic: false,
           picName:'',
           shadowLeftRight:'right',
          },
          {
           id:3,
           title:"Four new Centres for Excellence in Education",
           info:"Four new academic environments have been awarded the status Centre for Excellence in Education (SFU), with host institutions in Bergen, Oslo and Horten. The centres will receive a total of 137 million NOK over five years.",
           pic: true,
           picLeftRight:'right',
           picName:'https://i.ibb.co/P65qkKL/news1.jpg',
          },
          {
           id:4,
           title:"Norwegian and international students need more meeting places",
           info:"International students in Norway find it far easier getting to know other international students than Norwegian students, a new report by Diku shows. It recommends that Norwegian universities do more to endorse exchanges between international and domestic students to advance intercultural learning for their student population as a whole.",
           pic: true,
           picLeftRight:'left',
           picName:'https://i.ibb.co/Vp3C9Qn/news2.jpg',
          },
          {
           id:5,
           title:"These are the SFU finalists",
           info:"21 proposals have become 8 finalists. Find the list of who are still in the running here.",
           pic: true,
           picLeftRight:'right',
           picName:'https://i.ibb.co/YL0j3Y4/news3.jpg',
          },
          {
           id:6,
           title:"22 applicants for Centres for excellence in education (SFU)",
           info:"Diku has received 22 applications from academic communities for status as Centres for Excellence in Education.",
           pic: true,
           picLeftRight:'left',
           picName:'https://i.ibb.co/Np2bfSq/news4.png',
          },
          {
           id:7,
           title:"22 applicants for Centres for excellence in education (SFU)",
           info:"Diku has received 22 applications from academic communities for status as Centres for Excellence in Education.",
           pic: true,
           picLeftRight:'right',
           picName:'https://i.ibb.co/Np2bfSq/news4.png',
          },
        ],
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
