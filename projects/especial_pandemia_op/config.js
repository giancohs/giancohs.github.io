let topTitleDiv = "<h4></h4>";

let logoDiv = '<img class= "logoOP"src="./images/ojopublico_logo_white.png">' 

let titleDiv =
  "<h1>Dos años de pandemia en el Perú:<br></h1><h2>el impacto la covid-19 por distritos</h2>";

let bylineDiv = "<p>Por OjoPúblico y Espacio y Análisis</p>";

let descriptionDiv =
  '<p>Las familias que se vieron forzadas a dejar la ciudad, los hospitales colapsados, la pérdida masiva de empleos, las escuelas cerradas, las colas por un balón de oxígeno, el desamparo de los pueblos indígenas, la espera interminable para acceder a una cama de cuidados intensivos, el hambre de tantos, las deudas exorbitantes, y los deudos, que cada vez son más. A dos años del inicio de la pandemia no quedan dudas: la covid-19 no nos ha afectado a todos por igual y, además, ha ampliado las brechas que ya existían en el acceso a derechos básicos y las posibilidades de desarrollo en todo el mundo.</p>' +
  '<p>En Perú  —uno de los países más afectados por el coronavirus— la fragilidad del sistema sanitario, el empleo y el sistema educativo quedó en evidencia durante los primeros meses de pandemia y se exacerbó, todavía más, durante la segunda ola de la enfermedad. La emergencia sanitaria, en otras palabras, aumentó las desigualdades que ya existían y, de acuerdo con los especialistas, sus efectos se sentirán durante décadas.</p>' +
  "<p>Otros aspectos, como el impacto de esas brechas —las que ya existían antes de la pandemia— en las muertes por covid-19 registradas en el país todavía están en discusión. Por eso, este nuevo especial, elaborado por OjoPúblico y Espacio y Análisis, indaga en la relación entre el índice de desarrollo humano, la inseguridad alimentaria y la tasa de mortalidad en los distritos urbanos y rurales del Perú.</p>" +
  "<br></br>"+
  '<p style="text-align:center">Desliza para continuar<br>▼</p>';

let footerDiv =
  '<p>Edición general: </p>' +
  '<p>Desarrollo: </p>'+
  '<p>Análisis datos: </p>'
  '<p><a href="https://www.mapbox.com/about/maps/" target="_blank">© Mapbox</a> | <a href="http://www.openstreetmap.org/about/" target="_blank">© OpenStreetMap</a> | <a href="https://brown.columbia.edu">The Brown Institute for Media Innovation</a></p>';

let divChapter1 =
  "<h3>Replanteando el Índice de Desarrollo Humano</h3>" +
  "<p>El índice de desarrollo humano (IDH) es un indicador diseñado por el Programa de Naciones Unidas para el Desarrollo (PNUD) para evaluar la dinámica social y el bienestar de un país o un territorio más completo que el índice de pobreza, pues evoluciona de acuerdo al propio desarrollo de la población. Abarca tres dimensiones: esperanza de vida, acceso a educación e ingresos económicos per cápita. Además, puede adaptarse y reflejar situaciones catastróficas como guerras, deterioro ambiental, o en este caso, una pandemia. Sin embargo, aún no existe un estudio actualizado al con los efectos de la crisis sanitaria, por ello se decidió trabajar con el último informe publicado en el 2019.</p>";

let divChapter2 =
  "<h3>Índice de desarrollo Humano</h3>" +
  '<p class="imageCredit">Fuente: <a href="https://www.nytimes.com/2020/04/09/nyregion/coronavirus-queens-corona-jackson-heights-elmhurst.html">INEI</a></p>' +
  "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mollis tincidunt fermentum. Proin lobortis, leo ut iaculis ultricies, ante tellus porta dolor, efficitur egestas massa magna quis ipsum. Fusce rutrum dignissim dui, at tempus turpis vestibulum sit amet. In a augue eu est ultricies convallis. Vivamus tincidunt tortor ac vehicula.</p>";

