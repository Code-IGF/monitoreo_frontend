import './App.css';
import AuthUser from './components/AuthUser';
import DashboardNavigate from './Views/DashboardNavigate';
import PublicNavigate from './Views/PublicNavigate';


function App() {
  const {getToken}=AuthUser();
  if(!getToken()){
    return <PublicNavigate/>
  }
  return (
    <DashboardNavigate/>

  );
}

export default App;
