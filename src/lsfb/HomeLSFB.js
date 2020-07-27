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

        <p className="mt-8 mb-8 text-justify">
          Il est composé de séquences vidéo extraite de conversations en langue des signes capturées par une caméra classique. Le dataset LSFB-10 contient les dix signes les plus fréquemments utilisés dans les conversations. Au total, 7497 séquences vidéos sont disponibles. Le signe le plus représenté apparait sur 1300 vidéos et le moins représenté sur 452. 80 signeurs sont représentés dans le dataset.
          <br />
          <br />
          Le dataset est déjà découpé en <b>ensemble de test</b> et <b>ensemble d'entrainement</b>. Environ 80% des données sont assignées à l'ensemble d'entrainement contre 20% pour l'ensemble de test. Les signeurs présentes dans l'ensemble de test n'apparaissent jamais dans l'ensemble d'entrainement.
          <br />
          <br />
          En plus des 7407 séquences vous trouverez un dossier contenant des video 'rejetées'. Il s'agit de vidéos qui, pour diverses raisons (pause, maintient de signes, ...) durent beaucoup plus longtemps que les autres.
        </p>

        <a href="/jfink/LSFB/sample" class="inline-block mt-10  bg-teal-500 text-xl px-8 py-4 leading-none border rounded text-white border-white hover:bg-teal-700 mt-4 lg:mt-0">
          Voir un échantillon
        </a>
        <a href="#Download" class="inline-block mt-10 ml-5  bg-teal-500 text-xl px-8 py-4 leading-none border rounded text-white border-white hover:bg-teal-700 mt-4 lg:mt-0">
          Télécharger
        </a>

      </div>

    </section >
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

        <p className="mt-8 mb-2">
          Le dataset est distribués selon les termes de la <b>Licence Creative Commons 4.0</b>. Le dataset peut être partagé, réutilisé et adapté mais à 3 conditions :
        </p>
        <ul className="list-disc ml-8 mb-5">
          <li>Toute utilisation doit faire référence au site www.corpus-lsfb.be et contenir la citation complète « Meurant, Laurence (2015), Corpus LSFB. Un corpus informatisé en libre accès de vidéos et d'annotations de la langue des signes de Belgique francophone (LSFB). Laboratoire de Langue des signes de Belgique francophone (LSFB-Lab). FRS-F.N.R.S et Université de Namur. »</li>
          <li>Les utilisations ne peuvent être commerciales.</li>
          <li>Toute utilisation doit se faire dans les mêmes conditions de partage (utilisation de la même licence).</li>
        </ul>

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3"></div>
          <label className="md:w-2/3 block text-gray-800 font-bold">
            <input className="mr-2 leading-tight" type="checkbox" />
            <span className="text-sm">
              J'ai lu et j'accepte les <a class="text-gray-800 underline hover:text-gray-900" href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank">Conditions d'utilisation</a>
            </span>
          </label>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
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