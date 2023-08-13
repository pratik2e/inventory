import {Routes,Route} from 'react-router-dom';
import BillingPage from './pages/billings/billing';
import InventoryPage from './pages/inventory/inventory';


function MyRoutes() {
  return (
    <Routes>
        <Route path="/billing" element={<BillingPage/>}/>
        <Route path="/inventory" element={<InventoryPage/>}/>
    </Routes>
  )
}

export default MyRoutes