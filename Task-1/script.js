let maindiv = document.createElement("div")
document.body.append(maindiv)
maindiv.classList.add("img")


let heading= document.createElement("h1")
heading.innerText="TODOLIST"
maindiv.append(heading)
heading.style.textAlign= "center"


let paragrph = document.createElement("p")
paragrph.innerText ="Each day i will accompolish one thing on my todo list."
maindiv.append(paragrph)
paragrph.style.textAlign="center"



let raedbook = document.createElement('h4')
raedbook.innerText= "Read a Book"
maindiv.append(raedbook)


let lastpara= document.createElement('p')
lastpara.innerText ="I dont think that the human race will survive the next thousand years, unless we spread into space there are too many accidents that can befall life on a single planet. but i am  an optimist... "
maindiv.append(lastpara)


let btn = document.createElement("button")
btn.classList.add("buttonupdate")
btn.innerText= "Start"
maindiv.append(btn)


let secondlastpara = document.createElement('p')
secondlastpara.innerText= "Dont Skip Introduction"
maindiv.append(secondlastpara)
secondlastpara.style.textAlign="center"
secondlastpara.style.textDecoration="underline"
secondlastpara.style.cursor="pointer"

