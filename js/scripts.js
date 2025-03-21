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
//Ejemplo de cómo debería verse el resultado:
//Precio: 120 | Número generado: 45 | Precio final: 108 (10% de descuento)
//Precio: 75 | Número generado: 65 | Precio final: 60 (20% de descuento)
//Precio: 40 | Número generado: 30 | Precio final: 36 (10% de descuento)

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

//Sabrina está en un restaurante con dos amigos. Recibe un array con tres cuentas, por ejemplo: [120, 75, 93]. Cada cuenta debe dividirse entre 3 para pagar de manera justa. Si el resultado de la división es impar, debe redondearse al número par más cercano. Sabrina debe imprimir el precio original, el precio dividido y el precio final (redondeado si es necesario) para cada cuenta.

//Ejemplo de cómo debería verse el resultado:
//Cuenta original: 120 | Dividido: 40 | Precio final: 40
//Cuenta original: 75 | Dividido: 25 | Precio final: 26 (Redondeado al número par más cercano)
//Cuenta original: 93 | Dividido: 31 | Precio final: 32 (Redondeado al número par más cercano)

//Macarena quiere calcular la edad de tres clientes. Recibe un array con tres años de nacimiento entre 1950 y 2010. Sabiendo que estamos en el año 2025, debe calcular la edad de cada uno y determinar si al menos uno es mayor de 18. Si hay al menos un cliente mayor de edad, imprimirá "Hay un cliente mayor de edad", si no, "Todos son menores de edad".

//Abby encontró un código de seguridad con tres números entre 100 y 999. Si el primer número es mayor que el segundo pero menor que el tercero, imprimirá "Código válido", si no, "Código incorrecto".

//Camila está organizando la lista de clientes de su tienda. Un cliente nuevo, "Lucía", llega y debe agregarse al final de la lista de clientes: ["Carlos", "María", "Sofía"]. Luego, debe mostrar cuántos clientes hay en la lista.

//Bego está revisando el stock de su tienda. Un producto aleatorio ya no está disponible y debe ser eliminado de la lista: ["Pan", "Leche", "Huevos"]. Después, debe mostrar cuántos productos quedan.

//Sabrina está registrando pedidos en un restaurante. Un nuevo pedido, "Pizza", ha sido añadido en primer lugar a la lista de pedidos: ["Hamburguesa", "Ensalada"]. Luego, debe imprimir el primer pedido en la lista.

//Macarena está revisando las reservas de su hotel. Un cliente canceló su reserva en la lista: ["Habitación 101", "Habitación 203", "Habitación 305"]. Luego, debe mostrar cuántas reservas quedan.

//Abby encontró una lista de suministros en un refugio, por ejemplo: ["Botiquín", "Munición", "Agua", "Comida"]. Necesita asegurarse de que hay "Munición" y "Comida" disponibles. Si ambos están en la lista, debe mostrar "Suministros completos". Si falta alguno, debe mostrar "Suministros incompletos".

//Camila está organizando una lista de espera. Un cliente importante, "Fernando", debe ser colocado en la primera posición de la lista: ["Ana", "Luis", "Elena"]. Luego, debe mostrar quién es el último en la lista.

//Bego tiene una caja registradora con pagos pendientes. Ha procesado el primer pago en la lista de pagos y debe eliminarlo: [15.50, 32.75, 8.99]. Luego, debe mostrar cuántos pagos quedan por procesar.

//Sabrina está actualizando el menú de su restaurante. Un nuevo plato, "Pasta", ha sido agregado a la lista de platos: ["Sopa", "Carne asada"], y el último ha sido eliminado. Luego, debe mostrar la lista de platos.Sabrina está actualizando el menú de su restaurante. Un nuevo plato, "Pasta", ha sido agregado a la lista de platos: ["Sopa", "Carne asada"], y el último ha sido eliminado. Luego, debe mostrar la lista de platos.

//Macarena está organizando un torneo. Un nuevo jugador, "Diego", se ha inscrito y reemplazará al último de la lista de jugadores: ["Hugo", "Mateo", "Álvaro"]. Luego, debe mostrar la cantidad total de jugadores inscritos.

//Abby está recibiendo señales de radio con mensajes en espera. Ha procesado el mensaje más antiguo de la lista: ["Atención, infectados cerca", "Necesitamos refuerzos", "Zona despejada"] y ha recibido uno nuevo: "Solicitamos medicinas". Luego, debe mostrar los mensajes uno por uno en console.log independientes.