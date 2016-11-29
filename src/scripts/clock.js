function startClock(){
  let today = new Date()
  document.getElementById('clock').innerHTML = `${today.getHours()}:${format(today.getMinutes())}:${format(today.getSeconds())}`
}

function format(i){
  if (i<10) {i='0'+i}
  return i
}

export { startClock }
