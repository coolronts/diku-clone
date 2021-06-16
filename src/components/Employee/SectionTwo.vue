<template>
   <div :class="style.main">
      <div :class="style.topPart">
         <p :class="style.info">Here you will find an overview of employees at Diku.</p>
         <div :class="style.searchContainer">
            <input @blur="suggest" @keydown="suggest" @click="departmentsSort" v-model="searchData" :class="style.searchInput" placeholder="Search by name, department and work area"/>
            <ul v-if="isSuggest" :class="style.searchSuggestionList" >
               <li :class="style.searchSuggestionElement" @click="suggestSelected" v-for="department in departments" :key="department">{{department}}</li>
            </ul>
            <i @click="clear" :class="[{'fa fa-times':searchData},{'fas fa-search':!searchData} ,style.searchIcon]"></i>
         </div>
      </div>
      <div :class="style.employeeContainer">
         <div :class="style.employeeBox" v-for="user in filteredUsers.slice(0, this.userLimit)" :key="user.id">
            <EmployeeBox 
               @departmentSearch="departmentSearch"
               :picture="user.picture" 
               :firstName="user.first_name" 
               :lastName="user.last_name"
               :department="user.department"
               :position="user.position"
               :phone="user.phone"
               :email="user.email"
            />
         </div>
         <button v-if="isMore" @click="more" :class="style.moreContainer">
            <div :class="style.moreText">View More</div>
            <i :class="style.moreIcon"></i>
         </button>
      </div>
   </div>
</template>

<script>
   import {defineAsyncComponent} from "vue";
   const EmployeeBox = defineAsyncComponent(() =>
      import ("/src/components/Box/EmployeeBox.vue"));

   export default {
      name: "SectionTwo",
      components:{EmployeeBox},
  
      data() {
      return {
            users: [],
            searchData:'',
            keys:'user.id',
            filteredUser:[],
            userLimit:10,
            isSearch: false,
            departments:[],
            isMore:true,
            isSuggest:false,
            style:{
               main:"w-screen h-full bg-red-50 py-8",
               topPart: "pt-8 px-24",
               info: "text-2xl text-blue-900 font-semibold",
               searchContainer: "relative mt-12",
               searchInput: "searchBox absolute px-6 z-20 text-xl m-1 text-blue-500 placeholder-blue-500 py-3 focus:outline-none",
               searchSuggestionList:"absolute top-0 pt-16 z-10 pb-3 bg-white w-full border-2 border-blue-900",
               searchSuggestionElement:"mx-6 border-b-2 border-secondary text-secondary text-lg font-semibold pl-6",
               searchIcon:"top-5 right-10 absolute z-30 fas fa-search text-blue-900 text-2xl",
               employeeContainer:"flex flex-wrap mt-52 px-24",
               employeeBox:"py-4 w-1/2",
               moreContainer:"focus:outline-none w-screen text-center text-xl text-blue-900",
               moreText:"font-semibold",
               moreIcon:"text-2xl animate-bounce fas fa-arrow-down"
            }
         };
      },

      computed: {
         filteredUsers(){
            let resultDepartment;
            if (!this.searchData){
               this.filteredUser = this.users
               this.isSearch = false
               return this.filteredUser
            }
            else if(this.searchData){
               resultDepartment = this.users.filter(user => user.department.match(this.searchData));
               let filterByFirstName = this.users.filter(user => user.first_name.match(this.searchData));
               let merge1 = resultDepartment.concat(filterByFirstName)
               let filterByLastName= this.users.filter(user => user.last_name.match(this.searchData));
               let merge2 = merge1.concat(filterByLastName)
               this.filteredUser = merge2;
               this.isSearch = true;
               return this.filteredUser
            }
         },
      },
   
      mounted() {
         fetch('https://api.npoint.io/d7dc5e6dbaf118fd1699')
         .then(res => res.json())
         .then(data => this.users = data)
         .catch(err => console.log(err.message))
      
      },

      methods: {
         departmentSearch(data){
            this.searchData = data;
            this.keys = "user.department";
         },

         departmentsSort(){
            var departmentsAll=[];
            this.users.forEach(
            element => {
               if (!departmentsAll.includes(element.department)){
                  departmentsAll.push(element.department)
               }
            })
            this.departments = departmentsAll;
            this.isSuggest = true;
         },

         suggestSelected(e){
            this.searchData = e.srcElement.childNodes[0].data;
            this.isSuggest = false;
         },
         
         more(){
            this.userLimit += 10;
            if (this.filteredUser.length - this.userLimit ){
               this.isMore = false
            }
         },

         suggest(e) {
            setTimeout(() => {
               this.isSuggest = false;
            }, 300);
         },

         clear(){
            this.searchData=''
            this.isMore = true;
         },
      },
   };
</script>

<style>
   .searchBox{
      width: 99%;
   }
</style>