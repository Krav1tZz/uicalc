const dima = document.getElementById("dima")
dima.addEventListener("click", () => {
    const math = document.getElementById("math")
    const answer = document.getElementById("answer")
    eval(math)
    const truth = document.getElementById("truth")
    if (eval(math.value) != answer.value){
        truth.style.display = "block"
    }
    else {
        truth.style.display = "none"
    }
})

