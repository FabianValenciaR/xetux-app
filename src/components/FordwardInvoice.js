import React from 'react'

export const FordwardInvoice = () => {
  return (
    <div>
      <p>TABLA: [T_POS_EXTERNAL_BILLING_INFO]</p>
      <p>Con el campo [bill_id]  consultar el registro</p>
      <p>[status] sera 0</p>
      <p>[created_at] getdate from sql siempre que no hayan pasado 30 dias. VALIDAR</p>
      <p>Su factura no puede ser actualizada fuera de rango</p>
      <p>[updated_at], [response], [request] a NULL</p>
    </div>
  )
}
