import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

class RootErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('City Grafix Root Error caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f8fafc',
          color: '#0f172a',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          padding: '24px',
          textAlign: 'center'
        }}>
          <div style={{
            maxWidth: '520px',
            background: '#ffffff',
            borderRadius: '24px',
            padding: '32px',
            border: '1px solid #e2e8f0',
            boxShadow: '0 20px 40px -15px rgba(0,0,0,0.07)'
          }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '16px',
              backgroundColor: '#ffe4e6',
              color: '#e11d48',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 16px',
              fontSize: '24px'
            }}>
              ⚠️
            </div>
            <h2 style={{ fontSize: '20px', fontWeight: '900', marginBottom: '8px' }}>
              City Grafix Kadapa
            </h2>
            <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '20px' }}>
              We're loading the latest workshop updates. Please click below to refresh the page.
            </p>
            <button
              onClick={() => window.location.reload()}
              style={{
                backgroundColor: '#e11d48',
                color: '#ffffff',
                border: 'none',
                borderRadius: '12px',
                padding: '12px 24px',
                fontSize: '14px',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
            >
              Refresh Website
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RootErrorBoundary>
      <App />
    </RootErrorBoundary>
  </React.StrictMode>,
)
