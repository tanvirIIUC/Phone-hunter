
const phoneLoad= (searchText,limit) =>{
   const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
     fetch(url)
    .then(res => res.json())
    .then(data => phoneDisplay(data.data,limit))
}


 
const phoneDisplay = (mobiledatas,limit) =>{
     const phoneContainer = document.getElementById('phone-container');
     phoneContainer.innerHTML=``;
    //  for(data of mobiledatas)
    //  {
    //     console.log(data);
    //  }
    // display 10 element
    const seeall= document.getElementById('see-all');
    if(limit && mobiledatas.length>10)
    {
      mobiledatas= mobiledatas.slice(0,10);
      seeall.classList.remove('d-none');
    }
    else {
      seeall.classList.add('d-none');
    }
   
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
        toglesping(false);
    });
}

 const process = (limit) =>{
    const inputField = document.getElementById('input-field');
    const searchText = inputField.value;
    phoneLoad(searchText,limit);
    toglesping(true);

 }
document.getElementById('search-button').addEventListener('click',function()
{
  process(10);

}
)

const toglesping = isload =>{
    const showSping = document.getElementById('sping');
     if(toglesping)
     {
        showSping.classList.remove('d-none');
     }
     else {
        showSping.classList.add('d-none');
     }
}
document.getElementById('show-all').addEventListener('click',function(){
  process();
})
