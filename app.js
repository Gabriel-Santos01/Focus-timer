import { Selectors } from './assets/Modules/selectors.js'
import { functions } from './assets/Modules/functions.js'

let timeTimeOut

Selectors.play.addEventListener('click', () => {
  functions.btnSwitch(
    Selectors.play,
    Selectors.pause,
    Selectors.setTime,
    Selectors.stop
  )

  countdown()
})

Selectors.pause.addEventListener('click', () => {
  functions.simpleSwitch(Selectors.pause, Selectors.play)
})

Selectors.stop.addEventListener('click', () => {
  functions.btnSwitch(
    Selectors.pause,
    Selectors.play,
    Selectors.stop,
    Selectors.setTime
  )
})

Selectors.mute.addEventListener('click', () => {
  functions.simpleSwitch(Selectors.mute, Selectors.unmute)
})

Selectors.unmute.addEventListener('click', () => {
  functions.simpleSwitch(Selectors.unmute, Selectors.mute)
})

Selectors.setTime.addEventListener('click', () => {
  functions.btnSwitch(Selectors.content, Selectors.modal)
})

Selectors.pause.addEventListener('click', () => {
  clearTimeout(timeTimeOut)
})

Selectors.modalBtn.addEventListener('click', () => {
  event.preventDefault()
  Selectors.min.textContent = String(Selectors.inputTime.value).padStart(2, '0')
  functions.btnSwitch(Selectors.modal, Selectors.content)
})

Selectors.stop.addEventListener('click', () => {
  clearTimeout(timeTimeOut)
  functions.clearDisplay(Selectors)
})

function countdown() {
  timeTimeOut = setTimeout(function () {
    let seconds = Number(Selectors.sec.textContent)
    let minutes = Number(Selectors.min.textContent)

    Selectors.sec.textContent = String(seconds - 1).padStart(2, '0')

    if (minutes <= 0 && seconds == 1) {
      functions.btnSwitch(
        Selectors.pause,
        Selectors.play,
        Selectors.stop,
        Selectors.setTime
      )

      return
    }

    if (seconds <= 0) {
      seconds = 60

      Selectors.min.textContent = String(minutes - 1).padStart(2, '0')
    }

    Selectors.sec.textContent = String(seconds - 1).padStart(2, '0')

    countdown()
  }, 50)
}
