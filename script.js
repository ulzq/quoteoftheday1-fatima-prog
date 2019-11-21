

var quotes = [

    "Either you run the day or the day runs you!",
  
    "Strength is Weakness",
  
    "Feel the code",
  
    "May the source be with you",
  
    "DCI, everything is possible ;)",
  
    "Whether you think you or you think you can’t, you’re right",
  
    "Aim for failure and you always succeed"
  
  ]
  
  
var container;
container = document.createElement('container')
container.textContent='Quote'
var body= document.body
body.appendChild(container)


var p= document.createElement('p')
p.style.border='green 2px solid'
p.style.height='345px'
p.style.width='610px'
p.style.margin='auto'
p.style.padding='50px'
p.style.color='red'

p.style.backgroundImage='url(fantasy-3193891__340.jpg)'
p.style.backgroundRepeat='no-repeat'
body.appendChild(p)
var button=document.createElement('button')
button.textContent='random'
body.appendChild(button)
button.addEventListener("click",function(){p.innerHTML=quotes[Math.floor(Math.random() * quotes.length)]})