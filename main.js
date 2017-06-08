var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true });

nightmare
  .goto('http://www.supremenewyork.com/shop/accessories/w8alkjscb/ykw9go8i2')
  .click('#cctrl .button')
  .wait(500)
  .click('#cart .button.checkout')
  .wait(500)
  .type('#order_billing_name', 'Arben Allmeta')
  .type('#order_email', 'arbenallmeta@email.com')
  .type('#order_tel', '8888888888')
  .type('#bo', 'Arben Allmeta')
  .type('#order_billing_zip', '77777')
  .type('#order_billing_city', 'new city')
  .check('#order_terms .checkbox')
  .wait(1000)
  .end()
  .then(function (result) {
    console.log(result);
  })
