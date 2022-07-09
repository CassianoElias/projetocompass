function validar() {
    value = document.getElementById("telefone").value;
    re = /^[0-9]{2}-[0-9]{5}-[0-9]{4}/g;
    if (re.test(value)) {
      document.troca.submit();
    } else {
      alert('Telefone Inválido');
      form.tel.focus();
      return false;
    }
  }

  validar()