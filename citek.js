
/*!
 *  CanvasInput v1.2.7
 *  http://goldfirestudios.com/blog/108/CanvasInput-HTML5-Canvas-Text-Input
 *
 *  (c) 2013-2017, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */

(function () {
  // create a buffer that stores all inputs so that tabbing
  // between them is made possible.
  var inputs = [];

  // initialize the Canvas Input
  var Citek = window.Citek = function (o) {
    var self = this;
    self._citek = 'Citek';


  };

  // setup the prototype
  Citek.prototype = {
    /**
     * Get/set the main canvas.
     * @param  {Object} data Canvas reference.
     * @return {Mixed}      CanvasInput or current canvas.
     */
    oninit: function (data) {
      var self = this;
      if (typeof data !== 'undefined') {
        self._citek = data;

        return self._citek;
      } else {
        return self._citek;
      }
    },
    /**
     * Get/set the main canvas.
     * @param  {Object} data Canvas reference.
     * @return {Mixed}      CanvasInput or current canvas.
     */
    checkLicense: async function (check) {
      await fetch('https://my419945.s4hana.cloud.sap:443/sap/bc/http/sap/ZBC_API_LOGIN_MAIN_MENU', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Basic ' + btoa('HVB_INTEGRATION:HVB_Integration@2025') // Mã hóa Base64
        },
        body: JSON.stringify({
          username: 'TRUNG.LE1',
          password: 'value2'
        })
      })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
      return check
    },
    /**
     * Get/set the main canvas.
     * @param  {Object} data Canvas reference.
     * @return {Mixed}      CanvasInput or current canvas.
     */
    checkGitStatus: async function (check) {

      console.log(exec)
      // Ví dụ: Chạy lệnh 'git status'
      exec('git status', (error, stdout, stderr) => {
        if (error) {
          console.error(`Lỗi: ${error.message}`);
          return error.message;
        }
        if (stderr) {
          console.error(`stderr: ${stderr}`);
          return stderr;
        }
        // Kết quả trả về
        return stdout
        console.log(`stdout: ${stdout}`);
      });
    }
  };
})();