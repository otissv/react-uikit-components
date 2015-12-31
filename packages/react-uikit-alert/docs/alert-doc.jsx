'use strict';


import React from 'react';
import Codeblock from '../../react-uikit-codeblock/lib/codeblock.js';



const AlertDoc = (props) => (
  <div>
    <section>
      <h1>React UIkit Alert</h1>
      <p>
        Defines styles for success, warning and error messages.
      </p>
      <p>
        <a href='http://otissv.github.io/react-uikit-components/'>http://otissv.github.io/react-uikit-components</a> for docs.
      </p>
    </section>

      <section>
      <h2>Usage</h2>
      <Codeblock>
{`npm install react-uikit-alert --save;

// ES6
import Alert from 'react-uikit-alert';

// ES5
var Alert = require('react-uikit-alert');
`}
      </Codeblock>
      </section>

    <section>
      <h2>Tests</h2>
      <p>
        <code>npm run test</code> to run tests with minimal output.<br />
        <code>npm run test:spec</code> to run tests with detailed output.<br />
        <code>npm run test:watch</code> watches all directories and run tests with minimal output on file changes.<br />
      </p>
    </section>

    <section>
      <h2>Build</h2>
      <p>
        <code>npm run build</code> to build files fro distribution.<br />
        <code>npm run build:watch</code> watches src directory and builds files on changes.<br />
      </p>
    </section>


    <section>
      <h2>Lint</h2>
      <p>
        <code>npm run lint</code> lints scripts in src directory.<br />
        <code>npm run lint:watch</code> watches src directory and lints scripts in src directory.<br />
      </p>
    </section>

    <section>
      <h2>License</h2>
        <p>MIT</p>
    </section>

  </div>
);


export default AlertDoc;
