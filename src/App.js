import BannerImage from './components/BannerImage';
import PhotoEntry from './components/PhotoEntry';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BannerImage />
        <div>
          <h1>Welcome to My Photojournal</h1>
          <h3>Nikhil Pandey</h3>
          <PhotoEntry src="berlin.jpg" location="Location" caption="Caption" />
        </div>
       
      </header>
    </div>
  );
}

export default App;
