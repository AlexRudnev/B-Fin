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


import PageUserEditing from './pages/PageUserEditing';
import './App.css';

import FormpPasswordRecovery from './form-auth/FormpPasswordRecovery';


function App() {
  return (
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
        </Routes>
      </Router>
    </div>
  );
}
export default App;
