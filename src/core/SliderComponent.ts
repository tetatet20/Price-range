import { Dom } from "./Dom";
import { DomListener } from "./DomListener";

export class SliderComponent extends DomListener {
  $root: Dom
  constructor(el: Dom) {
    super()
    this.$root = el
  }
}