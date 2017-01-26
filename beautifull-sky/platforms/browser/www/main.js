(function strict() {
  'use strict';

    require.config({
      paths: {
        m: 'node_modules/mithril/mithril',
      },
    });

    require([
      'm'
    ], main);

    function main(m) {
      var app = {};

      app.controller = function controller() {
        var self = this;
        self.colors = m.prop([
          '#F2385A',
          '#F5A503',
          '#E9F1DF',
          '#4AD9D9',
          '#22D972',
        ]);

        self.colorIndex = m.prop(0);

        self.changeColor = function changeColor() {
          self.colorIndex((self.colorIndex() + 1)%self.colors().length);
        };
      };

      app.view = function view(c) {
        return m('.color', {
          onclick: c.changeColor,
          style  : {
            backgroundColor: c.colors()[c.colorIndex()],
          },
        }, m('.color__instruction', 'Touch the screen to see another sky'));
      };

      m.mount(document.getElementById('app'), app);
    }

})();
