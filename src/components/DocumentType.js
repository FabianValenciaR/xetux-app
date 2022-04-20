import React from 'react'

const DocumentType = () => {
  return (
    <div>
      <h1>Configuracion Inicial</h1>
      <p>TABLA: [T_POS_CUSTOMER_TYPE]</p>
      <p>Boton que resetee las configuraciones iniciales con la info que esta en la tabla y con los ids 1, 2, 3 </p>
      <br></br>
      <p>TABLA: [T_POS_CUSTOMER]</p>
      <p>[customer_id] debe ser 1</p>
      <p>[customer_phone] debe ser 0222222222</p>
      <p>[customer_identification] debe ser 0 </p>
      <p>[customer_type_id] debe ser el id del registro de cedula en nuestra tabla 6 pero usualmente sera 2</p>
      <p>[customer_full_identification] debe ser V -</p>
    </div>
  )
}

export default DocumentType