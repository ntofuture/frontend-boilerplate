(function (namespace) {
  "use strict";

  var AppComponent = function () {
    var o = this;
    fe.App.ready(function () {
      o.initialize();
    });
  };

  var p = AppComponent.prototype;

  p.initialize = function () {
    this.clickEvents();
  };

  p.clickEvents = function () {};

  window.fe.AppComponent = new AppComponent();
})(this.fe);
