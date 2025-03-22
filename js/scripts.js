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
  mail[0].includes('gmail') || mail[1].includes('gmail') || mail[2].includes('gmail')
    ? console.log('Correo de Gmail encontrado')
    : console.log('No hay correos de gmail');
};
confirmGmailMail([
  'cliente1@gmail.com',
  'cliente2@hotmail.com',
  'cliente3@gmail.com'
]);


//Macarena necesita generar un identificador único para cada usuario. Recibe un array con nombre y apellido, (por ejemplo: ['Enrique Sofresco', 'Esther Colero', 'Leandro Gado']) y debe imprimir las dos primeras letras de cada nombre y de cada apellido en mayúsculas, seguidas de un número aleatorio entre 10 y 99.

//CAMINO CORTO

const extractLetters = name => {
  const findName = name.substring(0, name.indexOf(' '))
  const findSurname = name.substring(name.indexOf(' ')+1, name.length)
  
  const excludeLetters = 
  findName.charAt(0).toUpperCase() + 
  findName.charAt(1).toUpperCase() + 
  findSurname.charAt(0).toUpperCase() + 
  findSurname.charAt(1).toUpperCase()

  const addNumber = 
  excludeLetters + Math.floor(Math.random()*99)

  return addNumber
}

const generateUserNames = names => {
  firstName = extractLetters(names[0])
  secondName = extractLetters(names[1])
  thirdName = extractLetters(names[2])
  console.log(`${firstName} ${secondName} ${thirdName}`);
  
}
generateUserNames(['Enrique Sofresco', 'Esther Colero', 'Leandro Gado'])

//CAMINO LARGO

const generateUserName = (allName) => {
  const findName = allName[0].substring(0, allName[0].indexOf(' '))
  const findSurname = allName[0].substring(allName[0].indexOf(' ')+1, allName[0].length)
  

  const excludeLetters = findName.charAt(0).toUpperCase() + findName.charAt(1).toUpperCase()
  console.log(excludeLetters);
  
  
}
generateUserName(['Enrique Sofresco', 'Esther Colero', 'Leandro Gado'])


//Abby encontró una caja fuerte con un código de acceso en un array de cuatro dígitos, por ejemplo: [1, 5, 3, 8]. Si la suma del primer y el último número es par, imprimirá "Acceso concedido", si no, "Acceso denegado".

const code = (numbers) => {
  if (numbers[0] + numbers [3] % 2 === 0) {
    console.log('Acceso concedido')
  } else { console.log('Acceso denegado');
  }
}
code([1, 5, 3, 8])


//Camila quiere generar dos números aleatorios entre 1 y 100 y determinar cuál es el mayor. Después los guardará en un array poniendo en la primera posición el mayor y en segunda posición el menor. Si son iguales, imprimirá "Empate", si no, imprimirá el array.

const generateAleatoryNumber = emptyArray => {
  const firstNumber = Math.floor(Math.random()*100)
  const secondNumber = Math.floor(Math.random()*100)
  if (firstNumber > secondNumber) {
    emptyArray[0] = firstNumber, emptyArray[1] = secondNumber
  }else if (secondNumber === firstNumber) {
    'Empate';
  }else {};
  console.log(`${emptyArray}`);
  }
generateAleatoryNumber(['hola caracola'])

//Bego está calculando descuentos para varios clientes. Recibe un array con tres precios originales ([120, 75, 40]). Para cada precio, genera un número aleatorio entre 1 y 100. Si el número es menor que 50, aplica un 10% de descuento. Si es mayor o igual a 50, aplica un 20%. Debe imprimir el precio original, el número generado y el precio final con descuento para cada uno.
//Ejemplo de cómo debería verse el resultado:
//Precio: 120 | Número generado: 45 | Precio final: 108 (10% de descuento)
//Precio: 75 | Número generado: 65 | Precio final: 60 (20% de descuento)
//Precio: 40 | Número generado: 30 | Precio final: 36 (10% de descuento)

//CAMINO CORTO
const applyDiscount = (price) => {
  const randomNumber = Math.floor(Math.random()*100)
  const discount = randomNumber < price ? `${price - price*0.1} (10% de descuento)` : `${price - price*0.2} (20% de descuento)`
  return discount
}

const discountsPerPrices = (pricesList) => {
  const firstPrice = applyDiscount(pricesList[0])
  console.log((`Precio original: ${pricesList[0]} || Número originado: ${applyDiscount()} || Precio final: ${firstPrice}`));
   
}
discountsPerPrices([120, 75, 40])

