import { Selectors } from './assets/Modules/selectors.js'
import { functions } from './assets/Modules/functions.js'

Selectors.play.addEventListener('click', () => {
  functions.btnSwitch(
    Selectors.play,
    Selectors.pause,
    Selectors.setTime,
    Selectors.stop
  )
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
  let min = prompt('Quantos minutos?')
  Selectors.min.textContent = String(min).padStart(2, '0')
  countdown()
})

function countdown() {
  setTimeout(function () {
    let seconds = Number(Selectors.sec.textContent)
    let minutes = Number(Selectors.min.textContent)

    Selectors.sec.textContent = String(seconds - 1).padStart(2, '0')

    if (minutes <= 0 && seconds <= 1) {
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
