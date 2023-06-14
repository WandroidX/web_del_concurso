
document.addEventListener("DOMContentLoaded", () =>  {
    console.log("hola")
    selectedTest = document.getElementsByName("test")

    const btnContainer = document.getElementById("btn-container")

    for (radio of selectedTest) {
        radio.addEventListener("click", (event) => {

                
            btnContainer.innerHTML =  `<button><a href="${event.target.value}.html">Comenzar prueba</a></button>`
            console.log(event.target.value)


        })
    }
}
)
