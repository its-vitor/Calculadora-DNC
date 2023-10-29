function calculate() {
    const num = Number(document.getElementById("num").value);
    const end = Number(document.getElementById("end").value);
    let x = 0;

    document.getElementById("result-label").style.display = "block";
    document.getElementById("result").innerHTML = `A tabuada de ${num} é:`
    document.getElementById("results").innerHTML = '';
    do {
        document.getElementById("results").innerHTML += `<p class="results">${num} x ${x} = ${num * x}</p>`;
        x++;
    } while (x <= end)

    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
}
