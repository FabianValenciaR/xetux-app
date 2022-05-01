import React, { useEffect, useState } from 'react'
import LoadingOverlay from 'react-loading-overlay'
import BounceLoader from 'react-spinners/BounceLoader'

import Sidebar from './components/Sidebar'
import Login from './pages/Login'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TimeZone from './components/TimeZone'
import RequireAuth from './components/RequireAuth'
import ReceiptParameters from './components/ReceiptParameters'
import InvoiceParameters from './components/InvoiceParameters'
import EmailSales from './components/EmailSales'
import SalesToXONE from './components/SalesToXONE'
import DashboardsBi from './components/DashboardsBi'
import InvoiceInitialConfig from './components/InvoiceInitialConfig'
import CurrencyConfig from './components/CurrencyConfig'
import PaymentMethod from './components/PaymentMethod'
import DocumentType from './components/DocumentType'
import DeleteTransactions from './components/DeleteTransactions'
import NotAuthorizedInvoices from './components/NotAuthorizedInvoices'
import ClientCorrections from './components/ClientCorrections'
import RoundCorrections from './components/RoundCorrections'
import { FordwardInvoice } from './components/FordwardInvoice'
import { useSelector } from 'react-redux'


const LoaderWrapper = () => {
    const loading = useSelector((state) => state.ui.loading);
    const [isLoading, setIsLoading] = useState(loading)

    useEffect(() => {
        setIsLoading(loading)
    }, [loading])


    return (
        <LoadingOverlay
            active={isLoading}
            spinner={<BounceLoader color='#1976d2' />}
            styles={{
                overlay: (base) => ({
                    ...base,
                    zIndex: 99999,
                    height: "100vh",
                    backgroundColor: "#022547ba"
                })
            }}
        >
            <BrowserRouter>
                <Routes>
                    <Route path='/home/*' element={<Home />}>
                        {/* CONFIGURACION GENERAL */}
                        <Route path='time-zone' element={<TimeZone />} />
                        <Route path='receipt-parameters' element={<RequireAuth component={<ReceiptParameters />} />} />
                        <Route path='invoice-parameters' element={<InvoiceParameters />} />
                        <Route path='email-sales' element={<EmailSales />} />
                        <Route path='sales-xone' element={<SalesToXONE />} />
                        <Route path='dashboards-bi' element={<DashboardsBi />} />

                        {/* FACTURAS ELECTRÓNICAS */}
                        <Route path='invoice-init' element={<InvoiceInitialConfig />} />
                        <Route path='currency-config' element={<CurrencyConfig />} />
                        <Route path='payment-method' element={<PaymentMethod />} />
                        <Route path='document-type' element={<DocumentType />} />
                        <Route path='delete-transactions' element={<DeleteTransactions />} />

                        {/* FACTURAS ELECTRÓNICAS */}
                        <Route path='not-authorized-invoices' element={<NotAuthorizedInvoices />} />
                    </Route>
                    <Route path='/sidebar' element={<Sidebar />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/*' element={<Login />} />
                </Routes>
            </BrowserRouter>
        </LoadingOverlay>
    )
}

export default LoaderWrapper