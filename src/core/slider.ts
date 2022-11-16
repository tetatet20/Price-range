import { IOptions } from "../interface/ISlider";
import { Model } from "../model/Model";
import { Presenter } from "../presenter/Presenter";
import { View } from "../view/View";

export class Slider {
  view: View
  model: Model
  presenter: Presenter
  constructor(selector: string, options?: IOptions) {
    this.view = new View(selector)
    this.model = new Model()
    this.presenter = new Presenter()
  }
}