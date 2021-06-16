<template>
  <div :class="[style.main,{'flex-row-reverse':props.picLeftRight=='left'}]">
    <div :class="[style.infoContainer,{'w-2/3':props.pic,'w-full':!props.pic}]">
      <div :class="[style.shadow,{'bg-red-500':props.color=='red','bg-green-300':props.color=='green','bg-blue-500':props.color=='blue'},{'left-0':props.shadowLeftRight=='left','right-0':props.shadowLeftRight=='right'},{'left-0':props.picLeftRight=='right','right-0':props.picLeftRight=='left'}]"/>
      <div :class="[style.textsContainer,{'ml-3':props.shadowLeftRight=='left'||props.picLeftRight=='right','mr-3':props.shadowLeftRight=='right'||props.picLeftRight=='left'}]">
        <p :class="[style.infoType,{'text-red-500':props.color=='red'},{'text-blue-500':props.color=='blue'},{'text-green-300':props.color=='green'}]">{{props.type}} <span :class="style.textDate">5/5/21</span></p>
        <p :class="style.title"> {{props.title}} </p>
        <p :class="style.subtitle"> {{props.subtitle}} </p>
        <p :class="style.info"> {{props.info}}</p>
        <div :class="style.buttonsContainer">
          <div :class="style.reportButton" @mouseover="isReportActive = true" @mouseleave="isReportActive = false">
            <i :class="[style.reportIcon,{ moveReport: isReportActive }]" />
            <span :class="style.reportText">Read Report</span>
          </div>
          <div v-if="props.type=='Report'" @mouseover="isDownloadActive = true" @mouseleave="isDownloadActive = false">
            <i :class="[style.downloadIcon,{ moveDownload: isDownloadActive }]"/>
            <span :class="style.downloadText">Download Report</span>
          </div>
        </div>
      </div>
    </div>
    <img v-if="props.pic==true" :class="[style.image,{'right-3':props.picLeftRight=='right','left-5':props.picLeftRight=='left'}]" :src="props.picName"/>
  </div>
</template>

<script>
  export default {
    name: "BulletinBox",
    props:['props'],
    data() {
      return {
        isDownloadActive: false,
        isReportActive: false,
        red: false,

        style:{
          main:" mt-8 relative flex",
          image:"shadow-lg w-1/3 h-2/3 absolute top-10 z-50",
          infoContainer:"relative flex flex-col",
          shadow:"borders absolute bottom-0 shadow-lg",
          textsContainer:" mains z-20 tracking-tight bg-white pt-6 pl-8 pr-4 mb-3 text-left font-normal",
          infoType:"text-xl font-bold mb-1",
          textDate:"font-normal text-base text-black ml-2",
          title:"text-3xl font-bold mt-1 text-blue-900",
          subtitle:"subheading text-3xl font-bold",
          info:"text-xl mt-6 mb-5 -z-10",
          buttonsContainer:"flex mb-4",
          reportButton:"mr-6",
          reportIcon:"fas fa-arrow-right text-xl mr-4",
          reportText:"text-xl font-semibold subheading",
          downloadIcon:"fa fa-download text-xl mr-2",
          downloadText:"text-xl font-semibold subheading",
        }
      };
    },
  };
</script>

<style>
  .subheading {
    color: #0f5b7d;
  }
  .borders {
    height: 90%;
    width: 90%;
  }|
  .mains {
    height: 94%;
  }
  .moveDownload {
    transform: translateY(10px);
    transition-duration: 1s;
    transition-timing-function: ease-in-out;
  }
  .moveReport {
    transform: translateX(10px);
    transition-duration: 1s;
    transition-timing-function: ease-in-out;
  }
</style>
