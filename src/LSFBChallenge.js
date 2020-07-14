import React from 'react';
import unamur from './assets/images/LSFB/UNamur.png'
import baillet from './assets/images/LSFB/baillet.svg'



function LsfbChallenge(props) {
  return (
    <div className="bg-gray-200 h-screen">
      <Nav />
      <Cover />
      <DatasetDescription />
      <HallOfFame />
      <About />
      <Bottom />
    </div>
  );
}


function Nav() {
  return (
    <nav className="flex flex-wrap items-center justify-between bg-teal-500 p-6">

      <div className="text-white">
        <h1 className="text-4xl skew-y-12">LSFB</h1>
        <p className="text-2xl">Towards Sign Language Translation</p>
      </div>


      <div className="flex items-center flex-shrink-0 text-white">
        <img src={unamur} className="h-24 pr-5" alt="Logo UNamur" />
        <img src={baillet} className="h-20 mr-auto ml-auto" alt="Logo Fond Baillet Latour" />
      </div>
    </nav >
  )
}


function Cover() {
  return (
    <div className="lsfb-img bg-cover">
      <div className="text-white p-20 w-2/3">
        <h1 className="text-4xl">Un dataset gratuit pour la langue des signes</h1>
        <p className="text-justify">
          Depuis 2013, la laboratoire de langue des signes Belge francophone de l’UNamur collecte et traduit des vidéo de conversations en langue des signes. Afin d’aider à la création d’un algorithme pour la traduction de la langue des signes, nous mettons à votre disposition les vidéos des 10 signes les plus représentés dans le corpus LSFB.
        </p>

        <button className="mt-10 mr-10 bg-teal-500 hover:bg-teal-700 text-white font-bold py-4 px-8 border border-teal-700 rounded">
          <a href="www.google.be">Le Dataset</a>
        </button>

        <button className="mt-10 bg-teal-500 hover:bg-teal-700 text-white font-bold py-4 px-8 border border-teal-700 rounded">
          <a href="https://www.corpus-lsfb.be/">Corpus LSFB</a>
        </button>
      </div>
    </div>
  )
}

function DatasetDescription() {
  return (
    <section className="bg-white py-8">
      <div className="container py-8 px-6 mx-auto">
        <h1 className="uppercase tracking-wide font-bold text-gray-800 text-xl mb-8">
          Le Dataset
        </h1>

        <p className="mt-8 mb-8">
          Il est composé de 7497 clips vidéo répartis dans 10 catégories. Les catégories ne sont pas équilibrées. La moins représentée contient 452 vidéos tandis que la plus représentée en contient plus de 1300. En plus de ces 7497 signes vous trouverez 129 signes appelés <b>rejected</b>. Ceux-ci ne sont pas intégrés aux ensembles d’entrainement et de test car leur durée d’exécution est beaucoup plus importante que la moyenne pour diverses raisons (mauvais découpage, signe maintenu, signe interrompu puis repris). Néanmoins ils restent à votre disposition.
        </p>

        <h2 className="uppercase tracking-wide font-bold text-gray-800 text-l mb-8">
          Ensemble d'entrainement
        </h2>

        <p className="mt-8 mb-8">
          Celui-ci contient environ 80% des données. 77 signeurs différents sont représentés. Les exemples suivants vous donneront un apperçus du dataset et de ses challenges.
        </p>

        <div className='w-full'>
          <p className='text-sm'><b>AUSSI</b></p>
          <div className="flex flex-wrap">
            <div class="sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-1">
              <img className="m-1" src={require("./assets/images/LSFB/dataset/aussi/S011.gif")}></img>
            </div>
            <div class="sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-1">
              <img className="m-1" src={require("./assets/images/LSFB/dataset/aussi/S018.gif")}></img>
            </div>
            <div class="sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-1">
              <img className="m-1" src={require("./assets/images/LSFB/dataset/aussi/S034.gif")}></img>
            </div>
            <div class="sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-1">
              <img className="m-1" src={require("./assets/images/LSFB/dataset/aussi/S046.gif")}></img>
            </div>
            <div class="sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-1">
              <img className="m-1" src={require("./assets/images/LSFB/dataset/aussi/S057.gif")}></img>
            </div>
            <div class="sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-1">
              <img className="m-1" src={require("./assets/images/LSFB/dataset/aussi/S002.gif")}></img>
            </div>
          </div>
        </div>

        <div className='w-full mt-2'>
          <p className='text-sm'><b>AVOIR</b></p>
          <div className="flex flex-wrap">
            <div class="sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-1">
              <img className="m-1" src={require("./assets/images/LSFB/dataset/aussi/S011.gif")}></img>
            </div>
            <div class="sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-1">
              <img className="m-1" src={require("./assets/images/LSFB/dataset/aussi/S018.gif")}></img>
            </div>
            <div class="sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-1">
              <img className="m-1" src={require("./assets/images/LSFB/dataset/aussi/S034.gif")}></img>
            </div>
            <div class="sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-1">
              <img className="m-1" src={require("./assets/images/LSFB/dataset/aussi/S046.gif")}></img>
            </div>
            <div class="sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-1">
              <img className="m-1" src={require("./assets/images/LSFB/dataset/aussi/S057.gif")}></img>
            </div>
            <div class="sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-1">
              <img className="m-1" src={require("./assets/images/LSFB/dataset/aussi/S002.gif")}></img>
            </div>
          </div>
        </div>

      </div>

    </section>
  )
}


