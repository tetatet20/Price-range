import { Dom } from "../../core/Dom";
import { SliderComponent } from "../../core/SliderComponent"

export class PointMax extends SliderComponent {
  public static className = 'point-slider-max'

  constructor(el: Dom) {
    super(el)
  }
  
  toHTML(): string {
    return '<p>5</p>';
  }
}