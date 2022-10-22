import React, {useState} from "react";
import '../styles/App.css'
import { BrowserRouter, Route ,Routes} from 'react-router-dom';
import CompaniesList from "./companies/ComponiesList";
import CompanyAdd from "./companies/CompanyAdd";
import CompanyEdit from "./companies/CompanyEdit";
import CompanyDetail from './companies/CompanyDetail';



function App() {
  
  return (
    <div className="container customcontainer">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<CompaniesList />} />
          <Route path="/company/add" element={<CompanyAdd />} />
          <Route path="/company/edit/:id" element={<CompanyEdit />} />
          <Route path="/company/detail/:id" element={<CompanyDetail />} />
        </Routes>
      </BrowserRouter>
        
       
    </div>
  );
}

export default App;
