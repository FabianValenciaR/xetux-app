import React from 'react'

const NotAuthorizedInvoices = () => {
  return (
    <div>
      <p>TABLA: [T_POS_EXTERNAL_BILLING_INFO]</p>
      <p>[status] 11 autorizadas != 11 No Autorizadas</p>
      <p>[status] 11 autorizadas != 11 No Autorizadas</p>
      <p>[response] en el response viene un xml con la respuesta del error</p>
      <p>Dibujar una tabla con la informacion  de la respuesta y con filtros para autorizadas y no autorizadas, adicionalmente debe haber un campo que diga corregir cliente y me rediriga a la ruta de clientes con el id del mismo</p>
      <br></br>
      <p>TABLA: [T_POS_CUSTOMER]]</p>
      <p>[customer_identification] Buscar el cliente por su ID y permitir corregir los sieguientes campos</p>
      <p>[customer_type_id]</p>
      <p>[customer_full_identification]</p>
      <p>Aqui recibiremos como path parameter el id del cliente desde el listado de facturas </p>
      <p>O tendremos un input que nos permita ingresar el id para filtrar </p>
      <p>Posteriormente procederemos a actualizar la información necesaria </p>
    </div>
  )
}

export default NotAuthorizedInvoices