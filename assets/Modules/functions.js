export const functions = {
  btnSwitch(target1, target2, target3, target4) {
    target1.classList.add('hidden')
    target2.classList.remove('hidden')
    target3.classList.add('hidden')
    target4.classList.remove('hidden')
  },
  simpleSwitch(target1, target2) {
    target1.classList.add('hidden')
    target2.classList.remove('hidden')
  },
  clearDisplay(Selectors) {
    Selectors.min.textContent = '00'
    Selectors.sec.textContent = '00'
  }
}
