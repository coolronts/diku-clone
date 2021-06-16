<template>
  <section :class="style.main">
    <p :class="style.text">News</p>
    <div :class="style.container">
      <BulletinBox :props="{
        color:'blue',
        picName:'https://i.ibb.co/JHG1c2n/Bulletine1.jpg',
        picLeftRight:'right',
        pic: true,
        type: 'Report',
        title: BulletineBox1.title,
        subtitle: BulletineBox1.subtitle,
        info: BulletineBox1.info
      }" />

      <BulletinBox :props="{
        color:'green',
        type: 'Project Example',
        pic: true,
        picName:'https://i.ibb.co/LJTN7ZC/Bulletin2.png',
        picLeftRight:'left',
        title: BulletineBox2.title,
        subtitle: BulletineBox2.subtitle,
        info: BulletineBox2.info
      }" />

      <BulletinBox :props="{
        color:'red',
        type: 'News',
        shadowLeftRight:'left',
        pic: false,
        title: BulletineBox3.title,
        subtitle: BulletineBox3.subtitle,
        info: BulletineBox3.info
      }" />

      <BulletinBox :props="{
        color:'blue',
        type: 'Report',
        shadowLeftRight:'right',
        pic: false,
        title: BulletineBox4.title,
        subtitle: BulletineBox3.subtitle,
        info: BulletineBox4.info
      }" />      
    </div>
  </section>
</template>

<script>
  import {defineAsyncComponent} from "vue";
  const BulletinBox = defineAsyncComponent(() =>
    import ("/src/components/BulletinBox/BulletinBox.vue"));

  export default {
    name: "SectionThree",
    components: {BulletinBox},
    data(){
      return{
        style:{
          main:"sectionThree w-full h-full pt-16 pr-12 relative",
          text: "text-4xl pl-24 text-blue-900 font-bold",
          container:"pl-16 pb-24 mt-12",
        },
        BulletineBox1:{
          title:"Diku's report series 06/2021",
          subtitle:"Crisis and creativity. Consequences of the Covid-19 pandemic for international educational cooperation",
          info:"Norway and Sri Lanka are working together through the Nor-Lanka-project in order to strengthen the Blue Economy. Diku will fund the project until 2023.",
        },
        BulletineBox2:{
          title:"Norway and Sri Lanka unlocking potential in the Blue Economy",
          subtitle:"",
          info:"International educational cooperation has been hit hard by the corona pandemic.",
        },
        BulletineBox3:{
          title:"White Paper on student mobility: A summary",
          subtitle:"",
          info:"The overall goal of this White Paper, published October 2020, is to contribute to a cultural change in the higher education sector where international student mobility becomes a natural and integral part of all study programmes. Here you will find a summary of the paper.",
        },
        BulletineBox4:{
          title:"White Paper on student mobility: A summary",
          subtitle:"",
          info:"Artistic Research is practice-based, practice-led research in the arts which has developed rapidly in the last twenty years globally and is a key knowledge base for art education in Higher Arts Education Institutions. The Vienna Declaration is intended as a policy document addressing political decision makers, funding bodies, higher education and research institutions as well as other organisations and individuals catering for and undertaking artistic research.",
        }
      }
    }
  };
</script>

<style>
  .sectionThree {
    background-color: #f9f9f8;
  }
</style>
