const loadData = () =>{
    fetch('found.json')
    .then(res => res.json())
    .then(data => displayData(data.result))
    .catch(error => console.log(error))
}

const displayData = allData =>{
    const personContainer = document.getElementById('person-container')
    allData.forEach(data => {
        console.log(data)
        const personDiv = document.createElement('div')
        personDiv.classList.add('col')
        personDiv.innerHTML=`
        <div class="card">
            <div class="card-header">
                Person Name: ${data.name.common}
            </div>
            <div class="card-body">
                <h5 class="card-title">Age: ${data.age} </h5>
                <p class="card-text">Street: ${data.address.street}, House No: ${data.address.house}</p>
            </div>
        </div>
        `;
        personContainer.appendChild(personDiv)
    });
}
loadData()