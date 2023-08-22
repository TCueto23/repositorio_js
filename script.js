function calcularDescuento(total, porcentaje){
    let descuento = total * (porcentaje/100);
    return descuento;
}

let montoFinal = parseFloat(prompt('Bienvenido!, Ingrese el monto total de su compra'));

let modoDePago = prompt('Modo de pago\n1-Efectivo\n2-Debito\n3-Credito\n4-Transferencia Bancaria\n5-Criptos');
switch(modoDePago){
    case '1':
        let descuentoEfectivo = calcularDescuento(montoFinal,30);
        alert('Tiene un descuento de $'+descuentoEfectivo);
        break;
    case '2':
        let descuentoDebito = calcularDescuento(montoFinal,15);
        alert('Tiene un descuento de $'+descuentoDebito);
        break;
    case '3':
        let descuentoCredito = 0;
        alert('Tiene un descuento de $'+descuentoCredito);
    case '4':
        let descuentoTransferenciaBancaria = calcularDescuento(montoFinal,1,2);
        alert('Tiene un descuento de $'+descuentoTransferenciaBancaria);
        break;
    case '5':
        let descuentoCripto = calcularDescuento(montoFinal,15);
        alert('Tiene un descuento de $'+descuentoCripto);
    default:
        alert('Error');
        break;
} 