let divChapter3 =
  "<h3>Ucayali</h3>" +
  "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mollis tincidunt fermentum. Proin lobortis, leo ut iaculis ultricies, ante tellus porta dolor, efficitur egestas massa magna quis ipsum. Fusce rutrum dignissim dui, at tempus turpis vestibulum sit amet. In a augue eu est ultricies convallis. Vivamus tincidunt tortor ac vehicula. </p>";

let divChapter4 =
'<div style="padding: 0px 0px; margin-left:0; margin-right:0"><img src="./images/loreto_ojo_publico.jpg"></div>';

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
  theme: "dark",
  use3dTerrain: false,
  topTitle: topTitleDiv,
  title: titleDiv,
  subtitle: "",
  byline: bylineDiv,
  description: descriptionDiv,
  footer: footerDiv,
  logo: logoDiv,
  chapters: [
    {
      id: "overallMap",
      alignment: "left",
      hidden: false,
      chapterDiv: divChapter1,
      location: {
        center: [-74.55652, -9.54131],
        zoom: 4.5,
        zoomSmall: 4,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "fallecidosCovid",
          opacity: 0.25,
          duration: 300,
        },
        {
          layer: "idhDistritos_plain",
          opacity: 0.25,
          duration: 300,
        },
        {
          layer: "idhDistritos",
          opacity: 0,
          duration: 0,
        },
      ],
      onChapterExit: [
        {
          layer: "fallecidosCovid",
          opacity: 0.25,
          duration: 0,
        },
        {
          layer: "idhDistritos_plain",
          opacity: 0.25,
          duration: 0,
        },
        {
          layer: "idhDistritos",
          opacity: 0,
          duration: 0,
        },
      ],
    },
    {
      id: "idhDistritos",
      alignment: "left",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter2,
      location: {
        center: [-74.55652, -9.54131],
        zoom: 5,
        zoomSmall: 4,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "fallecidosCovid",
          opacity: 0,
          duration: 0,
        },
        {
          layer: "idhDistritos_plain",
          opacity: 0,
          duration: 0,
        },
        {
          layer: "idhDistritos",
          opacity: 0.9,
          duration: 300,
        },
      ],
      onChapterExit: [
        {
          layer: "fallecidosCovid",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "idhDistritos_plain",
          opacity: 0,
          duration: 0,
        },
        {
          layer: "idhDistritos",
          opacity: 0.9,
          duration: 300,
        },
      ],
    },
    {
      id: "ucayali",
      alignment: "right",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter3,
      location: {
        center: [-74.35181, -8.45874 ],
        zoom: 8,
        zoomSmall: 6,
        pitch: 40,
        bearing: -7,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "fallecidosCovid",
          opacity: 0.9,
          duration: 300,
        },
        {
          layer: "idhDistritos_plain",
          opacity: 0,
          duration: 0,
        },
        {
          layer: "idhDistritos",
          opacity: 0.9,
          duration: 300,
        },
      ],
      onChapterExit: [
        {
          layer: "fallecidosCovid",
          opacity: 0.9,
          duration: 300,
        },
        {
          layer: "idhDistritos_plain",
          opacity: 0,
          duration: 0,
        },
        {
          layer: "idhDistritos",
          opacity: 0.9,
          duration: 300,
        },
      ],
    },
    {
      id: "full-size",
      alignment: "full",
      hidden: false,
      title: "",
      image: './images/loreto_ojo_publico.jpg',
      chapterDiv: divChapter4,
      description: '',
      location: {
        center: [-80.39297, -5.17832],
        zoom: 16,
        zoomSmall: 10,
        pitch: 40,
        bearing: -7,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "",
          opacity: 0,
          duration: 300,
        },
      ],
      onChapterExit: [
        {
          layer: "",
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
        zoomSmall: 6,
        pitch: 40,
        bearing: 8,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "",
          opacity: 1,
          duration: 300,
        },
      ],
      onChapterExit: [
        {
          layer: "",
          opacity: 0,
          duration: 300,
        },
      ],
    },
  ],
};
