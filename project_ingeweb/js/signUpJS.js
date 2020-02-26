function prueba(){
    let a = document.getElementById("checklist");
    let b = "";
    for (let i = 0; i < 6; i++) {
        b += "<div>";
        b += `<input type="checkbox" name="${i}" id="${i}"> <label for="${i}">Check: ${i}</label> `;
        b += "</div>";
    }

    a.innerHTML = b;
}
prueba();

