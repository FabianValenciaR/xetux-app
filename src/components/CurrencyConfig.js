import React from 'react'

const CurrencyConfig = () => {
  return (
    <div>
      <h1>Configuracion Inicial</h1>
      <p>TABLA: [T_POS_CURRENCY]</p>
      <p>En la nueva configuración el registro 1 vendrá con USD</p>
      <p>[currency_description] USD</p>
      <p>[is_default] 1</p>
      <p>[alternative_print] 1</p>
      <p>[currency_symbol] USD</p>
      <p>etc</p>
      <p>Es decir tal cual está ahorita el segundo registro no debería existir solo el USD</p>
      <p>Borrar todo registro que no sea USD</p>
      <br></br>
      <p>TABLA: [T_POS_CURRENCY_COIN]</p>
      <p>Hay que dejar solo los que dicen 1, que son correspondientes
        a los billetes de 1,5,10,20,etc
      </p>
      <br></br>
      <p>TABLA: [T_POS_CURRENCY_EQUIVALENCY]</p>
      <p>En esta tabla se debe mantener todo tal cual está con la excepción que hay que invertir los campos actuales</p>
      <p>[base_currency_id] 1</p>
      <p>[second_currency_id] 2</p>
      <br></br>
      <p>TABLA: [T_POS_CURRENCY]=[T_XSC_POS_CURRENCY]</p>
      <p>Execute same script but with different tableName</p>
      <br></br>
      <p>TABLA: [T_POS_CURRENCY_EQUIVALENCY]=[T_XSC_POS_CURRENCY_EQUIVALENCY]</p>
      <p>Execute same script but with different tableName</p>
      <br></br>
      <br></br>
      <p>Seria bueno hacer un select del factor por que puede venir en 17, igual el math operator, math operator factor, hay que actualizarlos a 1 siempre</p>
      <p>Un approach correcto seria boton consulta factor de conversi[on</p>
      <p>Otro boton que diga conversion a USD y haga todos los querys por detras</p>

    </div>)
}

export default CurrencyConfig