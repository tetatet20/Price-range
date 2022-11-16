// //файл Excel.js
import { $, Dom } from "../core/Dom"
import { IOptions } from "../interface/ISlider"
import "../scss/index.scss"
import { PointMax } from "./components/PointMax"
import { PointMin } from "./components/PointMin"
import { Scale } from "./components/Scale"

export class View {
  el: Dom
  components: any[]
  constructor(selector: string) {
    this.el = new Dom(selector)
    // Оставить один поинт
    this.components = [Scale, PointMin]
    // Название init
    this.getRoot()
  }

  getRoot() {
    const root = this.el.createElement('div', 'slider')
    // Добавляешь пустой класс
    root.classList.add()

    this.components.forEach(Component => {
      // Используем className класса

      const el = $.create('div', Component.className)
      // передаешь жлемент и не принимаешь его в классе
      const component = new Component(el)
      el.html(component.toHTML())
      root.append(el.el)
    })
    this.el.append(root)
  }
  //   render() {
  //     this.el.append(this.getRoot())
  //   }
}

