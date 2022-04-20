import React from 'react'

const DeleteTransactions = () => {
  return (
    <div>
      <h1>CORRER UN SCRIPT</h1>
      <p>VARIABLES:</p>
      <p>$SEQUENCE_NUMBER = numero de la ultima factura</p>
      <pre>
        update T_POS_ITEM set last_stock = 0
        update T_POS_ITEM_WAREHOUSE set lastStock = 0


        update t_pos_warehouse set is_sale = 1



        DELETE FROM [dbo].[T_POS_EXTERNAL_BILLING_INFO]

        update [T_POS_CONFIG_QR_SEQUENCE_BILL_SEND] set number_secuence = $SEQUENCE_NUMBER
        ALTER SEQUENCE SEQ_NUMBER_BILL_GENERIC_CODE RESTART WITH ($SEQUENCE_NUMBER + 1)

        delete from t_pos_external_billing_info
        delete from T_POS_CASHIER_BY_STATION
        delete from t_pos_merchandise_reception_header
        delete from T_POS_MERCHANDISE_RECEPTION_BODY
        delete from T_POS_MERCHANDISE_RECEPTION_BODY_OTHER_TAX
        delete from T_POS_MERCHANDISE_RECEPTION_BODY_WAREHOUSE
        delete from T_POS_MERCHANDISE_RECEPTION_BRANCH
        delete from T_POS_MERCHANDISE_RECEPTION_HEADER_OTHER_TAX
        delete from T_SYS_PAYMENT_PXP_RECEPTION_BODY
        delete from T_SYS_PAYMENT_PXP_RECEPTION_BODY_DETAIL
        delete from T_SYS_PAYMENT_PXP_RECEPTION_HEADER
        delete from T_SYS_EMPLOYEE_FOOD_BODY
        delete from T_SYS_EMPLOYEE_FOOD_HEADER


        delete from T_PA_PROCESSING_BODY
        delete from T_PA_PROCESSING_HEADER
        delete from T_PA_PROCESSING_TEMPLATE_BODY
        delete from T_PA_PROCESSING_TEMPLATE_HEADER

        delete from T_SYS_CHANGE_STATUS_PRODUCTS
        delete from T_POS_TEAM_USER_HISTORY
        DELETE FROM T_POS_CUSTOMER_SCHEDULE_CONTROL_CONSUMED_LOG
        DELETE FROM T_POS_TIPS_PAID
        delete from dbo.T_SYS_USER_ACCESS_SYSTEM_LOG
        delete from dbo.T_SYS_ACTIONS_LOG
        delete from dbo.T_POS_ORDER_WORKSHIFT_TRANSFER_USER_LOG
        update t_pos_order_product set is_processed = 0
        delete from T_BACKUP_B
        delete from T_BACKUP_B_BILL
        delete from T_BACKUP_B_BILL_BODY
        delete from t_backup_b_header
        delete from T_BACKUP_PORTAL_LOG
        delete from T_BACKUP_PORTAL
        DELETE FROM dbo.T_POS_BILL_QR_MX
        DELETE FROM dbo.T_POS_ORDER_WORKSHIFT_TRANSFER_USER_LOG
        delete from   T_POS_TRANSFER_ORDER_BODY
        delete from T_POS_TRANSFER_ORDER_HEADER
        delete from T_POS_PRODUCTION_BODY
        delete from T_POS_PRODUCTION_HEADER
        delete from T_POS_PRODUCTION_RECIPE_BODY
        delete from T_POS_PRODUCTION_RECIPE_HEADER
        delete from T_POS_ADDITIONAL_KDS_GROUP_ENVIRONMENTS
        delete from T_POS_KDS_GROUP_ENVIRONMENT_PRODUCT
        delete from T_POS_KDS_GROUP_ENVIRONMENTS


        truncate table T_REPORT_BACKEND_SALES_CONSOLIDATE
        truncate table T_REPORT_BACKEND_SALES_CONSOLIDATE_2
        truncate table T_REPORT_BACKEND_SALES_CONSOLIDATE_BY_DISCOUNT
        truncate table T_REPORT_BACKEND_SALES_CONSOLIDATE_BY_PAYFORM
        truncate table T_REPORT_BACKEND_SALES_CONSOLIDATE_BY_PRODUCT_FAMILY
        truncate table T_REPORT_BACKEND_SALES_CONSOLIDATE_ITEM_TYPE
        truncate table T_REPORT_BACKEND_SALES_CONSOLIDATE_ORDER_TYPE
        truncate table T_REPORT_BACKEND_USER_SALES_CONSOLIDATE
        truncate table T_REPORT_BACKEND_USER_SALES_CONSOLIDATE_V2
        truncate table T_REPORT_BACKEND_SALES_SUBGROUPS_PRODUCT
        truncate table T_REPORT_BACKEND_SALES_PRODUCT_FAMILY
        truncate table T_REPORT_BACKEND_PROFITABILITY

        DELETE FROM T_REPORT_BACKEND_SALES_CONSOLIDATE
        DELETE FROM  T_REPORT_BACKEND_SALES_CONSOLIDATE_2
        DELETE FROM T_REPORT_BACKEND_SALES_CONSOLIDATE_BY_DISCOUNT
        DELETE FROM T_REPORT_BACKEND_SALES_CONSOLIDATE_BY_PAYFORM
        DELETE FROM T_REPORT_BACKEND_SALES_CONSOLIDATE_BY_PRODUCT_FAMILY
        DELETE FROM T_REPORT_BACKEND_SALES_CONSOLIDATE_ITEM_TYPE
        DELETE FROM T_REPORT_BACKEND_SALES_CONSOLIDATE_ORDER_TYPE
        DELETE FROM T_REPORT_BACKEND_SALES_PRODUCT_FAMILY
        DELETE FROM T_REPORT_BACKEND_SALES_SUBGROUPS_PRODUCT
        DELETE FROM T_REPORT_BACKEND_SCHEDULE_CONFIG
        DELETE FROM T_REPORT_BACKEND_USER_SALES_CONSOLIDATE
        DELETE FROM T_REPORT_BACKEND_USER_SALES_CONSOLIDATE_V2
        DELETE FROM T_REPORT_PRODUCT_PROFITABILITY
        DELETE FROM T_REPORT_USER_TYPE


        delete from T_POS_CASH_COUNT_DECLARE_HEADER
        delete from T_POS_CASH_COUNT_DECLARE_HEADER_XZ_REPORT
        delete from [T_POS_CASH_COUNT_DECLARE_PAYFORM]
        delete from T_POS_CASH_COUNT_DECLARE_PAYFORM_DETAIL
        delete from T_POS_CASH_COUNT_DECLARE_POINT_OF_SALE
        delete from T_SYS_CASH_COUNT_HEADER
        delete from T_POS_CASH_COUNT_DECLARE_COIN

        DELETE
        FROM  [T_POS_PRODUCTION_HEADER]

        DELETE
        FROM  [T_POS_PRODUCTION_BODY]

        DELETE FROM T_POS_PRODUCTION_RECIPE_BODY

        DELETE FROM T_POS_PRODUCTION_RECIPE_HEADER


        delete from T_POS_TRANSFER_ORDER_BODY
        delete from T_POS_TRANSFER_ORDER_HEADER
        delete from T_REPORT_BACKEND_SALES_PRODUCT_FAMILY
        delete from  T_REPORT_BACKEND_SALES_SUBGROUPS_PRODUCT
        delete from T_SYS_PRINTER_ERROR_LOG
        delete from T_POS_CASH_COUNT_DECLARE_PAYFORM_DETAIL
        delete from T_REPORT_BACKEND_SALES_CONSOLIDATE_BY_PRODUCT_FAMILY
        delete from T_SYS_ACTIONS_SYSTEMS_LOG
        delete from T_POS_PRODUCT_RESTRICTED_JOURNAL_CONSUMED
        delete from T_REPORT_BACKEND_SALES_CONSOLIDATe
        delete from T_REPORT_BACKEND_USER_SALES_CONSOLIDATE
        delete from T_REPORT_BACKEND_USER_SALES_CONSOLIDATE_V2
        delete from T_SYS_LOG_MASTER
        delete from tPOS_ITEM_RECIPE_HISTORICAL
        delete from T_POS_CASH_COUNT_DECLARE_COIN
        delete from T_POS_CASH_COUNT_DECLARE_PAYFORM

        DELETE FROM T_POS_BILL_QR_MX_FAILURE
        delete from T_SYS_MOVEMENTs
        DELETE FROM T_SYS_INVENTORY_WASTE_HEADER
        DELETE FROM T_POS_EXPENSES
        DELETE FROM T_SYS_INVENTORY_WASTE_BODY

        delete from T_SYS_CASH_COUNT_BODY
        delete from T_SYS_CASH_COUNT_HEADER
        delete from T_SYS_INVENTORY_LOG_BODY
        delete from T_SYS_INVENTORY_LOG_HEADER

        delete from T_POS_ORDER_PAYFORMS_DEPOSIT_HISTORY
        delete from T_POS_CONFIG_PAX_LOG_TRANSACTION
        delete from T_SYS_MOVEMENTS where movement_type_id = 1
        delete from T_POS_CUSTOMER_ORDER  --Borramos los clientes
        
        delete from T_POS_BILL_PAYMENT
        delete from T_POS_PAYMENT
        delete from t_pos_bill
        delete from T_POS_ORDER_PRODUCT_ANNULATION --las anulaciones
        delete from T_POS_MESSAGE_PRODUCT -- los mensajes
        delete from T_POS_ORDER_PRODUCT_DISCOUNT --Descuentos
        delete from T_POS_CREDIT_NOTE_BODY --Notas de credito
        delete from T_POS_CREDIT_NOTE
        delete from T_POS_SENT_RECEIPT_BODY--
        delete from T_POS_ORDER_PRODUCT --Productos
        delete from T_POS_PREBILL_PAYMENT --pagos en precuenta
        delete from T_POS_PRE_BILL --Prebill
        delete from T_POS_BILL_PAYMENT
        delete from T_POS_PAYMENT
        delete from T_POS_BILL
        delete from T_POS_MANAGEMENT_RECEIPT
        delete from T_POS_BILL_WARNING_PAYMENT
        delete from T_POS_BILL_WARNING
        delete from T_POS_RAPPI_ORDER
        delete from T_POS_SUBORDER
        delete from T_POS_ORDER
        delete from T_POS_ORDER_PAYFORMS
        delete from T_POS_COMO_SUBMIT_PURCHASE_LOG
        delete from T_POS_COMO_PAY_WITH_BUDGET_LOG
        delete from T_POS_ORDER_PAYFORMS_DEPOSIT

        delete from T_POS_ORDER_PAYFORMS_DEPOSIT
        delete from T_POS_ORDER_PAYFORMS_DEPOSIT_HISTORY
        ---------------------------------
        delete from T_SYS_SPACE_SESSION_TOKEN
        delete from T_SYS_USER_SESSION_TOKEN
        update T_POS_SPACE set space_status_id = 0
        delete T_SYS_XZ_REPORT

        delete from T_POS_JOURNAL

        update T_SYS_PARAMETERS set parameter_value = 0
        where parameter_id = 7

        dbcc checkident ('T_POS_ORDER',reseed,0)
        dbcc checkident ('T_POS_SUBORDER',reseed,0)
        dbcc checkident ('T_POS_ORDER_PRODUCT',reseed,0)
        dbcc checkident ('T_POS_ORDER_PRODUCT_DISCOUNT',reseed,0)
        dbcc checkident ('T_POS_BILL',reseed,$SEQUENCE_NUMBER)

        update T_POS_CONFIG_QR_SEQUENCE_BILL_SEND set number_secuence = $SEQUENCE_NUMBER
      </pre>
    </div>
  )
}

export default DeleteTransactions