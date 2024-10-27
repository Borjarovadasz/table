
let array = [
    {
        firstname1: 'Géza',
        firstname2: 'Ferenc',
        lastname: 'Kocsis',
        married: true,
        pet: 'kutya'
    },
    {
        firstname1: 'Mária',
        firstname2: 'Júlia',
        lastname: 'Horváth',
        married: false,
        pet: 'macska'
    },
    {
        firstname1: 'Ferenc',
        lastname: 'Balogh',
        married: false,
        pet: 'teknős'
    },
    {
        firstname1: 'Gábor',
        firstname2: 'Attila',
        lastname: 'Horváth',
        married: true,
        pet: 'macska'
    },
]



/*
createHTMLElement('table', 'persontable', document.body) 
createHTMLElement('thead', 'personthead', persontable)
createHTMLElement('tbody', 'persontbody', personthead)
createHTMLElement('tr', 'persontheadrow', persontbody)
*/

const table = document.createElement('table')
document.body.appendChild(table)

const tablehead = document.createElement('thead')
table.appendChild(tablehead)


const tableheadrow = document.createElement('tr')
tablehead.appendChild(tableheadrow)

const th = createTableElement('th', 'Vezetéknév', tableheadrow)
const th2 = createTableElement('th', 'Keszesztnév', tableheadrow)
const th3 = createTableElement('th', 'Házas-e', tableheadrow)
const th4 = createTableElement('th', 'Háziállat', tableheadrow)

th2.colSpan = 2;
/*
const th = document.createElement('th')
tableheadrow.appendChild(th)

const th2 = document.createElement('th')
tableheadrow.appendChild(th2)

const th3 = document.createElement('th')
tableheadrow.appendChild(th3)

const th4 = document.createElement('th')
tableheadrow.appendChild(th4)
th.innerHTML="Veznev"
th2.innerHTML="Kernev"
th2.colSpan = 2
th3.innerHTML="Házas-e"
th4.innerHTML="Háziállat"

*/


const tablebody = document.createElement('tbody')
table.appendChild(tablebody)


const form = document.getElementById('form')
form.addEventListener('submit',function(e){
    e.preventDefault()
    const lastname = document.getElementById("lastname") 
    const firstname = document.getElementById("firstname1") 
    const firstname2 = document.getElementById("firstname2") 
    const married = document.getElementById("married") 
    const pet = document.getElementById("pet") 
        
    const lastnamevalue = lastname.value
    const firstnamevalue = firstname.value
    let firstname2value = firstname2.value
    const marriedvalue = married.checked
    const petvalue = pet.value

    firstname2value = firstname2value === "" ? undefined:firstname2value 

    const newperson =
    {
        lastname: lastnamevalue,
        firstname1: firstnamevalue,
        firstname2: firstname2value,
        married: marriedvalue,
        pet: petvalue 
    }

    if (validatefields(lastname,firstname,pet))

    array.push(newperson)
    console.log(array)
    tablebody.innerHTML = ""
    rendertable()
    form.reset()
    

    
})
               
function createTableElement(celltag, innerHTML, parentElement)
{
    const  elso = document.createElement(celltag)
    elso.innerHTML = innerHTML
    parentElement.appendChild(elso)
    return elso;
}
    

function validatefield(lastname, firstname, pet) {
    let result = true

    if(lastname.value === '')
    {
    const lastna = lastname.parentElement
    const error = lastna.querySelector('.error')
    error.innerHTML = 'Kötelező vezetéknév!'
    result = false
    
    }
    if(firstname.value === '')
        {
        const firstn = firstname.parentElement
        const error = firstn.querySelector('.error')
        error.innerHTML = 'Kötelező keresznév!'
        result = false
        }
    
    if(pet.value === '')
        {
        const pet1 = pet.parentElement
        const error = pet1.querySelector('.error')
        error.innerHTML = 'Nincs állat'
        result = false
        }
    return result
    }


rendertable()

function rendertable(){
    for(const person of array){
        const tr = document.createElement('tr')
        tablebody.appendChild(tr)
        const lastname = createTableElement('td', person.lastname, tr)
        const firstname = createTableElement('td', person.firstname1, tr)
        const married = createTableElement('td', person.married ? "Igen" : "Nem", tr)
        const pet = createTableElement('td', person.pet, tr);
        tablebody.appendChild(tr)
        tr.appendChild(lastname)
        lastname.innerHTML = person.lastname
   
        tablebody.appendChild(tr)
        tr.appendChild(firstname)
        firstname.innerHTML = person.firstname1
        
        
        
        
        tr.addEventListener('click',function(e){
            console.log('click')
            
    
            const ez = tablebody.querySelector('.selected')
            if(ez!=undefined){
                ez.classList.remove('selected')
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
    
        if(person.married === true){
            married.innerHTML = "igen"
        }else{
            married.innerHTML = "nem"
        }
        
    
        tablebody.appendChild(tr)
        tr.appendChild(pet)
        pet.innerHTML = person.pet
        
    }
}

function validatefields(lastname,firstname,pet){
    
    let valtozo = form.querySelectorAll('.error')
    for(const error of valtozo){
        error.innerHTML = ''
    }
    

    let result = true
    if(lastname.value === ""){
        const par = lastname.parentElement
        const error = par.querySelector(".error")
        error.innerHTML = "Kötelező vezetéknév"
        result = false
    }
    if(firstname.value === ""){
        const par2 = firstname.parentElement
        const error2 = par2.querySelector(".error")
        error2.innerHTML = "Kötelező keresztnév"
        result = false

    }
    if(pet.value === ""){
        const par3 = pet.parentElement
        const error3 = par3.querySelector(".error")
        error3.innerHTML = "Kötelező állat"
        result = false

    }
    return result
}
