import React, {useState} from "react";
import '../styles/App.css'
import { BrowserRouter, Route ,Routes} from 'react-router-dom';
import CompaniesList from "./companies/ComponiesList";
import CompanyCreate from "./companies/CompanyCreate";
import CompanyEdit from "./companies/CompanyEdit";
import CompanyShow from './companies/CompanyShow';
import CompanyDelete from './companies/CompanyDelete'



function App() {
  
  return (
    <div className="container customcontainer">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<CompaniesList />} />
          <Route path="/company/new" element={<CompanyCreate />} />
          <Route path="/company/edit/:id" element={<CompanyEdit />} />
          <Route path="/company/delete" element={<CompanyDelete />} />
          <Route path="/company/show/:id" element={<CompanyShow />} />
        </Routes>
      </BrowserRouter>
        
       
    </div>
  );
}

export default App;
