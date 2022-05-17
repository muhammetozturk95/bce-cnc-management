let uretimFormOpen = document.getElementById("uretimFormOpen");
let phFormOpen = document.getElementById("phFormOpen");
let tasKayitFormOpen = document.getElementById("tasKayitFormOpen");
let bileyKayitFormOpen = document.getElementById("bileyKayitFormOpen");
let firstRow = document.getElementById("firstRow");
let footer = document.getElementById("footer");

// NEGATİF DEĞERLERİN ENGELLENMESİ BAŞLANGIÇ
const drawingNumberDOM = document.getElementById("drawingNumber");
const glassQuantityDOM = document.getElementById("glassQuantity");
const glassWidthDOM = document.getElementById("glassWidth");
const glassLengthDOM = document.getElementById("glassLength");
const cycleCountDOM = document.getElementById("cycleCount");
const phValueDOM = document.getElementById("phValue");
const conductivityDOM = document.getElementById("conductivity");
const drillingDOM = document.getElementById("drilling");
const routerDOM = document.getElementById("router");

drawingNumberDOM.addEventListener("change", notAllowNegative);
glassQuantityDOM.addEventListener("change", notAllowNegative);
glassWidthDOM.addEventListener("change", notAllowNegative);
glassLengthDOM.addEventListener("change", notAllowNegative);
cycleCountDOM.addEventListener("change", notAllowNegative);
phValueDOM.addEventListener("change", notAllowNegative);
conductivityDOM.addEventListener("change", notAllowNegative);
drillingDOM.addEventListener("change", notAllowNegative);
routerDOM.addEventListener("change", notAllowNegative);

function notAllowNegative(e) {
    if(e.target.value <= 0) {

        alert(`${e.target.name} sıfırdan büyük bir tam sayı olmalıdır.`)
        e.target.value = 0;
    }
}

// NEGATİF DEĞERLERİN ENGELLENMESİ BİTİŞ

/* üretim formu toggle */
uretimFormOpen.addEventListener("click", uretimFormToggle);

function uretimFormToggle(e) {
    e.preventDefault();
    let uretimForm = document.getElementById("uretimForm");
    
    
    firstRow.classList.replace("justify-content-center","justify-content-start");

    if(uretimForm.classList.contains("d-none")) {
        uretimForm.classList.remove("d-none");
        phFormOpen.classList.add("d-none");
        tasKayitFormOpen.classList.add("d-none");
        bileyKayitFormOpen.classList.add("d-none");
        
        

    } else {
        uretimForm.classList.add("d-none");
        phFormOpen.classList.remove("d-none");
        tasKayitFormOpen.classList.remove("d-none");
        bileyKayitFormOpen.classList.remove("d-none")
        firstRow.classList.replace("justify-content-start","justify-content-center");
        
        
    }
    
}

/* ph ölçüm formu toggle */

phFormOpen.addEventListener("click", phFormToggle);

function phFormToggle(e) {
    e.preventDefault();
    let phForm = document.getElementById("phForm")
    
    firstRow.classList.replace("justify-content-center","justify-content-start");

    if(phForm.classList.contains("d-none")) {
        phForm.classList.remove("d-none");
        uretimFormOpen.classList.add("d-none");
        tasKayitFormOpen.classList.add("d-none");
        bileyKayitFormOpen.classList.add("d-none");

    } else {
        phForm.classList.add("d-none");
        uretimFormOpen.classList.remove("d-none");
        tasKayitFormOpen.classList.remove("d-none");
        bileyKayitFormOpen.classList.remove("d-none")
        firstRow.classList.replace("justify-content-start","justify-content-center");
    }
    
}

/* taş kayıt formu toggle */

tasKayitFormOpen.addEventListener("click", tasKayitFormToggle);

function tasKayitFormToggle(e) {
    e.preventDefault();
    let tasKayitForm = document.getElementById("tasKayitForm")
    
    firstRow.classList.replace("justify-content-center","justify-content-start");

    if(tasKayitForm.classList.contains("d-none")) {
        tasKayitForm.classList.remove("d-none");
        uretimFormOpen.classList.add("d-none");
        phFormOpen.classList.add("d-none");
        bileyKayitFormOpen.classList.add("d-none");
        footer.style.position = "relative";

    } else {
        tasKayitForm.classList.add("d-none");
        uretimFormOpen.classList.remove("d-none");
        phFormOpen.classList.remove("d-none");
        bileyKayitFormOpen.classList.remove("d-none")
        firstRow.classList.replace("justify-content-start","justify-content-center");
        footer.style.position = "absolute";
    }
    
}

/* biley kayıt formu toggle */

bileyKayitFormOpen.addEventListener("click", bileyKayitFormToggle);

function bileyKayitFormToggle(e) {
    e.preventDefault();
    let bileyKayitForm = document.getElementById("bileyKayitForm")
    
    firstRow.classList.replace("justify-content-center","justify-content-start");

    if(bileyKayitForm.classList.contains("d-none")) {
        bileyKayitForm.classList.remove("d-none");
        uretimFormOpen.classList.add("d-none");
        phFormOpen.classList.add("d-none");
        tasKayitFormOpen.classList.add("d-none");

    } else {
        bileyKayitForm.classList.add("d-none");
        uretimFormOpen.classList.remove("d-none");
        phFormOpen.classList.remove("d-none");
        tasKayitFormOpen.classList.remove("d-none")
        firstRow.classList.replace("justify-content-start","justify-content-center");
    }
    
}
