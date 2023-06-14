let patrones = [
[2, 4, 6, 8, 10, 12, 14, 16],
    [1, 4, 9, 16, 25, 36, 49, 64],
    [1, 3, 6, 10, 15, 21, 28, 36],
    [3, 6, 9, 12, 15, 18, 21, 24],
    [1, 1, 2, 3, 5, 8, 13, 21],
    [10, 20, 30, 40, 50, 60, 70, 80],
    [100, 90, 80, 70, 60, 50, 40, 30],
    [2, 4, 8, 16, 32, 64, 128, 256],
    [1, 2, 4, 8, 16, 32, 64, 128],
    [1, 3, 5, 8, 12, 17, 23, 30],
    [5, 10, 20, 40, 80, 160, 320, 640],
    [100, 50, 25, 12.5, 6.25, 3.125, 1.5625, 0.78125],
    [2, 5, 10, 17, 26, 37, 50, 65],
    [1, 3, 9, 27, 81, 243, 729, 2187],
    [1, 4, 9, 16, 25, 36, 49, 64],
    [1, 3, 6, 10, 15, 21, 28, 36],
    [2, 5, 10, 17, 26, 37, 50, 65],
    [1, 2, 4, 7, 11, 16, 22, 29],
    [1, 3, 6, 10, 15, 21, 28, 36],
    [1, 2, 4, 7, 11, 16, 22, 29],
    [2, 4, 8, 16, 32, 64, 128, 256],
    [3, 6, 12, 24, 48, 96, 192, 384],
    [1, 2, 4, 7, 11, 16, 22, 29],
    [1, 3, 6, 10, 15, 21, 28, 36],
    [1, 2, 4, 7, 11, 16, 22, 29],
    [1, 2, 3, 5, 8, 13, 21, 34],
    [2, 4, 7, 11, 16, 22, 29, 37],
    [1, 2, 4, 8, 16, 32, 64, 128],
    [1, 3, 9, 27, 81, 243, 729, 2187],
    [10, 20, 30, 40, 50, 60, 70, 80],
    [100, 90, 80, 70, 60, 50, 40, 30],
    [1, 1, 2, 3, 5, 8, 13, 21],
    [1, 2, 4, 8, 16, 32, 64, 128],
    [1, 1, 2, 3, 5, 8, 13, 21],
    [1, 2, 4, 8, 16, 32, 64, 128],
    [5, 10, 15, 20, 25, 30, 35, 40],
    [100, 50, 25, 12.5, 6.25, 3.125, 1.5625, 0.78125],
    [3, 6, 9, 12, 15, 18, 21, 24],
    [2, 4, 6, 8, 10, 12, 14, 16],
    [1, 4, 7, 10, 13, 16, 19, 22],
    
]
let index = 0;
function modificarPregunta(patrones)
{

    function cambiarPregunta()
    {
        let preguntaDiv = document.getElementById("pregunta")
        let respuestasDiv = document.getElementById("respuestas")

        let pregunta = patrones[index].join(", ")
        preguntaDiv.innerHTML = '<h2>' + pregunta + "..." + "</h2>"


    }


    index += 1
    if (index === patrones.length)
    {
        clearInterval(pregunta_temp)



    }
    let pregunta_temp = setInterval(cambiarPregunta, 5000)

}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("start-btn").addEventListener("click", () => {
        console.log("hola man")
        let infoDiv = document.getElementById("info");
        infoDiv.innerHTML = ""
        modificarPregunta(patrones)
    })

})
