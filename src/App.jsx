import './App.css';
// import FormAuth from './form-auth/FormAuth';
import Sidebar from './sidebar/Sidebar';
import EnhancedTable from './clients/Clients';

function App() {
  return (
    <div>
      <Sidebar />
      {/* <FormAuth /> */}
      <section class="home-section">
        <div class="home-content">
          <EnhancedTable />
        </div>
      </section>

    </div>
  );
}

export default App;