function HallOfFame() {
  return (
    <div className="p-20 text-center content-center bg-gray-200">
      <h1 className="text-4xl">Hall of Fame</h1>
      <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula eget neque vel efficitur. Suspendisse odio ex, consectetur id pretium at, accumsan eget leo. Integer lacus ipsum, varius laoreet hendrerit at, elementum sed turpis.</p>
      <div className="flex justify-center content-center flex-wrap pt-10">
        <div class="w-1/3 p-2 content-center justify-center">
          <table className="table-auto">
            <thead>
              <tr>
                <td>Team Name</td>
                <td>Paper</td>
                <td>Code</td>
                <td>Accuracy</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Jérôme Fink - UNamur</td>
                <td className="border px-4 py-2">X</td>
                <td className="border px-4 py-2">github/text</td>
                <td className="border px-4 py-2">90%</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 bg-teal-200">Jérôme Fink - UNamur</td>
                <td className="border px-4 py-2 bg-teal-200">X</td>
                <td className="border px-4 py-2 bg-teal-200">github/text</td>
                <td className="border px-4 py-2 bg-teal-200">90%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  )
}

function Bottom() {
  return (
    <div className="text-center text-white w-full pb-10 pt-10 inset-x-0.bottom-0 bg-teal-500">
      <p>Jérôme Fink - 2020</p>
    </div>
  )
}


function About() {
  return (
    <section class="bg-white py-8">
      <div class="container py-8 px-6 mx-auto">
        <h1 class="uppercase tracking-wide font-bold text-gray-800 text-xl mb-8">
          About
        </h1>

        <p class="mt-8 mb-8">This template is inspired by the stunning nordic minamalist design - in particular:
            <br />
          <a class="text-gray-800 underline hover:text-gray-900" href="http://savoy.nordicmade.com/" target="_blank">Savoy Theme</a> created by <a class="text-gray-800 underline hover:text-gray-900" href="https://nordicmade.com/">https://nordicmade.com/</a> and <a class="text-gray-800 underline hover:text-gray-900" href="https://www.metricdesign.no/" target="_blank">https://www.metricdesign.no/</a></p>

        <p class="mb-8">Lorem ipsum dolor sit amet, consectetur <a href="#">random link</a> adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel risus commodo viverra maecenas accumsan lacus vel facilisis volutpat. Vitae aliquet nec ullamcorper sit. Nullam eget felis eget nunc lobortis mattis aliquam. In est ante in nibh mauris. Egestas congue quisque egestas diam in. Facilisi nullam vehicula ipsum a arcu. Nec nam aliquam sem et tortor consequat. Eget mi proin sed libero enim sed faucibus turpis in. Hac habitasse platea dictumst quisque. In aliquam sem fringilla ut. Gravida rutrum quisque non tellus orci ac auctor augue mauris. Accumsan lacus vel facilisis volutpat est velit egestas dui id. At tempor commodo ullamcorper a. Volutpat commodo sed egestas egestas fringilla. Vitae congue eu consequat ac.</p>

      </div>

    </section>
  )
}


export default LsfbChallenge;