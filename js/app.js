
const phoneLoad= (searchText) =>{
   const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
     fetch(url)
    .then(res => res.json())
    .then(data => phoneDisplay(data.data))
}


 
const phoneDisplay = (mobiledatas) =>{
     const phoneContainer = document.getElementById('phone-container');
     phoneContainer.innerHTML=``;
    //  for(data of mobiledatas)
    //  {
    //     console.log(data);
    //  }
    // display 10 element
    mobiledatas= mobiledatas.slice(0,10);
    const notFound = document.getElementById('No-found');
    if(mobiledatas.length === 0)
    {
        
        notFound.classList.remove('d-none');
    }
    else {
        notFound.classList.add('d-none');
    }
    mobiledatas.forEach(data => {
        const PhoneDiv = document.createElement('div');
        PhoneDiv.innerHTML= `
        <div class="col">
                  <div class="card">
                    <img src="${data.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${data.phone_name}</h5>
                      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                  </div>
                </div>
        `;
        phoneContainer.appendChild(PhoneDiv);
        console.log(data);
    });
}

document.getElementById('search-button').addEventListener('click',function()
{
    const inputField = document.getElementById('input-field');
    const searchText = inputField.value;
    phoneLoad(searchText);


}
)