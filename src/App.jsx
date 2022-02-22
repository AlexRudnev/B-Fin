import FormAuth from './form-auth/FormAuth';
import Landing from './landing/Landing';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageClients from './pages/PageClients';
import PageDashboard from './pages/PageDashboard';
import PageAllMoves from './pages/PageAllMoves';
import PageProductsAndServices from './pages/PageProductsAndServices';
import PageOrdersAndSales from './pages/PageOrdersAndSales';
import PageMoney from './pages/PageMoney';
import PagePurchasesAndStorage from './pages/PagePurchasesAndStorage';
import PageReports from './pages/PageReports';
import PageCosts from './pages/pagesOfReports/PageCosts';
import PageDebts from './pages/pagesOfReports/PageDebts';
import PageFinancialResult from './pages/pagesOfReports/PageFinancialResult';
import PageIncome from './pages/pagesOfReports/PageIncome';
import PagePriceList from './pages/pagesOfReports/PagePriceList';
import PageProducts from './pages/pagesOfReports/PageProducts';
import PagePurchasesAndReceipts from './pages/pagesOfReports/PagePurchasesAndReceipts';
import PageReconciliationActs from './pages/pagesOfReports/PageReconciliationActs';
import PageReportMoney from './pages/pagesOfReports/PageReportMoney';
import PageSalesAndOrders from './pages/pagesOfReports/PageSalesAndOrders';
import PageHistory from './pages/PageHistory';
import PageSettings from './pages/PageSettings';
import PageAccept from './pages/pagesOfHeader/PageAccept';
import PageBuy from './pages/pagesOfHeader/PageBuy';
import PageInventory from './pages/pagesOfHeader/PageInventory';
import PagePay from './pages/pagesOfHeader/PagePay';
import PageRetrieve from './pages/pagesOfHeader/PageRetrieve';
import PageSell from './pages/pagesOfHeader/PageSell'; 

// справочник
import PageDirectory from './pages/directory/PageDirectory'
import PageLegalEntities from './pages/directory/PageLegalEntities'
import PageСashAndAccounts from './pages/directory/PageСashAndAccounts';
import PageEmployees from './pages/directory/PageEmployees'
import PageMeasure from './pages/directory/PageMeasure'
import PageStorehouse from './pages/directory/PageStorehouse'
import PageSuppliers from './pages/directory/PageSuppliers'
import PageEmployeesEditing from './pages/directory/PageEmployeesEditing';

import PageInvoice from './pages/PageInvoice';
import PageOrder from './pages/PageOrder';
import PageImportClients from './pages/PageImportClients';
import PageUserEditing from './pages/PageUserEditing';
import './App.css';
import FormpPasswordRecovery from './form-auth/FormpPasswordRecovery';

import { UserIdProvider } from './providers/UserIdProvider';
import { EmployeeIdProvider } from './providers/EmployeeIdProvider'; 

function App() {

  return (
    <UserIdProvider>
      <EmployeeIdProvider>
        <div>
        <Router>
          <Routes>
            <Route path="/registration" element={<FormAuth />} />
            <Route path="/password-recovery" element={<FormpPasswordRecovery />} />
            <Route path="/" element={<Landing />} />
            <Route path="/dashboard" element={<PageDashboard />} />
            <Route path="/allMoves" element={<PageAllMoves />} />
            <Route path="/productsAndService" element={<PageProductsAndServices />} />
            <Route path="/clients" element={<PageClients />} />
            <Route path="/ordersAndSales" element={<PageOrdersAndSales />} />
            <Route path="/money" element={<PageMoney />} />
            <Route path="/purchasesAndStorage" element={<PagePurchasesAndStorage />} /> 
            <Route path="/reports" element={<PageReports />} />
            <Route path="/history" element={<PageHistory />} />

            <Route path="/reports" element={<PageReports />} />
            <Route path="/costs" element={<PageCosts />} />
            <Route path="/debts" element={<PageDebts />} />
            <Route path="/financial-result" element={<PageFinancialResult />} />
            <Route path="/income" element={<PageIncome />} />
            <Route path="/price-list" element={<PagePriceList />} />
            <Route path="/products" element={<PageProducts />} />
            <Route path="/purchases-and-receipts" element={<PagePurchasesAndReceipts />} />
            <Route path="/reconciliation-acts" element={<PageReconciliationActs />} />
            <Route path="/report-money" element={<PageReportMoney />} />
            <Route path="/sales-and-orders" element={<PageSalesAndOrders />} />

            <Route path="/settings" element={<PageSettings />} />
            <Route path="/editing" element={<PageUserEditing />} />
            <Route path="/import_clients" element={<PageImportClients />} /> 

          <Route path="/accept" element={<PageAccept />} />
          <Route path="/buy" element={<PageBuy />} />
          <Route path="/inventory" element={<PageInventory />} />
          <Route path="/pay" element={<PagePay />} />
          <Route path="/retrieve" element={<PageRetrieve />} />
          <Route path="/sell" element={<PageSell />} />

          {/* справочник  */}
          <Route path="/cash_accounts" element={<PageСashAndAccounts />} />
          <Route path="/directory" element={<PageDirectory />} />
          <Route path="/employees" element={<PageEmployees />} />
          <Route path="/legal_entities" element={<PageLegalEntities />} /> 
          <Route path="/measure" element={<PageMeasure />} />
          <Route path="/storehouse" element={<PageStorehouse />} />
          <Route path="/suppliers" element={<PageSuppliers />} />
          <Route path="/accept" element={<PageAccept />} />
          <Route path="/buy" element={<PageBuy />} />
          <Route path="/inventory" element={<PageInventory />} />
          <Route path="/pay" element={<PagePay />} />
          <Route path="/retrieve" element={<PageRetrieve />} />
          <Route path="/sell" element={<PageSell />} />
          <Route path="/invoice" element={<PageInvoice />} /> 
          <Route path="/order" element={<PageOrder />} /> 
          <Route path="/employees_editing" element={<PageEmployeesEditing />} />
        </Routes>
      </Router>
    </div>
    </EmployeeIdProvider>
  </UserIdProvider>
  );
}
export default App;
