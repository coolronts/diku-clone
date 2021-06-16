<template>
   <div :class="style.main">
      <img src="https://i.ibb.co/HTKbcXQ/negative-Logo.png"/>
      <div :class="style.address">
         <p> P.O.Box 1093, 5809 Bergen, Norway</p> 
         <p>Phone: +47 55 30 38 00</p> 
         <p> Email: post@diku.no</p>
      </div>

      <div :class="style.bottomTexts">
         <p :class="style.privayPolicy"> Privacy policy</p>
         <p :class="style.language"> Norsk</p>
      </div>

      <div :class="style.logoContainer">
         <img :class="style.logo" src="https://i.ibb.co/bQB9Dk6/facebook-logo.png"/>
         <img :class="style.logo" src="https://i.ibb.co/Q8PJQWv/linkedin.png"/>
         <img :class="style.logo" src="https://i.ibb.co/R0M6txC/twitter.png"/>
         <img :class="style.logo" src="https://i.ibb.co/fQMqp70/spotify-logo.png"/>
      </div>
   </div>
</template>

<script>
   export default {
      name:"Footer",
      data(){
         return{
            style: {
               main:"bg-indigo-900 pt-24 px-24 pb-12",
               address:"text-white mt-24",
               bottomTexts:"mt-12 text-white flex justify-between",
               privacyPolicy:"border-b-4 border-blue-500",
               language:"border-b-2",
               logoContainer:"flex justify-end space-x-2 mt-2 mb-8",
               logo:"w-8 text-blue-900"
            },
         }
      }
   };
</script>
