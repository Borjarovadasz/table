

/**
 * 
 *
 *@param {'th' | 'td'} tagname
 *@param {string} innerHTML
 *@param {HTMLElement} parentElement
 *@returns {HTMLTableCellElement}
 */
/*
function createTableCell(tagname, innerHTML, parentElement)
{
    const alpha = document.createElement(tagname)
    alpha.innerHTML = innerHTML
    parentElement.appendChild(alpha)

    return alpha;
}
    */

/**
 * 
 *
 *@param {'th' | 'td'} tag
 *@param {string} id
 *@param {HTMLElement} parentElement
 *@returns {HTMLTableCellElement}
 */ 

function createHTMLElement(tag, id, parentElement)
{
const elso = document.createElement(tag) 
elso.id = id
parentElement.appendChild(elso)

}

/**
 * 
 *
 *@param {'th' | 'td'} tag
 *@param {string} id
 *@param {string} parentid
 *@returns {HTMLTableCellElement}
 */

function createHTMLElementwithparentidea(tag, id, parentid)
{
const masodik = document.getElementById(parentid)
if(masodik != undefined)
{
    createHTMLElement(tag, id, masodik)
}
}

function createTableElement(celltag, innerHTML, parentElement) //Ez a függvény segít a Header létrehozásában
{
    const  elso = document.createElement(celltag)
    elso.innerHTML = innerHTML
    parentElement.appendChild(elso)
    return elso;
}
    

function renderTableHeader() {
    const valami = document.getElementById('tr')
    const row = createHTMLElement('th')
    
}

const form = document.getElementById('form')
// itt nézzük meg miket írunk be a nevekhez és id alapján szabadunk tudunk a beírt értékekkel kezdeni. Mert ügye ID-val szedjük ki az értékeket a html-ből
form.addEventListener('submit',function(e){ 
    e.preventDefault()
    const lastname = document.getElementById("lastname")  //lekérjük a htmlből formbol a lastnamet id alapján
    const firstname = document.getElementById("firstname1") //lekérjük a htmlből formbol a fisrtnamet id alapján
    const firstname2 = document.getElementById("firstname2") //lekérjük a htmlből formbol a fisrtnamet2 id alapján
    const married = document.getElementById("married") //lekérjük a htmlből formbol a házas e id alapján
    const pet = document.getElementById("pet") //lekérjük a htmlből formbol a van e háziállat id alapján
        
    const lastnamevalue = lastname.value //ezeknek értékeket adunk hogy tudjunk velük foglalkozni
    const firstnamevalue = firstname.value
    const firstname2value = firstname2.value
    const marriedvalue = married.checked
    const petvalue = pet.value


        const newperson = //majd ezt belerakjuk egy uj ember nevű objektumba
        {
            lastname: lastnamevalue, 
            firstname1: firstnamevalue,
            firstname2: firstname2value,
            married: marriedvalue,
            pet: petvalue 
        }

    

    if (validatefields(lastname,firstname,pet)) //itt megnézzük a validatefield függvényt hogy tényleg van mindenhol érték ha ez TRUE-t ad vissza akkor a többi és lefut és a táblázatunk bővül

    array.push(newperson) //személyes adatokat hozzáadjuk az arrayből
    console.log(array) //ez csak a konzolban írja ki az adatokat
    tablebody.innerHTML = ""
    rendertable() //ujra rendereljük a táblázatot de mostmár a frissített új adatokkal hozzáadva
    form.reset() //minden form mező üres lesz így ujra lehet benne írni
    
    
// megnézzük e hogy a vezetéknév, keresztnév1, vagy keresztnév2  helye üres e és ha igen akkor kiírjuk hogy kötezelő ezek
function validatefields(lastname,firstname,pet){ 
    
    let valtozo = form.querySelectorAll('.error')
    for(const error of valtozo){
        error.innerHTML = ''
    }

    let result = true 
    if(lastname.value === ""){ // ha üres a mező akkor 
        const par = lastname.parentElement
        const error = par.querySelector(".error") //megkeressük az error osztállyal rendelkező elemet
        error.innerHTML = "Kötelező vezetéknév" //a belső értékét a szövegre állítjuk
        result = false 
    }
    if(firstname.value === ""){ // ha üres a mező
        const par2 = firstname.parentElement 
        const error2 = par2.querySelector(".error")//megkeressük az error osztállyal rendelkező elemet
        error2.innerHTML = "Kötelező keresztnév" //a belső értékét a szövegre állítjuk
        result = false

    }
    if(pet.value === ""){ // ha üres a mező
        const par3 = pet.parentElement
        const error3 = par3.querySelector(".error")//megkeressük az error osztállyal rendelkező elemet
        error3.innerHTML = "Kötelező állat" //a belső értékét a szövegre állítjuk
        result = false

    }
    return result

}

    
})

function rendertable(){ //rendering table függvény
    for(const person of array){ //az arrayből a person változó segítségével használjuk az adatokat
        const tr = document.createElement('tr') //létrehuzonk egy tr
        tablebody.appendChild(tr)// hozzátesszük a bodyhoz
        const lastname = createTableElement('td', person.lastname, tr) //meghívjuk a tableelement függvényt aminek három paraméterével létrehuzzok a neveket majd hogy házas és hogy állata is van e
        const firstname = createTableElement('td', person.firstname1, tr)
        const married = createTableElement('td', person.married ? "Igen" : "Nem", tr)
        const pet = createTableElement('td', person.pet, tr);
        tablebody.appendChild(tr) 
        tr.appendChild(lastname)
        lastname.innerHTML = person.lastname
   
        tablebody.appendChild(tr)
        tr.appendChild(firstname)
        firstname.innerHTML = person.firstname1
                
        tr.addEventListener('click',function(e){ //itt megnézzük rákattintottunk e 
            console.log('click')
            
    
            const ez = tablebody.querySelector('.selected') //ha rákattintunk kijelöljük mert a selected classbol(Css) a transform előjön
            if(ez!=undefined){
                ez.classList.remove('selected') //a kijelölést visszavonjuk
            }
            e.currentTarget.classList.add('selected')
        })
    
        if(person.firstname2===undefined){
            firstname.colSpan = 2
        }
        else{
            const firstname2 = document.createElement('td')
            firstname2.innerHTML = person.firstname2
            tr.appendChild(firstname2)
    
        }
    
      
        tablebody.appendChild(tr)
        tr.appendChild(married)
        married.innerHTML = person.married
    
        if(person.married === true){ //ha házas akkor igen ha nem nem
            married.innerHTML = "igen"
        }else{
            married.innerHTML = "nem"
        }
        
    
        tablebody.appendChild(tr) //hozzáadjuk a sort 
        tr.appendChild(pet) // a pet cella pedig hozzáadodik a tr(sor) hoz 
        pet.innerHTML = person.pet // beállítja a tárolt adatból hogy milyen legyen (kutya vagym macska stb)
         
    }
}