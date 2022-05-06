import { TYPES } from "../constants/types";

const initialState = {
    time_zone: "",
    dashboard_config: [],
    generic_select: [],
    xone_config: [],
    payment_methods: [],
    notification_emails: [],
    invoice_config: [],
    invoices: [],
    pagination: {},
    client_information: [],
    customer_types: [],
}

export const dbReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.dbSetGenericSelect:
            return {
                ...state,
                generic_select: action.payload
            }

        case TYPES.dbSetTimeZone:
            return {
                ...state,
                time_zone: action.payload
            }

        case TYPES.dbSetReceiptParameter:
            return {
                ...state,
                8: action.payload["8"],
                12: action.payload["12"],
                20: action.payload["20"],
                21: action.payload["21"]
            }

        case TYPES.dbSetNotificationEmails:
            return {
                ...state,
                notification_emails: action.payload
            }

        case TYPES.dbSetXoneConfig:
            return {
                ...state,
                xone_config: action.payload
            }

        case TYPES.dbSetDashboardConfig:
            return {
                ...state,
                dashboard_config: action.payload
            }

        case TYPES.dbSetPaymentMethods:
            return {
                ...state,
                payment_methods: action.payload
            }

        case TYPES.dbSetInvoiceConfig:
            return {
                ...state,
                invoice_config: action.payload
            }

        case TYPES.dbSetInvoices:
            return {
                ...state,
                invoices: action.payload.invoices,
                pagination: action.payload.pagination
            }

        case TYPES.dbSetClientInformation:
            return {
                ...state,
                client_information: action.payload
            }

        case TYPES.dbSetCustomerTypes:
            return {
                ...state,
                customer_types: action.payload
            }

        default:
            return state
    }

}