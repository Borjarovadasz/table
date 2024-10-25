/**
 * 
 *
 *@param {'th' | 'td'} tagname
 *@param {string} innerHTML
 *@param {HTMLElement} parentElement
 *@returns {HTMLTableCellElement}
 */

function createTableCell(tagname, innerHTML, parentElement)
{
    const alpha = document.createElement(tagname)
    alpha.innerHTML = innerHTML
    parentElement.appendChild(alpha)
    return alpha;

}

function createHTMLElement(tag, id, parentElement)
{
const elso = document.createElement(tag)
elso.id = id
parentElement.appendChild(elso)

}


function createHTMLElementwithparentidea(tag, id, parentid)
{
const masodik = document.getElementById(parentid)
if(masodik != undefined)
{
    createHTMLElement(tag, id, parentElement)
}
}