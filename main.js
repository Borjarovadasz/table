
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
const headdata = [
    {th: 'Vezeteknev'},
    {th: 'Keresznev'},
    {th: 'Házas'},
    {th: 'Állat'}
]
   





createHTMLElement('table', 'persontable', document.body) // létrehozzuk a táblát
createHTMLElementwithparentidea('thead', 'personthead', persontable) //létrehuzzok a headet
createHTMLElementwithparentidea('tbody', 'persontbody', persontable)// létrehuzzok a bodyt
createHTMLElementwithparentidea('tr', 'persontheadrow', persontable) 


const table = document.createElement('table')
document.body.appendChild(table)

const tablehead = document.createElement('thead')
table.appendChild(tablehead)

const tableheadrow = document.createElement('tr')
tablehead.appendChild(tableheadrow)

const tablebody = document.createElement('tbody')
table.appendChild(tablebody)

const th = createTableElement('th', 'Vezetéknév', tableheadrow) //a Createtableelement függvény segítségével csinálunk egy header "Vezetéknevet"
const th2 = createTableElement('th', 'Keszesztnév', tableheadrow)// -----|||------ "keresztnevet"
const th3 = createTableElement('th', 'Házas-e', tableheadrow)// -----|||------ "Házas-e"
const th4 = createTableElement('th', 'Háziállat', tableheadrow)// -----|||------ "Háziállat"

th2.colSpan = 2;

               


rendertable()


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
