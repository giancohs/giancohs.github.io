let topTitleDiv = "<h4></h4>";

let titleDiv =
  "<h1>A dos años de la Pandemia en el Perú</h1>";

let bylineDiv = "<p>Por OjoPúblico y Espacio y Análisis</p>";

let descriptionDiv =
  '<p> En el 2019, el INEI identificó regiones, provincias y distritos con menor índice de desarrollo humano. La pandemia por la Covid-19 ha afectado en sobremanera en estos lugares que ya eran vulnerables.</p>' +
  '<p>Un equipo multidisplinario analizó la información registrada durante la pandemia <a href="https://www.datosabiertos.gob.pe/group/datos-abiertos-de-covid-19">(casos y fallecidos por Covid-19, vacunas, entre otros)</a></p>' +
  "<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In harum natus eos cum rem iure aperiam omnis distinctio illo quis, sunt nesciunt sint impedit deleniti dolor saepe necessitatibus eligendi aut?</p><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In harum natus eos cum rem iure aperiam omnis distinctio illo quis, sunt nesciunt sint impedit deleniti dolor saepe necessitatibus eligendi aut?</p>" +
  '<p style="text-align:center">Desliza para continuar<br>▼</p>';

let footerDiv =
  '<p>Edición general: </p>' +
  '<p>Desarrollo: </p>'+
  '<p>Análisis datos: </p>'
  '<p><a href="https://www.mapbox.com/about/maps/" target="_blank">© Mapbox</a> | <a href="http://www.openstreetmap.org/about/" target="_blank">© OpenStreetMap</a> | <a href="https://brown.columbia.edu">The Brown Institute for Media Innovation</a></p>';

let divChapter1 =
  "<h3>Las tres olas en el Perú</h3>" +
  '<img src="images/olas_covid_peru.jpg">' +
  '<p class="imageCredit">Fuente: <a href="https://www.datosabiertos.gob.pe/dataset/casos-positivos-por-covid-19-ministerio-de-salud-minsa">Ministerio de Salud</a></p>' +
  "<p>En marzo de 2020 se declaró en emergencia sanitaria Lorem ipsum dolor, sit amet consectetur adipisicing elit. In harum natus eos cum rem iure aperiam omnis distinctio illo quis, sunt nesciunt sint impedit deleniti dolor saepe necessitatibus eligendi aut?</p><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In harum natus eos cum rem iure aperiam omnis distinctio illo quis, sunt nesciunt sint impedit deleniti dolor saepe necessitatibus</p>";

let divChapter2 =
  "<h3>Índice de desarrollo Humano</h3>" +
  '<p class="imageCredit">Fuente: <a href="https://www.nytimes.com/2020/04/09/nyregion/coronavirus-queens-corona-jackson-heights-elmhurst.html">INEI</a></p>' +
  "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mollis tincidunt fermentum. Proin lobortis, leo ut iaculis ultricies, ante tellus porta dolor, efficitur egestas massa magna quis ipsum. Fusce rutrum dignissim dui, at tempus turpis vestibulum sit amet. In a augue eu est ultricies convallis. Vivamus tincidunt tortor ac vehicula.</p>";

let divChapter3 =
  "<h3>Ucayali</h3>" +
  "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mollis tincidunt fermentum. Proin lobortis, leo ut iaculis ultricies, ante tellus porta dolor, efficitur egestas massa magna quis ipsum. Fusce rutrum dignissim dui, at tempus turpis vestibulum sit amet. In a augue eu est ultricies convallis. Vivamus tincidunt tortor ac vehicula. </p>";

let divChapter4 =
  '<div id="full-size"><img src="images/loreto_ojo_publico.jpg"></div>'  

let divChapter5 =
  "<h3>Piura</h3>" +
  '<img src="">' +
  '<p</p>' +
  "<p></p>";

var config = {
  style: "mapbox://styles/ojopublico/cl0lbwl60000j15r0aw9rr81y/draft",
  accessToken:
    "pk.eyJ1Ijoib2pvcHVibGljbyIsImEiOiJjbDBsYzY3YzMwdjJtM2JzZHNkdTlpYm1sIn0.yIsJG1nJZLQys4T0zTKRbA",
  showMarkers: false,
  markerColor: "#3FB1CE",
  theme: "light",
  use3dTerrain: false,
  topTitle: topTitleDiv,
  title: titleDiv,
  subtitle: "",
  byline: bylineDiv,
  description: descriptionDiv,
  footer: footerDiv,
  chapters: [
    {
      id: "overallMap",
      alignment: "left",
      hidden: false,
      chapterDiv: divChapter1,
      location: {
        center: [-81.124849, -9.918927],
        zoom: 5,
        zoomSmall: 2,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "incomeUnderlay",
      alignment: "left",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter2,
      location: {
        center: [-81.124849, -9.918927],
        zoom: 5,
        zoomSmall: 9,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "medianIncome",
          opacity: 1,
          duration: 300,
        },
      ],
      onChapterExit: [
        {
          layer: "medianIncome",
          opacity: 0,
          duration: 300,
        },
      ],
    },
    {
      id: "elmhurstHospital",
      alignment: "left",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter3,
      location: {
        center: [-74.35181, -8.45874 ],
        zoom: 8,
        zoomSmall: 14,
        pitch: 40,
        bearing: -7,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "medianIncome",
          opacity: 0,
          duration: 300,
        },
      ],
      onChapterExit: [
        {
          layer: "medianIncome",
          opacity: 0,
          duration: 300,
        },
      ],
    },
    {
      id: "full-size",
      alignment: "full",
      hidden: false,
      title: "",
      image: "./images/loreto_ojo_publico.jpg",
      description: "",
      chapterDiv: divChapter4,
      location: {
        center: [-80.39297, -5.17832],
        zoom: 16,
        zoomSmall: 14,
        pitch: 40,
        bearing: -7,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "medianIncome",
          opacity: 0,
          duration: 300,
        },
      ],
      onChapterExit: [
        {
          layer: "medianIncome",
          opacity: 0,
          duration: 300,
        },
      ],
    },
    {
      id: "southBronx",
      alignment: "right",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter5,
      location: {
        center: [-80.39297, -5.17832],
        zoom: 8,
        zoomSmall: 14,
        pitch: 40,
        bearing: 8,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "medianIncome",
          opacity: 1,
          duration: 300,
        },
      ],
      onChapterExit: [
        {
          layer: "medianIncome",
          opacity: 0,
          duration: 300,
        },
      ],
    },
  ],
};
