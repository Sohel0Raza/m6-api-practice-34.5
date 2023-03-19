const loadAdvice = async() =>{
    const url = `https://api.adviceslip.com/advice`
    try{
        const res = await fetch(url)
        const data = await res.json()
        displayAdviceOne(data)
    }
    catch(error){
        console.log(error)
    }
}
const displayAdviceOne = advice =>{
console.log('advice :', advice.slip);
    const adviceContainer = document.getElementById('advice-container')
    adviceContainer.innerHTML =`
    <figure class="text-center">
        <h4>Advice# ${advice.slip.id} </h4>
        <blockquote class="blockquote">
            <p>${advice.slip.advice}</p>
        </blockquote>
    </figure>
    `;
}
const loadAdvices = async(text) =>{
    const url = `https://api.adviceslip.com/advice/search/${text}`
    try{
        const res = await fetch(url)
        const data = await res.json()
        displayAdvice(data)
    }
    catch(error){
        console.log(error)
    }
}
const displayAdvice = advices =>{
    const adviceContainer = document.getElementById('advice-container')
    adviceContainer.innerHTML =`
    <figure class="text-center">
        <h4>Advice# ${advices.slips[0].id} </h4>
        <blockquote class="blockquote">
            <p>${advices.slips[0].advice}</p>
        </blockquote>
    </figure>
    `;
}
const searchField = ()=>{
    const searchText = document.getElementById('advice-field').value;
    loadAdvices(searchText)
}
loadAdvice()