const button=document.querySelectorAll(".button")
const body=document.querySelector("body")
button.forEach(function(button){
    console.log(button)
    button.addEventListener("click",function(e){
        console.log(e)
        console.log(e.target)
        if(e.target.id==='grey'){
            body.style.backgroundColor='grey'
        }
        if(e.target.id==='white'){
            body.style.backgroundColor='white'
        }
        if(e.target.id==='red'){
            body.style.backgroundColor='red'
        }
        if(e.target.id==='yellow'){
            body.style.backgroundColor='yellow'
        }

    })
})
