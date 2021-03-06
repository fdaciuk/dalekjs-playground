exports.createAccount = function createAccount(test) {
  test.maximize()
    .open('https://app.contaazul.com')
    .click('a[href="#modalCadastro"]')
    .type('#contaazul-name', 'Fernando Daciuk')
    .type('#contaazul-company', 'Empresa')
    .type('#contaazul-phone', '(11) 1111-11111')
    .type('#contaazul-email', new Date().getTime() + '@contaazul.com')
    .type('#contaazul-pass', '123456')
    .click('#contaazul-terms')
    .screenshot('./screenshots/:browser/app-ca_:timestamp.png')
    .done();
};
