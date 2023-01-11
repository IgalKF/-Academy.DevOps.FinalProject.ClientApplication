import { createRef, useRef, useState } from 'react';
import './App.css';
import InputIndicator from './ui-components/input-indicator';
import TextArea from './ui-components/text-area';

function App() {

  const [textChanged, setTextChanged] = useState('');
  const ref = useRef<HTMLTextAreaElement>(document.createElement('textarea'));

  return (
    <div className="App">
      <header className="App-header">
        <h1>Best DevOps Project</h1>
        <InputIndicator textToFind='lol' inputReference={ref}></InputIndicator>
        <TextArea textChanged={setTextChanged} ref={ref}></TextArea>
      </header>
    </div>
  );
}

export default App;
