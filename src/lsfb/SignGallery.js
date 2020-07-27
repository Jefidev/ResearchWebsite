import React from 'react';

class SignGallery extends React.Component {

  importAll(r) {
    return r.keys().map(r);
  }
  componentWillMount() {
    this.AussiImages = this.importAll(require.context("../assets/images/LSFB/dataset/aussi", false, /\.(png|jpe?g|svg|gif)$/));
    this.LSimages = this.importAll(require.context("../assets/images/LSFB/dataset/ls", false, /\.(png|jpe?g|svg|gif)$/));
    this.AvoirImages = this.importAll(require.context("../assets/images/LSFB/dataset/avoir", false, /\.(png|jpe?g|svg|gif)$/));
    this.CestImages = this.importAll(require.context("../assets/images/LSFB/dataset/c-est", false, /\.(png|jpe?g|svg|gif)$/));
    this.MaisImages = this.importAll(require.context("../assets/images/LSFB/dataset/mais", false, /\.(png|jpe?g|svg|gif)$/));
    this.OuiImages = this.importAll(require.context("../assets/images/LSFB/dataset/oui", false, /\.(png|jpe?g|svg|gif)$/));
    this.PlusImages = this.importAll(require.context("../assets/images/LSFB/dataset/plus", false, /\.(png|jpe?g|svg|gif)$/));
    this.QuoiImages = this.importAll(require.context("../assets/images/LSFB/dataset/quoi", false, /\.(png|jpe?g|svg|gif)$/));
    this.RienImages = this.importAll(require.context("../assets/images/LSFB/dataset/rien", false, /\.(png|jpe?g|svg|gif)$/));
    this.SourdImages = this.importAll(require.context("../assets/images/LSFB/dataset/sourd", false, /\.(png|jpe?g|svg|gif)$/));

  }

  render() {
    return (
      <div className='w-full'>
        <p className='text-sm'><b>AUSSI</b></p>
        <div className="flex flex-wrap">
          {
            this.AussiImages.map((image, index) =>
              <div class="sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-1">
                <img className="m-1 transform scale-75" key={index} src={image} alt="AUSSI"></img>
              </div>
            )
          }
        </div>

        <p className='text-sm'><b>LS</b></p>
        <div className="flex flex-wrap">
          {
            this.LSimages.map((image, index) =>
              <div class="sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-1">
                <img className="m-1 transform scale-75" key={index} src={image} alt="LS"></img>
              </div>
            )
          }
        </div>

        <p className='text-sm'><b>AVOIR</b></p>
        <div className="flex flex-wrap">
          {
            this.AvoirImages.map((image, index) =>
              <div class="sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-1">
                <img className="m-1 transform scale-75" key={index} src={image} alt="AVOIR"></img>
              </div>
            )
          }
        </div>

        <p className='text-sm'><b>C'EST</b></p>
        <div className="flex flex-wrap">
          {
            this.CestImages.map((image, index) =>
              <div class="sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-1">
                <img className="m-1 transform scale-75" key={index} src={image} alt="C-EST"></img>
              </div>
            )
          }
        </div>

        <p className='text-sm'><b>MAIS</b></p>
        <div className="flex flex-wrap">
          {
            this.MaisImages.map((image, index) =>
              <div class="sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-1">
                <img className="m-1 transform scale-75" key={index} src={image} alt="MAIS"></img>
              </div>
            )
          }
        </div>

        <p className='text-sm'><b>OUI</b></p>
        <div className="flex flex-wrap">
          {
            this.OuiImages.map((image, index) =>
              <div class="sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-1">
                <img className="m-1 transform scale-75" key={index} src={image} alt="OUI"></img>
              </div>
            )
          }
        </div>

        <p className='text-sm'><b>PLUS</b></p>
        <div className="flex flex-wrap">
          {
            this.PlusImages.map((image, index) =>
              <div class="sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-1">
                <img className="m-1 transform scale-75" key={index} src={image} alt="PLUS"></img>
              </div>
            )
          }
        </div>

        <p className='text-sm'><b>QUOI</b></p>
        <div className="flex flex-wrap">
          {
            this.QuoiImages.map((image, index) =>
              <div class="sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-1">
                <img className="m-1 transform scale-75" key={index} src={image} alt="QUOI"></img>
              </div>
            )
          }
        </div>

        <p className='text-sm'><b>RIEN</b></p>
        <div className="flex flex-wrap">
          {
            this.RienImages.map((image, index) =>
              <div class="sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-1">
                <img className="m-1 transform scale-75" key={index} src={image} alt="RIEN"></img>
              </div>
            )
          }
        </div>

        <p className='text-sm'><b>SOURD</b></p>
        <div className="flex flex-wrap">
          {
            this.SourdImages.map((image, index) =>
              <div class="sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-1">
                <img className="m-1 transform scale-75" key={index} src={image} alt="SOURD"></img>
              </div>
            )
          }
        </div>

      </div>
    )

  }
}

export default SignGallery;