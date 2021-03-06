import './App.css';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <h1>Links App</h1>
      <nav
        style={{
          borderBottom:'1px solid'
        }}
        >
          <Link to='/'>Links</Link> - {' '}
          <Link to='/about'>About</Link> - {' '}
          <Link to='/links/new'>New link</Link> - {' '}
        </nav>
        <p>Outlet component here</p>
        <Outlet />
    </div>
  );
}

export default App;