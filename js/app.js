const enddate="08 AUGUST 2023 12:00 PM"
document.getElementById("endd").innerHTML=enddate
const input=document.querySelectorAll("input")
function clock(){
  const end=new Date(enddate)
  const now=new Date()
  const diff=Math.floor((end-now)/1000)
  const dds=(Math.floor(diff/60/60/24))
  const hrs=(Math.floor(diff/60/60))-(dds*24)
  const mins=(Math.floor(diff/60))-(dds*24*60)-(hrs*60)
  const secs=(diff)-(dds*24*60*60)-(hrs*60*60)-(mins*60)
  input[0].value=dds
  input[1].value=hrs
  input[2].value=mins
  input[3].value=secs
}

clock()

setInterval(() => {
  clock()
}, 1000);