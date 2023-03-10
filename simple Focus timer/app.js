import { Selectors } from './assets/Modules/selectors.js'
import { functions } from './assets/Modules/functions.js'
import sounds from './assets/Modules/Sounds.js'

let timeTimeOut
const sound = sounds()

Selectors.play.addEventListener('click', () => {
  functions.btnSwitch(
    Selectors.play,
    Selectors.pause,
    Selectors.setTime,
    Selectors.stop
  )

  countdown()
  sound.pressButton()
})

Selectors.pause.addEventListener('click', () => {
  functions.simpleSwitch(Selectors.pause, Selectors.play)
  clearTimeout(timeTimeOut)
  sound.pressButton()
})

Selectors.stop.addEventListener('click', () => {
  functions.btnSwitch(
    Selectors.pause,
    Selectors.play,
    Selectors.stop,
    Selectors.setTime
  )
  clearTimeout(timeTimeOut)
  functions.clearDisplay(Selectors)
  sound.pressButton()
})

Selectors.mute.addEventListener('click', () => {
  functions.simpleSwitch(Selectors.mute, Selectors.unmute)
  sound.pressButton()
  sound.bgAudio.pause()
})

Selectors.unmute.addEventListener('click', () => {
  functions.simpleSwitch(Selectors.unmute, Selectors.mute)
  sound.bgAudio.play().volume = 0.01
  sound.pressButton()
})

Selectors.setTime.addEventListener('click', () => {
  functions.btnSwitch(Selectors.content, Selectors.modal)
  sound.pressButton()
})

Selectors.modalBtn.addEventListener('click', () => {
  event.preventDefault()
  Selectors.min.textContent = String(Selectors.inputTime.value).padStart(2, '0')
  functions.btnSwitch(Selectors.modal, Selectors.content)
  sound.pressButton()
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
      Selectors.min.textContent = String(Selectors.inputTime.value).padStart(
        2,
        '0'
      )
      sound.timeEnd()

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
