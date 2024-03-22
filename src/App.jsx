import './App.scss'
import Spacer from './components/UI/spacer/Spacer';
import PorfileHead from './components/porfileHead/PorfileHead'
import ProfileBody from './components/profileBody/ProfileBody'

function App() {

  return (
    <>
      <PorfileHead />
      <Spacer height={46}/>
      <ProfileBody />
    </>
  );
}

export default App
