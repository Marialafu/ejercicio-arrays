//Camila está organizando la lista de asistentes para una conferencia. Tiene un array con nombres, por ejemplo: ["Pedro", "Ana", "Sofía", "Luis"]. Quiere saber si "Ana" está en la lista y, si es así, debe imprimir "Invitada confirmada en la posición X". Si no está, debe imprimir "Invitada no encontrada". Identificar si el nombre está en la lista o no.

const knowIfNameIsInInvitedList = name => {
  const names = ['Pedro', 'Ana', 'Sofía', 'Luis', 'Ana', 'Camila'];
  if (names.includes(name)) {
    console.log('Invitado confirmado en la posición ' + names.indexOf(name));
  } else {
    console.log('Invitado no confirmado');
  }
};

knowIfNameIsInInvitedList('Sofía');

//Bego está buscando un producto específico en su tienda. La lista de productos es: ["Camiseta", "Pantalón", "Gorra", "Zapatos"]. Necesita saber en qué posición se encuentra "Gorra". Si lo encuentra, debe mostrar su posición. Si no lo encuentra, debe mostrar "Producto no disponible".

const productList = listProduct => {
  if (listProduct.includes('Gorra')) {
    console.log('Gorra está en la posición ' + listProduct.indexOf('Gorra'));
  } else {
    console.log('Producto no disponible');
  }
};
productList(['Camiseta', 'Pantalón', 'Zapatos', 'Gorra']);

//Sabrina está revisando su lista de correos electrónicos para enviar promociones, por ejemplo: ["cliente1@gmail.com", "cliente2@hotmail.com", "cliente3@gmail.com"]. Quiere asegurarse de que al menos uno de los correos pertenece a Gmail. Si lo encuentra, debe mostrar "Correo de Gmail encontrado". Si no, "No hay correos de Gmail".

const confirmGmailMail = mail => {
  mail.includes('gmail')
    ? console.log('Correo de Gmail encontrado')
    : console.log('No hay correos de gmail');
};
confirmGmailMail([
  'cliente1@gmail.com',
  'cliente2@hotmail.com',
  'cliente3@gmail.com'
]);
