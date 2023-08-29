
                    //  step -- 01 load data using fetch

const loadPhone = async (searchText) => {
  const res = await fetch (`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
const data = await res.json ();
const phones = data.data ;
// console.log (phones)
displayPhone (phones);

}

const displayPhone = phones => {
  console.log (phones)

  const phoneContainer = document.getElementById ('phone-container');
  phoneContainer.textContent = ''; //clear the field while search new item
   
  const showAllContainer = document.getElementById ('show-all-container')
  if (phones.length > 12 ) {
    showAllContainer.classList.remove ('hidden')
    
  }
  else {
    showAllContainer.classList.add ('hidden')
  }

    phones = phones.slice (0,12); // 


  phones.forEach(phone => {
    console.log (phone)

    // create a div 

    const phoneCard = document.createElement ('div')
    phoneCard.classList = `card py-3 bg-white shadow-xl`
    phoneCard.innerHTML = `

    <figure><img src="${ phone.image}" alt="Shoes" /></figure>
        <div class="card-body">
           <h2 class="card-title"> ${phone.phone_name }!</h2>
         <p>If a dog chews shoes whose shoes does he choose?</p>   
          <div class="card-actions justify-center">
        </div>
       </div>` ;
       phoneContainer.appendChild (phoneCard) ;

  });

}

const handleSearch = () =>{
  const searchField = document.getElementById ('search-field')
  const searchText = searchField.value ;
  console.log(searchText)
  loadPhone (searchText)
 
  

  }

  const handleSearch2 = () => {

    const searchField = document.getElementById ('second-input2')
    const searchText = searchField.value ;
    loadPhone (searchText)

  }

// loadPhone ();