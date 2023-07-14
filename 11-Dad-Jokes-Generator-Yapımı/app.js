const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

jokeBtn.addEventListener("click", generateJoke)

generateJoke()

//"async" kullanarak yapılan 1.yöntem. Aynı zamanda daha anlaşılır ve temiz kodlar yazmamızı sağlar.

async function generateJoke() {
    const config = {
        headers: {
            Accept: "application/json",
        },
    }

    const res = await fetch("https://icanhazdadjoke.com", config)
    const data = await res.json();
    jokeEl.innerHTML = data.joke
}



/*
//"then" kullanarak yapılan 2.yöntem
function generateJoke() {
    const config = {
        headers: {
            Accept: "application/json",
        },
    }

    fetch("https://icanhazdadjoke.com", config)
        .then((res) => res.json())
        .then((data) => {
            //console.log(data)
            jokeEl.innerHTML = data.joke
        })
}*/