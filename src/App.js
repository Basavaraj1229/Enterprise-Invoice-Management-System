import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import InvoiceForm from './components/InvoiceForm';

class App extends Component {
  render() {
  return (
    <div className="App d-flex flex-column align-items-center justify-content-center w-100">
      <header className="app-header w-100 py-4">
        <Container className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <div className="brand-badge me-3">💼</div>
            <div>
              <h1 className="app-title mb-0">Invoice Generator</h1>
              <div className="app-subtitle small text-muted">Create, preview and download invoices</div>
            </div>
          </div>
        </Container>
      </header>
      <main className="w-100 py-4">
        <Container>
          <InvoiceForm/>
        </Container>
      </main>
    </div>
  );
}}

export default App;
