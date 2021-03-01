import {useState} from 'react';
import './App.sass';

function App() {
  const arrays = {
    0: {
      0: {
        value: 'Hello',
        access: false,
      },
      1: {
        value: 'how',
        access: false,
      },
      2: {
        value: 'are',
        access: false,
      },
      3: {
        value: 'you',
        access: false,
      },
      4: {
        value: 'my',
        access: false,
      },
      5: {
        value: 'friend',
        access: false,
      },
    },
    1: {
      0: {
        value: 'My',
        access: false,
      },
      1: {
        value: 'name',
        access: false,
      },
      2: {
        value: 'is',
        access: false,
      },
      3: {
        value: 'Farhat',
        access: false,
      },
      4: {
        value: 'my',
        access: false,
      },
      5: {
        value: 'friend',
        access: false,
      },
    },
  }
  const randomTextNumber = Math.floor(Math.random() * Math.floor(Object.keys(arrays).length));
  const [text, setText] = useState(arrays[randomTextNumber]);
  const [valInput, setValInput] = useState('');



  const inputHandler = (event) => {
    event.preventDefault();
    const {value} = event.target;
    let i = 0;
    while (text[i].access) {
      i++;
    }
    if (`${text[i].value}` === `${value}`) {
      text[i].access = true;
      if (i === Object.keys(text).length - 1) {
        Object.keys(text).map(item => text[item].access = false);
        const randomTextNumber = Math.floor(Math.random() * Math.floor(Object.keys(arrays).length));

        setText(arrays[randomTextNumber]);
      }
      setValInput('');
    } else {
      setValInput(value.slice(0, text[i].value.length).trim());
    }
  }

  const keyDown = (event) => {
    const key = (event.keyCode) ? event.keyCode : event.which;
    const selectors = document.querySelectorAll(`.key.k${key}`);
    [...selectors].map(selector => selector.classList.add('active'));
  }

  const keyUp = (event) => {
    const key = (event.keyCode) ? event.keyCode : event.which;
    const selectors = document.querySelectorAll(`.key.k${key}`);
    [...selectors].map(selector => selector.classList.remove('active'));
  }

  return (
    <>
      <div className="input">
        <p>
          {Object.keys(text).map((index) => <span key={index} className={
            text[index].access ? 'access' : ''
          }>{text[index].value} </span> )}
        </p>
        <input type="text" value={valInput} onChange={inputHandler} onKeyDown={keyDown} onKeyUp={keyUp} placeholder="Start typing..."/>
      </div>

      <div className="key-wrapper">

        <ul className="row">
          <li className="key k81">q</li>
          <li className="key k87">w</li>
          <li className="key k69">e</li>
          <li className="key k82">r</li>
          <li className="key k84">t</li>
          <li className="key k89">y</li>
          <li className="key k85">u</li>
          <li className="key k73">i</li>
          <li className="key k79">o</li>
          <li className="key k80">p</li>
        </ul>

        <ul className="row">
          <li className="key k65">a</li>
          <li className="key k83">s</li>
          <li className="key k68">d</li>
          <li className="key k70">f</li>
          <li className="key k71">g</li>
          <li className="key k72">h</li>
          <li className="key k74">j</li>
          <li className="key k75">k</li>
          <li className="key k76">l</li>
        </ul>

        <ul className="row">
          <li className="key k90">z</li>
          <li className="key k88">x</li>
          <li className="key k67">c</li>
          <li className="key k86">v</li>
          <li className="key k66">b</li>
          <li className="key k78">n</li>
          <li className="key k77">m</li>
          <li className="key k188">,</li>
        </ul>

        <ul className="row">
          <li className="key k32"></li>
        </ul>
      </div>

      <div className="key-wrapper">
        <ul className="row">
          <li className="key k81">q</li>
          <li className="key k87">w</li>
          <li className="key k69">e</li>
          <li className="key k82">r</li>
          <li className="key k84">t</li>
          <li className="key k89">y</li>
          <li className="key k85">u</li>
          <li className="key k73">i</li>
          <li className="key k79">o</li>
          <li className="key k80">p</li>
        </ul>

        <ul className="row">
          <li className="key k65">a</li>
          <li className="key k83">s</li>
          <li className="key k68">d</li>
          <li className="key k70">f</li>
          <li className="key k71">g</li>
          <li className="key k72">h</li>
          <li className="key k74">j</li>
          <li className="key k75">k</li>
          <li className="key k76">l</li>
        </ul>

        <ul className="row">
          <li className="key k90">z</li>
          <li className="key k88">x</li>
          <li className="key k67">c</li>
          <li className="key k86">v</li>
          <li className="key k66">b</li>
          <li className="key k78">n</li>
          <li className="key k77">m</li>
          <li className="key k188">,</li>
        </ul>

        <ul className="row">
          <li className="key k32"></li>
        </ul>
      </div>
    </>
  );
}

export default App;