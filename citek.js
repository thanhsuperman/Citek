
/*!
 *  CanvasInput v1.2.7
 *  http://goldfirestudios.com/blog/108/CanvasInput-HTML5-Canvas-Text-Input
 *
 *  (c) 2013-2017, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */

(function() {
    // create a buffer that stores all inputs so that tabbing
    // between them is made possible.
    var inputs = [];
  
    // initialize the Canvas Input
    var CanvasInput = window.CanvasInput = function(o) {
      var self = this;
     
   
    };
  
    // setup the prototype
    CanvasInput.prototype = {
      /**
       * Get/set the main canvas.
       * @param  {Object} data Canvas reference.
       * @return {Mixed}      CanvasInput or current canvas.
       */
      oninit: function(data) {
        var self = this;
  
        if (typeof data !== 'undefined') {
          self._canvas = data;
          self._ctx = self._canvas.getContext('2d');
  
          return 'Citek nè';
        } else {
          return 'Citek nè nha!';
        }
      }
    };
  })();