export class Dom {
  el: HTMLElement

  constructor(selector: string | HTMLElement) {
    this.el = typeof selector === 'string'
      ? document.querySelector(selector) as HTMLElement
      : selector
  }

  createElement(tag: string, classes?: string): HTMLElement {
    const createdEl = document.createElement(tag)

    if (classes) {
      createdEl.classList.add(classes)
    }

    return createdEl
  }

  html(html: string) {
    if (typeof html === 'string' || typeof html === 'number') {
      if (this.el) {
        this.el.innerHTML = html
        return this
      }

    }
    if (this.el) {

      return this.el.outerHTML.trim()
    }
  }

  append(node: HTMLElement | null) {
    if (node instanceof Dom) {
      node = node.el
    }

    if (node) {
      this.el?.append(node)
    }

    return this
  }
}

export function $(selector: string | HTMLElement) {
  return new Dom(selector)
}

$.create = (tagName: string, classes = '', id: string | number = '') => {
  const el = document.createElement(tagName)
  if (classes) {
    el.classList.add(classes)
  }
  if (id) {
    el.id = id.toString()
  }
  return $(el)
}