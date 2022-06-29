

/*let myLeads = `["www.awesomelead.com"]`

myLeads = JSON.parse(myLeads)               //transform a string into an array.
myLeads.push("www.epiclead.com")            //push an item into the array.

console.log(myLeads)

myLeads = JSON.stringify(myLeads)           //transform an array into strings.

console.log(typeof myLeads)                 //console.log type of element.

// truthy
// falsy

// false
// 0
// ""
// null -> how you as a developer signalize emptiness
// undefined -> how JavaScript signalizes emptiness
// NaN

let trueOfFalse = Boolean("") evaluate an element to know if it's true or false.

console.log(trueOfFalse)

function add(num1, num2) {         //parameters are used to change them for whatever element we want later on.
    return num1 + num2             //these ones are used to sum numbers.
}

const tabs = [
    {url: "https://www.linkedin.com/in/per-harald-borgen/"}
]

tabBtn.addEventListener("click", function() {
    console.log(tabs[0].url)                    // ".url" grabs the url inside the object, which was called out of the array with [0].
})

*/

let myLeads = []

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const listEl = document.getElementById("ul-el")
const deletEl = document.getElementById("input2-btn")
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
const tabBtn = document.getElementById("tab-btn")

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

tabBtn.addEventListener("click", function(){    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){    ///gets current tab url when "tabs[0].url" is active.
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        render(myLeads)
    })
})
// 2. Listen for clicks on tabBtn. Log Per's LinkedIn URL to the console

function render(leads) {
    let listItems = "";
    for (let i = 0; i < leads.length; i++) {
        listItems += `<li>
                        <a href="${leads[i]}" target='_blank'>
                            ${leads[i]}
                        </a>          
                        
                      </li>`
}
listEl.innerHTML = listItems 
}

deletEl.addEventListener("dblclick", function() {
    localStorage.clear();
    myLeads = []
    render(myLeads)
})

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = "" //erase input value after hitting the button.
    localStorage.setItem("myLeads", JSON.stringify(myLeads))

    render(myLeads)
})


/*
const li = document.createElement("li")
li.textContent = myLeads[i]
listEl.append(li)

${var} releases the var from string. */