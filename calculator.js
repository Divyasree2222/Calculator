let calculation = localStorage.getItem('calculation') || '';
      document.querySelector('.js-calculation')
          .innerHTML = calculation;

      function updateCalculation(value) {
        calculation += value;
        document.querySelector('.js-calculation')
          .innerHTML = calculation;
        localStorage.setItem('calculation', calculation);
      }

      // Optional: you can also create a function in order
      // to reuse this code.
      function saveCalculation() {
        localStorage.setItem('calculation', calculation);
      }