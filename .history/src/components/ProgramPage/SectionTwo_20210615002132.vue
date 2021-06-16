<template>
  <div :class="style.sectionTwo">
    <div :class="style.sidebar.main">
      <ul :class="style.sidebar.list">
        <li :class="[style.sidebar.text, {active : activeSection==1}]"><p>Who can apply?</p><i :class="[style.sidebar.icon, {rotate : activeSection==1}]" aria-hidden="true"></i></li>
        <li :class="[style.sidebar.text, {active : activeSection==2}]"><p>What can you apply for?</p><i :class="[style.sidebar.icon, {rotate : activeSection==2}]" class="origin-center transform rotate-45 fa fa-arrow-right ml-4" aria-hidden="true"></i></li>
        <li :class="[style.sidebar.text, {active : activeSection==3}]">How do you apply?<i :class="[style.sidebar.icon, {rotate : activeSection==3}]" aria-hidden="true"></i></li>
        <li :class="[style.sidebar.text, {active : activeSection==4}]">How do you report? <i :class="[style.sidebar.icon, {rotate : activeSection==4}]" aria-hidden="true"></i></li>
        <li :class="[style.sidebar.text, {active : activeSection==5}]">Applicant Seminar 2019 <i :class="[style.sidebar.icon, {rotate : activeSection==5}]" aria-hidden="true"></i></li>
        <li :class="[style.sidebar.text, {active : activeSection==6}]">Legal Information <i :class="[style.sidebar.icon, {rotate : activeSection==6}]" aria-hidden="true"></i></li>
      </ul>
    </div>

    <div :class="style.mainContent.body">
      <div :class="style.mainContent.section.body">
        <p ref="whoCanApply" :class="style.mainContent.section.text">Who can apply?</p> 
        <p :class="style.mainContent.section.content"> {{whoCanApply}} </p>
      </div>

      <div :class="style.mainContent.section.body">
        <p ref="whatCanYouApplyFor" :class="style.mainContent.section.text">What can you apply for?</p>
        <p :class="style.mainContent.section.content"> {{whatCanYouApplyFor}} </p>
      </div>

      <div :class="style.mainContent.section.body">
        <p ref="howDoYouApply" :class="style.mainContent.section.text">How do you apply?</p>
        <p :class="style.mainContent.section.content" v-html="howDoYouApply">  </p>
      </div>

      <div :class="style.mainContent.section.body">
        <p ref="howDoYouReport" :class="style.mainContent.section.text">How do you report?</p>
        <p :class="style.mainContent.section.content" v-html="howDoYouReport"> </p>
      </div>

      <div :class="style.mainContent.section.body">
        <p ref="applicantSeminar" :class="style.mainContent.section.text">Applicant Seminar 2019</p>
        <p :class="style.mainContent.section.content" v-html="applicantSeminar"></p>
      </div>

    <div :class="style.mainContent.section.body">
        <p ref="legalInformation" :class="style.mainContent.section.text">Legal Information</p>
        <div :class="style.legalInformation.box.main">
          <div :class="style.legalInformation.box.shadow"/>
          <div :class="style.legalInformation.box.content">
            <div :class="style.legalInformation.box.body">
              <div @click="accordion(1)" :class="[style.legalInformation.box.accordion,{activeAccordion: accordionState==1}]">
                <p>Right of Appeal</p>
                <i :class="style.legalInformation.box.icon"></i>
              </div>
              <div v-if="accordionState==1" :class="style.legalInformation.box.expandContent">{{rightsOfAppeal}}</div>

              <div @click="accordion(2)" :class="[style.legalInformation.box.accordionMiddle,{activeAccordion: accordionState==2}]">
                <p>Public information and rights of access</p>
                <i :class="style.legalInformation.box.icon"></i>
              </div>
              <div v-if="accordionState==2" :class="style.legalInformation.box.expandContent">{{rightsOfAppeal}}</div>

              <div @click="accordion(3)" :class="[style.legalInformation.box.accordionEnd,{activeAccordion: accordionState==3}]">
                <p>Conflicts of interest</p>
                <i :class="style.legalInformation.box.icon"></i>
              </div>
              <div v-if="accordionState==3" :class="style.legalInformation.box.expandContent">{{rightsOfAppeal}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>  
</template>

<script>
  const options = {
    root:document.querySelector('#divAsRoot'), 
    threshold:0, 
  };

  export default {
    name: "SectionTwo",
    props:[
            'whoCanApply', 'whatCanYouApplyFor', 'howDoYouApply', 
            'howDoYouReport', 'applicantSeminar', 'rightsOfAppeal'
          ],
    data(){ return{
        isOver: false,
        deadline: this.deadline,
        observer: null,
        activeSection:1,
        accordionState:0,
        style:{
          sectionTwo:"sectionTwo px-24 pt-12 bg-gray-100 h-full flex pb-24",
          mainContent:{
            body:"w-3/5 mt-5 leading-normal whitespace-pre-line",
            section:{
              body: "pb-12",
              text: "text-4xl text-blue-900 font-semibold mb-6",
              content: "text-xl font-regular"  
            },
          },
          sidebar:{ 
            main:"w-2/5 pr-12",
            list: "sticky top-0 flex flex-col text-xl font-light",
            text: "w-4/5 text-purple-400 border-purple-400 border-b-2 py-2 mb-4 flex flex-wrap justify-between",
            icon: "origin-center transform rotate-45 fa fa-arrow-right",
          },
          legalInformation:{
            box:{
              main:"relative mt-24 ml-2 pb-2 pr-1",
              shadow: "blueShadow bg-blue-900",
              content:"mainBox shadow-lg",
              body: "py-6 text-xl relative bg-white ring-4 ring-blue-900",
              accordion: "flex justify-between items-center mx-6 mt-6 py-4 px-3 border-blue-900 border-t-2 border-b-2",
              accordionMiddle: "flex justify-between items-center mx-6 py-4 px-3 border-blue-900 border-b-2",
              accordionEnd: "flex justify-between items-center mx-6 py-4 px-3 border-blue-900",
              icon: "text-2xl fas fa-chevron-down",
              expandContent: "bg-blue-200 px-10 py-4",
            }
          }
        }        
    }},
    mounted(){
      this.observer = new IntersectionObserver(this.callback, options);
      this.observer.observe(this.$refs.whoCanApply);
      this.observer.observe(this.$refs.whatCanYouApplyFor);
      this.observer.observe(this.$refs.howDoYouApply);
      this.observer.observe(this.$refs.howDoYouReport);
      this.observer.observe(this.$refs.applicantSeminar);
      this.observer.observe(this.$refs.legalInformation);
    },
    methods:{
      accordion(x){
        console.log(x)
        if( x==this.accordionState ){this.accordionState=0}
        else if( x==1){this.accordionState=1}
        else if( x==2){this.accordionState=2}
        else if( x==3){this.accordionState=3}
      },
      
      callback(entries, observer) {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if(entry.target.innerText== "Who can apply?"){
              this.activeSection=1
            }else if(entry.target.innerText== "What can you apply for?"){
              this.activeSection=2
            }else if(entry.target.innerText== "How do you apply?"){
              this.activeSection=3
            }else if(entry.target.innerText== "How do you report?"){
              this.activeSection=4
            }else if(entry.target.innerText== "Applicant Seminar 2019"){
              this.activeSection=5
            }else if(entry.target.innerText== "Legal Information"){
              this.activeSection=6
            }
          }
        });
      }
    }
  };
</script>

<style scoped>
  .activeAccordion{
    border-bottom: none;
  }
  .sectionTwo{
    position:relative;
    z-index:0;
  }
  .active{
    font-weight: 600;
    color:#23099F;
    border-color: #23099F;
    border-bottom-width: medium;
    width:100%;
    transition: width .3s;
  }
  .mainBox{
    width:99%;
    position: relative;
    z-index:20;
  }
  .blueShadow{
    right:0; 
    bottom:0;
    position:absolute; 
    z-index:1;
  }
  .rotate{
    transform: rotate(0deg);
    margin-right:85px;
    transition: .3s;
  }
</style>
