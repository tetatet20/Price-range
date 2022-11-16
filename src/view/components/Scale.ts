import { SliderComponent } from "../../core/SliderComponent"

export class Scale extends SliderComponent {
  static className = 'scale_slider'

  toHTML(): string {
    return `<div class="scale-slider">
  </div>`;
  }
}