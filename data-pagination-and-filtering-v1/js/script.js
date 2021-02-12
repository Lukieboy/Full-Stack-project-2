/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

let studentList = document.querySelector('.student-list');
const ul = document.querySelector('.link-list');
const header = document.querySelector('.header');
const page = document.querySelector('html');
//=============================================
//Shows the page based on page number and list
//=============================================
function ShowPage(page, list){
   let startIndex = (page * 9) - 9;
   let endIndex = page * 9;
   studentList.innerHTML = "";


   for (let index = 0; index < list.length; index++) {
      if(index >= startIndex && index < endIndex){
         console.log(index);

         studentList.insertAdjacentHTML('beforeend',`<li class="student-item cf">
         <div class="student-details">
           <img class="avatar" src="${list[index].picture.large}" alt="Profile Picture">
           <h3>${list[index].name.first} ${list[index].name.last}</h3>
           <span class="email">${list[index].email}</span>
         </div>
         <div class="joined-details">
           <span class="date">${list[index].registered.date}</span>
         </div>
       </li>`);
      } 
   }
}
//==========================================
//Adds pagination buttons
//==========================================
function addButtons(list){
   let length = list.length;
   ul.innerHTML = "";
   for (let index = 0; index < length/9; index++) {
      ul.insertAdjacentHTML('beforeend', `<li>
      <button type="button" id="${index+1}">${index + 1}</button>
    </li>
   `);
      if(index === 0){
         ul.firstElementChild.firstElementChild.className = "active";
      }
   }


   ul.addEventListener('click', (e)=>{
      if(e.target.tagName == "BUTTON"){
         let button = document.querySelectorAll('.link-list li button');
         for (let i = 0; i < button.length; i++) {
            button[i].className = "";
         }
         e.target.className = "active";
         let pageNumber = e.target.id;
         ShowPage(pageNumber, list);
      }
   });
}

//==========================================
//Calls the showPage and addbuttons function
//==========================================
ShowPage(1, data);
addButtons(data);

/*==========================================
* add search bar to header
==========================================*/
header.innerHTML += `<label for="search" class="student-search">
<input id="search" placeholder="Search by name...">
<button type="button" class="search"><img src="img/icn-search.svg" alt="Search icon"></button>
</label>`;

/**==========================================
 * Variables
 ==========================================*/
let searchButton = document.querySelector('.search');
let searchInput = document.querySelector('#search');
let error = document.querySelector('h4');
let filteredList = [];

/**==========================================
 * FILTER DATA FUNCTION
 ==========================================*/

function filterData(){
   studentList.innerHTML = "";
   filteredList = [];
   for (let index = 0; index < data.length; index++) {
      let value = searchInput.value.toUpperCase() + "";
      if(data[index].name.first.toUpperCase().includes(value) || data[index].name.last.toUpperCase().includes(value)){
         filteredList.push(data[index]);
      }
   }
   if(filteredList.length === 0){
      error.textContent = "Sorry. No results match your search.";
   }else{
      error.textContent = "";
   }
   ShowPage(1, filteredList);
   addButtons(filteredList);
}


/**==========================================
 * SEARCH BUTTON EVENTLISTENEr
 ==========================================*/
searchButton.addEventListener('click', (e)=>{
   filterData();
})





/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

// Array of student objects
