import './App.css';
import AuthUser from './components/AuthUser';
import DashboardNavigate from './Views/DashboardNavigate';
import PublicNavigate from './Views/PublicNavigate';

const baseURL = "http://localhost:8000";


function App() {
  const {getToken}=AuthUser();
  if(!getToken()){
    return <PublicNavigate/>
  }
  return (
    <DashboardNavigate baseURL={baseURL}/>

  );
}

export default App;
