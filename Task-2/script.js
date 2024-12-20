let maindiv = document.createElement('div')
document.body.append(maindiv)
maindiv.classList.add("background")
maindiv.style.cssText= "height:100vh"


let header = document.createElement("h1")
header.classList.add("heading")
header.style.cssText= "color:#ffffff; background-color:#323f4b; font-size:20px; text-align: center; font-weight:bold; padding:14px"
header.innerText= "chat"
maindiv.append(header)



let seconddiv = document.createElement("div")
seconddiv.innerText="Hello, how are you"
seconddiv.classList.add("whole")
seconddiv.style.cssText ="background-color: #ffffff; padding:14px; font-family:Roboto; font-size:12px"
maindiv.append(seconddiv)

let para1 = document.createElement("p")
para1.innerText="Hi Varakumar, i am good. How are you?"
para1.classList.add("text-sent")
para1.style.cssText="background-color:#47a3f3; padding:12px; border-top-left-radius:12px; border-top-right-radius:12px; border-bottom-right-radius:12px; text-align:left"
maindiv.append(para1)

let para2 = document.createElement("p")
para2.innerText="iam fine. i am learning HTML and CSS"
para2.classList.add("text-rec")
para2.style.cssText="background-color:#52606d; padding:12px; border-top-left-radius:12px; border-top-right-radius:12px; border-bottom-right-radius:12px; text-align: left"
maindiv.append(para2)


let para3 = document.createElement("p")
para3.innerText="HTML and CSS"
para3.classList.add("text-sent")
para3.style.cssText="background-color:#47a3f3; padding:12px; border-top-left-radius:12px; border-top-right-radius:12px; border-bottom-right-radius:12px; text-align:left"

maindiv.append(para3)

let para4 = document.createElement("p")
para4.innerText= " yes, by doing projects parallely , i am "
para4.classList.add("text-rec")
para4.style.cssText="background-color:#52606d; padding:12px; border-top-left-radius:12px; border-top-right-radius:12px; border-bottom-right-radius:12px; text-align: left"

maindiv.append(para4)

let para5 = document.createElement("p")
para5.innerText="Awesome , can you tell how you are learning it"
para5.classList.add("text-sent")
para5.style.cssText="background-color:#47a3f3; padding:12px; border-top-left-radius:12px; border-top-right-radius:12px; border-bottom-right-radius:12px; text-align:left"

maindiv.append(para5)

let para6 = document.createElement("p")
para6.innerText="Can i call you ?"
para6.classList.add("text-rec")
para6.style.cssText="background-color:#52606d; padding:12px; border-top-left-radius:12px; border-top-right-radius:12px; border-bottom-right-radius:12px; text-align: left"

maindiv.append(para6)

