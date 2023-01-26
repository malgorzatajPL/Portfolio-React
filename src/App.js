import About from './components/About';
import { ContactUs } from './components/Email';
import Hero from './components/Hero';
import MyExperience from './components/MyExperience';
import MySkills from './components/MySkills';

function App() {
  return (
    <>
      <Hero />
      <About />
      <MySkills />
      <MyExperience />
      <ContactUs />
    </>
  );
}

export default App;
