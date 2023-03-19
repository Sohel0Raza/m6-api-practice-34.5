const loadCar = () => {
    fetch('car.json')
        .then(res => res.json())
        .then(data => displayCar(data))
}

const displayCar = cars => {
    const carsContainer = document.getElementById('car-container')
    cars.forEach(car => {
        console.log(car)
        const carDiv = document.createElement('div')
        carDiv.classList.add('col')
        carDiv.innerHTML = `
        <div class="card h-100">
            <img src="${car.imageURL}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${car.name}</h5>
                <p class="card-text">Car Detail: ${car.description}</p>
                <a href="#" class="btn btn-primary">Car Price: ${car.price} $</a>
            </div>
        </div>
        `;
        carsContainer.appendChild(carDiv)
    });
}
loadCar()

                
                
                
        <div>
        <h5>Integration</h5>
        <ul>
            <li>${data.integrations ? data.integrations[0] : 'No data found'}</li>
            <li>${data.integrations ? data.integrations[1] : 'No data found'}</li>
            <li>${data.integrations ? data.integrations[2] : 'No data found'}</li>
        </ul>
    </div>        