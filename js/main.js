function getInfo() {

    const url = `https://api.adviceslip.com/advice`
    fetch (url)
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            document.querySelector('h2').innerText = data.slip.advice
        })

}


document.querySelector('button').addEventListener('click' , getInfo)