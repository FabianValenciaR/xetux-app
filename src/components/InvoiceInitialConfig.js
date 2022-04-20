import React from 'react'

const InvoiceInitialConfig = () => {


  return (
    <div>
      <h1>Configuracion Inicial</h1>
      <p>TABLA: T_POS_WEB_SALES_CONFIG</p>
      <p>Descripción: </p>
      <p>external_system_id siempre es 11 </p>
      <p>external_store_id es el numero de sucursal *</p>
      <p>auth_user 117 prod 21 pruebas * </p>
      <p>auth_password da el transportador *</p>
      <p>activated es 1 </p>
      <p>url_root lo da el transportador *</p>
      <p>url_root_2 es el punto de emicion *</p>
      <p>[classifier] 1 pruebas 2 producción</p>
      <br></br>
      <p>TABLA: [T_XSC_SINC_AFTER]</p>
      <p>Exite un query de creación del registro y puede estar con cualquier numero de punto de emision, sucursal, clave, etc.</p>
    </div>
  )
}

export default InvoiceInitialConfig

