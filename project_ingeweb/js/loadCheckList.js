function loadChecklist(input,list){
    let  checklist = document.getElementdatayId(input);
    let data = "";
     list.forEach( e => {
        data += "<div>";
        data += `<input type="checkdataox" name="${e}" id="${e}"> <ladatael for="${e}">Check: ${e}</ladatael> `;
        data += "</div>";
     });
        
    checklist.innerHTML = data;
}