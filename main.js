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

const table = document.createElement('table')
document.body.appendChild(table)

const tablehead = document.createElement('thead')
table.appendChild(tablehead)

const tableheadrow = document.createElement('tr')
tablehead.appendChild(tableheadrow)

const th = document.createElement('th')
tableheadrow.appendChild(th)

const th2 = document.createElement('th')
tableheadrow.appendChild(th2)

const th3 = document.createElement('th')
tableheadrow.appendChild(th3)

const th4 = document.createElement('th')
tableheadrow.appendChild(th4)

th.innerHTML="Vezetéknév"
th2.innerHTML="Keresztnév"
th3.innerHTML="Házas-e"
th4.innerHTML="Házi állat"
th2.colSpan = 2


const tablebody = document.createElement('tbody')
table.appendChild(tablebody)
for(const person of array){
    const tr = document.createElement('tr')
    tablebody.appendChild(tr)


    const lastname = document.createElement('td')
  
    tr.appendChild(lastname)
    lastname.innerHTML = person.lastname

    const firstname = document.createElement('td')
    tr.appendChild(firstname)
    firstname.innerHTML = person.firstname1

    if(person.firstname2===undefined){
        firstname.colSpan = 2
    }
    else{
        const firstname2 = document.createElement('td')
        firstname2.innerHTML = person.firstname2
        tr.appendChild(firstname2)
    }

    const married = document.createElement('td')
    tr.appendChild(married)
    married.innerHTML = person.married

    if(person.married === true)
    {
        married.innerHTML = 'igen'
    }
    else {
        married.innerHTML = 'nem'
    }

    const pet = document.createElement('td')
    tr.appendChild(pet)
    pet.innerHTML = person.pet
   
    if (person.married === true)
    {
        
    }

    tr.addEventListener('click', function(e)
    {
        let letezike = tablebody.querySelector('.selected') 

        if (letezike != undefined)
            {
                letezike.classList.remove('selected')
            }

        console.log('click')
        console.log(e);
        e.currentTarget.classList.add('selected')

       
       
        })

        const form = document.getElementById('form')
        form.addEventListener('submit',function(e)
        {   
            e.preventDefault()
            const nev = getElementById('firstname')
            const nev2 = getElementById('firstname1')
            const nev3 = getElementById('firstname2')
            const married = getElementById('married')
            const pet1 = getElementById('pet')

            const nevValue = lastname.nevValue
            const nev2Value = firstname1.nevValue
            const nev3Value = firstname2.nevValue    
            const marriedvalue = married.check        
            const pet = pet.nevValue
            
        })
        
  
   
}

    

    

    

