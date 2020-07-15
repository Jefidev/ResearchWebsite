import React from 'react';
import SignGallery from './SignGallery'

function SignsSample(props) {
  return (
    <section className="bg-white py-8">
      <div className="container py-8 px-6 mx-auto">
        <h1 className="uppercase tracking-wide font-bold text-gray-800 text-xl mb-8">
          Sign Samples
          </h1>
        <p className="mt-8 mb-8">
          Voici un apperçus des signes présents dans le dataset
          </p>
        <SignGallery />
      </div>
    </section>
  );
}


export default SignsSample