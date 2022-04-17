import React from 'react'
import Sidebar from './components/Sidebar'
import Login from './pages/Login'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TimeZone from './components/TimeZone'
import RequireAuth from './components/RequireAuth'
import { Provider } from 'react-redux'
import { store } from './store/store'
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
import SecuentialChange from './components/SecuentialChange'
import NotAuthorizedInvoices from './components/NotAuthorizedInvoices'
import ClientCorrections from './components/ClientCorrections'
import RoundCorrections from './components/RoundCorrections'
import { FordwardInvoice } from './components/FordwardInvoice'

const App = () => {

  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path='/home/*' element={<Home />}>
              <Route path='time-zone' element={<TimeZone />} />
              <Route path='receipt-parameters' element={<ReceiptParameters />} />
              <Route path='invoice-parameters' element={<InvoiceParameters />} />
              <Route path='email-sales' element={<EmailSales />} />
              <Route path='sales-xone' element={<SalesToXONE />} />
              <Route path='dashboards-bi' element={<DashboardsBi />} />
              <Route path='invoice-init' element={<RequireAuth component={<InvoiceInitialConfig />} />} />
              <Route path='currency-config' element={<RequireAuth component={<CurrencyConfig />} />} />
              <Route path='payment-method' element={<RequireAuth component={<PaymentMethod />} />} />
              <Route path='document-type' element={<RequireAuth component={<DocumentType />} />} />
              <Route path='delete-transactions' element={<RequireAuth component={<DeleteTransactions />} />} />
              <Route path='secuential-change' element={<RequireAuth component={<SecuentialChange />} />} />
              <Route path='not-authorized-invoices' element={<RequireAuth component={<NotAuthorizedInvoices />} />} />
              <Route path='client-corrections' element={<RequireAuth component={<ClientCorrections />} />} />
              <Route path='round-corrections' element={<RequireAuth component={<RoundCorrections />} />} />
              <Route path='fordward-invoice' element={<RequireAuth component={<FordwardInvoice />} />} />
            </Route>
            <Route path='/sidebar' element={<Sidebar />} />
            <Route path='/login' element={<Login />} />
            <Route path='/*' element={<Login />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App