//CAMINO LARGO
const discountPerPrice = (precios) => {
  const firstPrice = Math.floor(Math.random()*100)
  const firstDiscount = firstPrice < precios[0] ? `${precios[0] - precios[0]*0.1} (10% de descuento)` : `${precios[0] - precios[0]*0.2} (20% de descuento)`


  console.log(`Precio original: ${precios[0]} || Número originado: ${firstPrice} || Precio final: ${firstDiscount}`);

  const secondPrice = Math.floor(Math.random()*100)
  const secondDiscount = secondPrice < precios[1] ? `${precios[1] - precios[1]*0.1} (10% de descuento)` : `${precios[1] - precios[1]*0.2} (20% de descuento)`

  console.log(`Precio original: ${precios[0]} || Número originado: ${secondPrice} || Precio final: ${secondDiscount}`);
}
discountPerPrice([120, 75])

//Sabrina está en un restaurante con dos amigos. Recibe un array con tres cuentas, por ejemplo: [120, 75, 93]. Cada cuenta debe dividirse entre 3 para pagar de manera justa. Si el resultado de la división es impar, debe redondearse al número par más cercano. Sabrina debe imprimir el precio original, el precio dividido y el precio final (redondeado si es necesario) para cada cuenta.

//Ejemplo de cómo debería verse el resultado:
//Cuenta original: 120 | Dividido: 40 | Precio final: 40
//Cuenta original: 75 | Dividido: 25 | Precio final: 26 (Redondeado al número par más cercano)
//Cuenta original: 93 | Dividido: 31 | Precio final: 32 (Redondeado al número par más cercano)

//CAMINO CORTO

const calculatePriceAccount = (price) => {
  const dividedPrice = price/3
  const dividedPriceResult = dividedPrice % 2 === 0 ? dividedPrice : Math.round(dividedPrice)
  return dividedPriceResult
}

const calculateListPrices = (listCount) => {

  console.log(`Cuenta original: ${listCount[0]} | Dividido: ${listCount[0]/3} | Precio final: ${calculatePriceAccount(listCount[0])}`)

  console.log(`Cuenta original: ${listCount[1]} | Dividido: ${listCount[1]/3} | Precio final: ${calculatePriceAccount(listCount[1])}`)
  
}

calculateListPrices([120, 40])


//CAMINO LARGO (se repetirían 3 veces las constantes firstDividedCount...con el segundo y el tercero)

const priceAccount = (price) => {
  const firstDividedCount = price[0]/3
  const firstDividedCountResult = firstDividedCount % 2 === 0 ? firstDividedCount : Math.round(firstDividedCount)
  //console.log(`Cuenta original: ${price[0]} | Dividido: ${firstDividedCount} | Precio final: ${firstDividedCountResult}`)

  const secondDividedCount = price[1]/3
  const secondDividedCountResult = secondDividedCount % 2 === 0 ? secondDividedCount : Math.round(secondDividedCount)
  //console.log(`Cuenta original: ${price[1]} | Dividido: ${secondDividedCount} | Precio final: ${secondDividedCountResult}`)
}

priceAccount([50,120,40])


//Macarena quiere calcular la edad de tres clientes. Recibe un array con tres años de nacimiento entre 1950 y 2010. Sabiendo que estamos en el año 2025, debe calcular la edad de cada uno y determinar si al menos uno es mayor de 18. Si hay al menos un cliente mayor de edad, imprimirá "Hay un cliente mayor de edad", si no, "Todos son menores de edad".

const calculateClientsAges = (bornYear) => {
  const firstClientsAge = 2025 - bornYear[0]
  const secondClientsAge = 2025 - bornYear[1]
  const thirdClientsAge = 2025 - bornYear[2]

  if (firstClientsAge > 18 || secondClientsAge > 18 || thirdClientsAge > 18) {
    console.log('Hay un cliente mayor de edad');
  } else {console.log('Todos son menores de edad *procede a venderles alchohol')}
}
calculateClientsAges([2008, 2010, 2009])


//Abby encontró un código de seguridad con tres números entre 100 y 999. Si el primer número es mayor que el segundo pero menor que el tercero, imprimirá "Código válido", si no, "Código incorrecto".

const segurityCode = (code) => {

  if (code[0] > code[1] && code[0] < code[2] ) {
    console.log('Código válido');
  } else {console.log('Código inválido')
  }
}
segurityCode([15, 13, 11])


//Camila está organizando la lista de clientes de su tienda. Un cliente nuevo, "Lucía", llega y debe agregarse al final de la lista de clientes: ["Carlos", "María", "Sofía"]. Luego, debe mostrar cuántos clientes hay en la lista.

//no sé si names.push necesita ser una constante.

const clientList = (names) => {
  console.log(`Hay ${names.length} personas en la lista`);
  names.push('Lucía')
  console.log(`${names[names.length - 1]} se añadió a la lista, ahora hay ${names.length} personas.`)
}
clientList(["Carlos", "María", "Sofía"])


//Bego está revisando el stock de su tienda. Un producto aleatorio ya no está disponible y debe ser eliminado de la lista: ["Pan", "Leche", "Huevos"]. Después, debe mostrar cuántos productos quedan.

