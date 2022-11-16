/**
 * Section progress directive
 * @author Kevin Levron <kevin.levron@gmail.com>
 */
import Vue from 'vue'

let _Vue

const sections = []
const sectionsMap = new WeakMap()

let listeners = false

let resizeTimeout

function addSection (el, value) {
  const i = sections.indexOf(el)
  if (i === -1) {
    sections.push(el)
    sectionsMap.set(el, value)
    updateSection(el, 'onProgress')
  }
}

function removeSection (el) {
  const i = sections.indexOf(el)
  if (i !== -1) {
    sections.splice(i, 1)
    sectionsMap.delete(el)
  }
}

function onScroll () {
  sections.forEach((el) => {
    updateSection(el, 'onProgress')
  })
}

function onResize () {
  clearTimeout(resizeTimeout)
  resizeTimeout = setTimeout(() => {
    sections.forEach((el) => {
      updateSection(el, 'onProgress')
    })
  }, 100)
}

function updateSection (el, callback) {
  const sectionParams = sectionsMap.get(el)
  const sectionCallback = sectionParams[callback]

  const ev = { progress: 0, el, component: sectionParams.component }
  const r = el.getBoundingClientRect()

  if (r.top > window.innerHeight) {
    ev.progress = 0
  } else if (r.top >= -r.height) {
    const y = r.top + r.height
    ev.progress = 1 - y / (r.height + window.innerHeight)
  } else {
    ev.progress = 1
  }

  if (sectionCallback) { sectionCallback(ev) }
}

function addListeners () {
  window.addEventListener('scroll', onScroll)
  window.addEventListener('resize', onResize)
  listeners = true
}

function removeListeners () {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onResize)
  listeners = false
}

function inserted (el, { value }, vm) {
  addSection(el, { ...value, component: vm.componentInstance })
  if (!listeners) {
    addListeners()
  }
}

function unbind (el) {
  removeSection(el)
  if (sections.length === 0) {
    removeListeners()
  }
}

function install (InjectedVue) {
  if (process.env.NODE_ENV !== 'production' && _Vue) {
    throw new Error('[section-progress] section-progress is already installed')
  }

  _Vue = InjectedVue

  _Vue.directive('section-progress', {
    inserted,
    unbind
  })
}

Vue.use({ install })
