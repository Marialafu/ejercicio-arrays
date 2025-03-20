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
  mail[0, 1, 2].includes('mail')
    ? console.log('Correo de Gmail encontrado')
    : console.log('No hay correos de gmail');
};
confirmGmailMail([
  'cliente1@gmail.com',
  'cliente2@hotmail.com',
  'cliente3@gmail.com'
]);

//Macarena necesita generar un identificador único para cada usuario. Recibe un array con nombre y apellido, (por ejemplo: ['Enrique Sofresco', 'Esther Colero', 'Leandro Gado']) y debe imprimir las dos primeras letras de cada nombre y de cada apellido en mayúsculas, seguidas de un número aleatorio entre 10 y 99.

const generateUserName = (names, surnames) => {
  console.log(names[1]);
}
generateUserName(['María', 'Carlos'], ['Lafuente', 'Menacho'])

//Abby encontró una caja fuerte con un código de acceso en un array de cuatro dígitos, por ejemplo: [1, 5, 3, 8]. Si la suma del primer y el último número es par, imprimirá "Acceso concedido", si no, "Acceso denegado".

const code = (numbers) => {
  if (numbers[0] + numbers [3] === numbers[0] + numbers [3]% 2) {
    console.log('Acceso concedido')
  } else { console.log('Acceso denegado');
  }
}
code([2, 5, 3, 8])


//Camila quiere generar dos números aleatorios entre 1 y 100 y determinar cuál es el mayor. Después los guardará en un array poniendo en la primera posición el mayor y en segunda posición el menor. Si son iguales, imprimirá "Empate", si no, imprimirá el array.

const generateAleatoryNumber = emptyArray => {
  const firstNumber = Math.floor(Math.random()*100)
  const secondNumber = Math.floor(Math.random()*100)
  if (firstNumber > secondNumber) {
    console.log(emptyArray = firstNumber, secondNumber);
  }else if (secondNumber === firstNumber) {
    console.log('Empate');
  }else {console.log(emptyArray);
  }
}
generateAleatoryNumber(['hola caracola'])

//Bego está calculando descuentos para varios clientes. Recibe un array con tres precios originales ([120, 75, 40]). Para cada precio, genera un número aleatorio entre 1 y 100. Si el número es menor que 50, aplica un 10% de descuento. Si es mayor o igual a 50, aplica un 20%. Debe imprimir el precio original, el número generado y el precio final con descuento para cada uno.

const discountPerPrice = (precios) => {
  const tweentyDiscount = precios*0.2
  const firstNumber = Math.floor(Math.random()*100)
  const secondNumber = Math.floor(Math.random()*100)
  const thirdNumber = Math.floor(Math.random()*100)
  if (precios > firstNumber) {
    console.log(precios, tweentyDiscount, precios-precios*0.2);
  }
}
discountPerPrice([99])

//Ejemplo de cómo debería verse el resultado:
//Precio: 120 | Número generado: 45 | Precio final: 108 (10% de descuento)
//Precio: 75 | Número generado: 65 | Precio final: 60 (20% de descuento)
//Precio: 40 | Número generado: 30 | Precio final: 36 (10% de descuento)