//Me hubiera gustado que se plasmara la lista pero sin el aleatoryItem, pero no he sabido hacerlo.

const stockAvailable = (products) => {
  console.log(`Tienes ${products.length} productos en stock: ${products}`);
  const aleatoryItem = Math.floor(Math.random()*3)

  console.log(`El producto ${products[aleatoryItem]} se ha eliminado de la lista. Tienes ${products.length-1} productos en stock.`);
  
}
stockAvailable(["Pan", "Leche", "Huevos"])


//Sabrina está registrando pedidos en un restaurante. Un nuevo pedido, "Pizza", ha sido añadido en primer lugar a la lista de pedidos: ["Hamburguesa", "Ensalada"]. Luego, debe imprimir el primer pedido en la lista.

//¿hay que poner una constante en order.unshift? aunque luego no se use?

const restaurantOrders = (orders) => {
  orders.unshift('Pizza')
  console.log(`${orders}`);
}
restaurantOrders(["Hamburguesa", "Ensalada"])

//Macarena está revisando las reservas de su hotel. Un cliente canceló su reserva en la lista: ["Habitación 101", "Habitación 203", "Habitación 305"]. Luego, debe mostrar cuántas reservas quedan.

//¿Se supone que solo hay que mostrar esto?

const reservedRooms = (rooms) => {
  const roomsLeft = rooms.length - 1
  console.log(`Hay ${roomsLeft} reservas`);
}
reservedRooms(["Habitación 101", "Habitación 203", "Habitación 305"])

//Abby encontró una lista de suministros en un refugio, por ejemplo: ["Botiquín", "Munición", "Agua", "Comida"]. Necesita asegurarse de que hay "Munición" y "Comida" disponibles. Si ambos están en la lista, debe mostrar "Suministros completos". Si falta alguno, debe mostrar "Suministros incompletos".

const shelterSupplies = (supplies) => {
  if (supplies.includes('Munición') && supplies.includes('Comida')) {
    console.log('Suministros completos');
  } else {console.log('Suministros incompletos');
  }
}
shelterSupplies(["Munición", "Botiquín", "Agua", "Comida"])

//Camila está organizando una lista de espera. Un cliente importante, "Fernando", debe ser colocado en la primera posición de la lista: ["Ana", "Luis", "Elena"]. Luego, debe mostrar quién es el último en la lista.

const waitingList = (clients) => {
  const vipClient = clients.unshift('Fernando')
  console.log(`La lista de espera es: ${clients}. Al último, ${clients[clients.length-1]}, le tocará esperar 30 minutos`);
}
waitingList(["Ana", "Luis", "Elena"])

//Bego tiene una caja registradora con pagos pendientes. Ha procesado el primer pago en la lista de pagos y debe eliminarlo: [15.50, 32.75, 8.99]. Luego, debe mostrar cuántos pagos quedan por procesar.

const cashRegister = (payments) => {
  const paymentsDone = payments.shift()
  console.log(`Quedan ${payments.length} pagos pendientes`);
}
cashRegister([15.50, 32.75, 8.99])

//Sabrina está actualizando el menú de su restaurante. Un nuevo plato, "Pasta", ha sido agregado a la lista de platos: ["Sopa", "Carne asada"], y el último ha sido eliminado. Luego, debe mostrar la lista de platos.

const menuActualiced = (plates) => {
  const newPlates = plates.unshift('Pasta')
  const eliminatedPlates = plates.pop()
  console.log(`${plates}`);
}
menuActualiced(["Sopa", "Carne asada"])

//Macarena está organizando un torneo. Un nuevo jugador, "Diego", se ha inscrito y reemplazará al último de la lista de jugadores: ["Hugo", "Mateo", "Álvaro"]. Luego, debe mostrar la cantidad total de jugadores inscritos.

const tennisTournamentAttendees = (atendees) => {
  const atendeesReplacement = atendees.pop() + atendees.push('Diego')
  console.log(`Habrá ${atendees.length} asistentes`);
}
tennisTournamentAttendees(["Hugo", "Mateo", "Álvaro"])

//Abby está recibiendo señales de radio con mensajes en espera. Ha procesado el mensaje más antiguo de la lista: ["Atención, infectados cerca", "Necesitamos refuerzos", "Zona despejada"] y ha recibido uno nuevo: "Solicitamos medicinas". Luego, debe mostrar los mensajes uno por uno en console.log independientes.

const radioSignals = (messages) => {
  const processedMessages = messages.pop()
  const newSignal = messages.unshift('Solicitamos medicinas');
  console.log(messages[0]);
  console.log(messages[1]);
  console.log(messages[2]);
}
radioSignals(["Atención, infectados cerca", "Necesitamos refuerzos", "Zona despejada"])


