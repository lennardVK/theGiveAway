
function setCookie(){
  let currentId = localStorage.getItem('session')
  currentId = JSON.parse(currentId)[0].userId;
  currentId.toString()
  let newCookie = "id=" + currentId + ";path=/"
  document.cookie = newCookie
  console.log('cookie setted', document.cookie)
}
setCookie()

function readCookie(){
  console.log('cookie setted', document.cookie)
}
