import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { fordwardInvoice } from '../actions/http';

export const FordwardInvoice = ({ bill_id, pagination }) => {
  const dispatch = useDispatch();
  const [billId, setBillId] = useState(bill_id);

  useEffect(() => {
    setBillId(bill_id);
  }, [bill_id])

  const handleForwardInvoice = () => {
    console.log(pagination);
    dispatch(fordwardInvoice({ bill_id: billId }, pagination))
  }

  return (
    <>
      <Button onClick={handleForwardInvoice}>Reenviar {billId}</Button>
    </>
  )
}
