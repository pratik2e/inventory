import {Routes,Route} from 'react-router-dom';
import BillingPage from './pages/billings/billing';
import InventoryPage from '../src/pages/inventory/Inventory';
import  Toll from '../src/pages/toll kanta/tollkanta.jsx'
import LoginPage from '../src/pages/login/Login.jsx'
import Raise from './pages/raiserequest/raise';
import Demand from './pages/demandrequest/demand';

function MyRoutes() {
  return (
    <Routes>
        <Route path="/inventory" element={<InventoryPage/>}/>
        <Route path="/billing" element={<BillingPage/>}/>
        <Route path="/toll kanta" element={<Toll/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/demandrequest" element={<Demand/>}/>
        <Route path="/raiserequest" element={<Raise/>}/>
    </Routes>
  )
}

export default MyRoutes