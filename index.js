const app = "I don't do much."

var dodger = document.getElementById('dodger')

dodger.style.backgroundColor = "#FF69B4"

dodger.style.bottom = '100px'

document.addEventListener('keydown', function(e) {
  if (e.which === 37) {
    moveDodgerLeft()
  }
})