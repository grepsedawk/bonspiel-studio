/* eslint no-console:0 */

// Rails Unobtrusive JavaScript (UJS) is *required* for links in Lucky that use DELETE, POST and PUT.
// Though it says "Rails" it actually works with any framework.
require("@rails/ujs").start();

// Turbolinks is optional. Learn more: https://github.com/turbolinks/turbolinks/
require("turbolinks").start();

// If using Turbolinks, you can attach events to page load like this:
//
// document.addEventListener("turbolinks:load", function() {
//   ...
// })

import { Application } from "@hotwired/stimulus";
import * as Turbo from "@hotwired/turbo"
export { Turbo }

import HelloController from "./controllers/hello_controller";
import RemovableController from "./controllers/removable_controller";
import DateRangeController from "./controllers/date_range_controller";
import ToggleController from "./controllers/toggle_controller";
import AutoSaveInputController from "./controllers/auto_save_input_controller";

declare global {
  interface Window {
    Stimulus: any;
  }
}

let Stimulus = (window.Stimulus = Application.start());
Stimulus.register("hello", HelloController);
Stimulus.register("toggle", ToggleController);
Stimulus.register("removable", RemovableController);
Stimulus.register("date_range", DateRangeController);
Stimulus.register("autoSaveInput", AutoSaveInputController);
