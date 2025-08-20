import CoreConcept from './components/core.jsx';
import Header from './components/header.jsx';
import { CORE_CONCEPTS } from "./data.js";
import TabButton from './components/tabButton.jsx';
import { useState } from 'react';
import {EXAMPLES} from './data.js';


function App() {

  const [selectedState, setselectedState] = useState();
  
    function handOnclick(selectedButton){
        setselectedState(selectedButton);
        console.log(selectedState)
    }

let tabContent = <h1>select the topic.</h1>;

if (selectedState){
  tabContent = (
        <div id="tab-content">
            <h3>
              {EXAMPLES[selectedState].title}
            </h3>
            <p>
              {EXAMPLES[selectedState].description}
            </p>
            <pre>
              <code>
                {EXAMPLES[selectedState].code}
              </code>
            </pre>
          </div>
  );
}


  return (
    <div>
     <Header />
      <main>
        <section id="core-concepts">
          <h2>Core concepts</h2>
          
          <ul>
            {CORE_CONCEPTS.map((contentItem) => (
              <CoreConcept {...contentItem}/>
              )) 
              }
     
          </ul>
          

        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
             <TabButton isSelected={selectedState === "components"} onSelect={() => handOnclick("components")}>components</TabButton>
             <TabButton isSelected={selectedState === "jsx"} onSelect={() => handOnclick("jsx")}>JsX</TabButton>
             <TabButton isSelected={selectedState === "state"} onSelect={() => handOnclick("state")}>state</TabButton>
             <TabButton isSelected={selectedState === "props"} onSelect={() => handOnclick("props")}>Props</TabButton>
          </menu> 
        </section>
        {tabContent}
      </main>
    </div>
  );
}

export default App;
