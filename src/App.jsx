import './App.css';
import FormAuth from './form-auth/FormAuth';
import Landing from './landing/Landing';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EnhancedTable from './clients/Clients';
import Dashboard from './dashboard/Dashboard';
import AllMoves from './allMoves/AllMoves';
import ProductsAndServices from './productsAndServices/ProductsAndServices';
import OrdersAndSales from './ordersAndSales/OrdersAndSales';
import Money from './money/Money';
import PurchasesAndStorage from './purchasesAndStorage/PurchasesAndStorage';
import Reports from './reports/Reports';
import History from './history/History';
import Settings from './settings/Settings';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/registration" element={<FormAuth />} />
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/allMoves" element={<AllMoves />} />
          <Route path="/productsAndService" element={<ProductsAndServices />} />
          <Route path="/clients" element={<EnhancedTable />} />
          <Route path="/ordersAndSales" element={<OrdersAndSales />} />
          <Route path="/money" element={<Money />} />
          <Route path="/purchasesAndStorage" element={<PurchasesAndStorage />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/history" element={<History />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/settings" element={<Settings />} />

        </Routes>
      </Router>
    </div>
  );
}
export default App;
