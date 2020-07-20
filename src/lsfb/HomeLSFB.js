import React from 'react';



function HomeLSFB(props) {
  return (
    <div>
      <Cover />
      <DatasetDescription />
      <HallOfFame />
      <Download />
      <About />
    </div>
  );
}



function Cover() {
  return (
    <div className="lsfb-img bg-cover">
      <div className="text-white p-20 w-2/3">
        <h1 className="text-4xl">Un dataset gratuit pour la langue des signes</h1>
        <p className="text-justify mb-10">
          Depuis 2013, la laboratoire de langue des signes Belge francophone de l’UNamur collecte et traduit des vidéo de conversations en langue des signes. Afin d’aider à la création d’un algorithme pour la traduction de la langue des signes, nous mettons à votre disposition les vidéos des 10 signes les plus représentés dans le corpus LSFB.
        </p>

        <a href="#dataset" class="inline-block mt-10 mr-10 text-xl px-8 py-4 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
          Le dataset
        </a>

        <a href="https://www.corpus-lsfb.be/" class="inline-block mt-10 text-xl px-8 py-4 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
          Corpus LSFB
        </a>
      </div>
    </div>
  )
}

function DatasetDescription() {
  return (
    <section id="dataset" className="bg-white py-8">
      <div className="container py-8 px-6 mx-auto">
        <h1 className="uppercase tracking-wide font-bold text-gray-800 text-xl mb-8">
          Le Dataset
        </h1>

        <p className="mt-8 mb-8">
          Il est composé de 7497 clips vidéo répartis dans 10 catégories. Les catégories ne sont pas équilibrées. La moins représentée contient 452 vidéos tandis que la plus représentée en contient plus de 1300. En plus de ces 7497 signes vous trouverez 129 signes appelés <b>rejected</b>. Ceux-ci ne sont pas intégrés aux ensembles d’entrainement et de test car leur durée d’exécution est beaucoup plus importante que la moyenne pour diverses raisons (mauvais découpage, signe maintenu, signe interrompu puis repris). Néanmoins ils restent à votre disposition.
        </p>

        <p className="mt-8 mb-8">
          <b>Ensemble d'entrainement : </b> Contient 80% des données. Les signes sont réalisés par 77 signeurs différents.
          <br />
          <b>Ensemble de test : </b> Contient 20% des données. Il est composés de signeurs n'apparaissants pas dans l'ensemble d'entrainement.
        </p>

        <a href="/jfink/LSFB/sample" class="inline-block mt-10  bg-teal-500 text-xl px-8 py-4 leading-none border rounded text-white border-white hover:bg-teal-700 mt-4 lg:mt-0">
          Voir un échantillon
        </a>
        <a href="#Download" class="inline-block mt-10 ml-5  bg-teal-500 text-xl px-8 py-4 leading-none border rounded text-white border-white hover:bg-teal-700 mt-4 lg:mt-0">
          Télécharger
        </a>

      </div>

    </section>
  )
}


function HallOfFame() {
  return (
    <section className="bg-white py-8">
      <div className="container py-8 px-6 mx-auto border-t">
        <h1 className="uppercase tracking-wide font-bold text-gray-800 text-xl mb-8">
          Résultats
        </h1>
        <p className="mt-8 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula eget neque vel efficitur. Suspendisse odio ex, consectetur id pretium at, accumsan eget leo. Integer lacus ipsum, varius laoreet hendrerit at, elementum sed turpis.
        </p>
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
                  <td className="border px-4 py-2 bg-gray-200">Jérôme Fink - UNamur</td>
                  <td className="border px-4 py-2 bg-gray-200">X</td>
                  <td className="border px-4 py-2 bg-gray-200">github/text</td>
                  <td className="border px-4 py-2 bg-gray-200">90%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section >


  )
}

function About() {
  return (
    <section class="bg-white py-8">
      <div class="container py-8 px-6 mx-auto">
        <h1 class="uppercase tracking-wide font-bold text-gray-800 text-xl mb-8">
          à propos
        </h1>

        <p class="mt-8 mb-8">This template is inspired by the stunning nordic minamalist design - in particular:
            <br />
          <a class="text-gray-800 underline hover:text-gray-900" href="http://savoy.nordicmade.com/">Savoy Theme</a> created by <a class="text-gray-800 underline hover:text-gray-900" href="https://nordicmade.com/">https://nordicmade.com/</a> and <a class="text-gray-800 underline hover:text-gray-900" href="https://www.metricdesign.no/" >https://www.metricdesign.no/</a></p>

        <p class="mb-8">Lorem ipsum dolor sit amet, consectetur <a href="www.google.be">random link</a> adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel risus commodo viverra maecenas accumsan lacus vel facilisis volutpat. Vitae aliquet nec ullamcorper sit. Nullam eget felis eget nunc lobortis mattis aliquam. In est ante in nibh mauris. Egestas congue quisque egestas diam in. Facilisi nullam vehicula ipsum a arcu. Nec nam aliquam sem et tortor consequat. Eget mi proin sed libero enim sed faucibus turpis in. Hac habitasse platea dictumst quisque. In aliquam sem fringilla ut. Gravida rutrum quisque non tellus orci ac auctor augue mauris. Accumsan lacus vel facilisis volutpat est velit egestas dui id. At tempor commodo ullamcorper a. Volutpat commodo sed egestas egestas fringilla. Vitae congue eu consequat ac.</p>

      </div>

    </section>
  )
}

function Download() {
  return (
    <section className="bg-white py-8" id="Download">
      <div className="container py-8 px-6 mx-auto border-t">
        <h1 className="uppercase tracking-wide font-bold text-gray-800 text-xl mb-8">
          Télécharger
        </h1>

        <p className="mt-8 mb-8">
          Le dataset dans son intégralité a une taille de 35Go. Afin d'accéder aux instructions de téléchargement, veuillez d'abord lire et approuver les conditions générales d'utilisation
        </p>

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3"></div>
          <label className="md:w-2/3 block text-gray-800 font-bold">
            <input className="mr-2 leading-tight" type="checkbox" />
            <span className="text-sm">
              J'ai lu et j'accepte les <a class="text-gray-800 underline hover:text-gray-900" href="/jfink/lsfb" target="_blank">Conditions d'utilisation</a>
            </span>
          </label>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="flex-1">
            <a href="/jfink/LSFB/sample" class="inline-block mt-10  bg-teal-500 text-xl px-8 py-4 leading-none border rounded text-white border-white hover:bg-teal-700 mt-4 lg:mt-0">
              Télécharger
            </a>
          </div>
        </div>

      </div>

    </section >
  )
}


export default HomeLSFB;