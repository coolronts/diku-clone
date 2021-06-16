<template>
 <div :class="style.main">
  <div :class="style.infoContainer">
   <p :class="style.paragh">Diku – the Norwegian Agency for International Cooperation and Quality Enhancement in Higher Education – aims to strengthen the quality of Norwegian education.</p>
   <p :class="style.paragh">We promote development and innovation in education, encourage international cooperation and digital learning methods.</p>
   <p :class="style.paragh">Diku is an agency under the Norwegian Ministry of Education and Research. In addition, Diku administers programmes for the Norwegian Ministry of Foreign Affairs, the European Commission, and the Nordic Council of Ministers. </p>
   <p :class="style.paragh">We manage a number of national and international incentive schemes to promote quality in universities, colleges, and vocational schools. We also aim to strengthen the quality and relevance in primary and secondary education and training by means of international programmes and schemes. </p>
   <p :class="style.paragh">Diku’s headquarters is in Bergen, with offices in Tromsø and Brussels. We have a total of about 130 employees. </p>
  </div>

  <div :class="style.topBoxes">
    <Box :class="[style.box,'mr-8']"
      :props = "{
        primary: BoxTopLeft.primary,
        secondary: BoxTopLeft.secondary,
        tertiary: BoxTopLeft.tertiary,
        topBottom: false,
        rightLeft: true,
        contentFor:'home'
      }"
    />
    <router-link to="/en/about-diku/employees" class="w-full">
      <Box :class="style.box"
        :props = "{
          primary: BoxTopRight.primary,
          secondary: BoxTopRight.secondary,
          tertiary: BoxTopRight.tertiary,
          topBottom: false,
          rightLeft: false,
          contentFor:'home'
        }"
      />
    </router-link>
  </div>
  <div :class="style.bottomBoxes">
    <Box :class="[style.box,'mr-4']"
      :props = "{
        primary: BoxBottomLeft.primary,
        secondary: BoxBottomLeft.secondary,
        tertiary: BoxBottomLeft.tertiary,
        topBottom: true,
        rightLeft: true,
        contentFor:'home'
      }"
    />
  </div>
 </div>
</template>

<script>
  import {defineAsyncComponent} from "vue";
  const Box = defineAsyncComponent(() =>
    import ("@/components/Box/Box.vue"));

  export default {
    name:"SectionTwo",
    components: {Box},
    data(){
      return{
        style:{
          main:"min-h-full bg-red-50 pt-12 px-24 pb-32",
          infoContainer:"w-1/2 mb-24 text-blue-900 text-xl leading-relaxed",
          paragh:"my-4",
          topBoxes:"h-48 flex mb-6",
          bottomBoxes:"w-1/2 h-48 flex mt-3",
          box:"w-1/2",

        },
        BoxTopLeft: {
          primary:'Organisation',
          secondary: '',
          tertiary: 'Contact details, organisational chart, media contacts, logo, legal information',
        },
        BoxTopRight: {
          primary:'Employees',
          secondary: '',
          tertiary: 'Contact details for our employees',
        },
        BoxBottomLeft: {
          primary:'Policy documents',
          secondary: '',
          tertiary: 'Our strategy 2020–2024:"Better Education for a Sustainable Future"',
        },
      }
    }
  };
</script>
