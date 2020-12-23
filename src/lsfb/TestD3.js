import React from 'react';
import SignEmbedding from './d3-components/SignEmbedding'

function TestD3(props) {
    return (
      <section className="bg-white py-8">
        <div className="container py-8 px-6 mx-auto">
          <h1 className="uppercase tracking-wide font-bold text-gray-800 text-xl mb-8">
            Testing D3 in react
            </h1>
          <p className="mt-8 mb-8">
            Test D3 JS
          </p>
          <SignEmbedding id='chart' width={700} height={300} ></SignEmbedding>
        </div>
      </section>
    );
  }


  export default TestD3