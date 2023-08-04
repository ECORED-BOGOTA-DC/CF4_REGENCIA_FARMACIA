<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p En el área de la salud las preocupaciones sobre el aseguramiento de la calidad se desprenden de la responsabilidad de sus profesionales, para detectar lo mejor para sus pacientes (principio de calidad). También hay que tener en cuenta que las inquietudes por la calidad se asocian con la minimización de no tener las determinaciones correspondientes con respecto al servicio, y que no son necesarias en los procedimientos de diagnóstico, terapias y asistencia.

    p Normalmente, en el sector de la salud, la calidad se define basada en los criterios que se exponen a continuación:

    .row.justify-content-around.mb-5(data-aos="zoom-in-up")
      .col-10.fond-1.row.p-3.justify-content-around 
        .col-lg-5.justify-content-md-center.order-2.order-lg-1.py-5
          ul.lista-ul--color.fa-ul2
            li
              i.ii.fas.fa-atom
              p.mb-0 Ofrece #[strong apoyo] de acuerdo con la situación actual de la ciencia. 
            li 
              i.ii.fas.fa-atom
              p.mb-0 Proporciona #[strong atención] idónea según las necesidades. 
            li 
              i.ii.fas.fa-atom
              p.mb-0 Aporta #[strong cuidado] médico adecuado, de acuerdo con lo que se presenta con urgencia.
            li 
              i.ii.fas.fa-atom
              p.mb-0 Brinda #[strong interés] correcto y amigable a las personas, a sus familias y/o cuidadores. 

        .col-lg-5.row.justify-content-around.align-items-center.order-1.order-lg-2.mb-3
          figure.img-400
            img(src='@/assets/tema1/img-intro.png')



    p Con base en lo anterior, para todo el sistema de salud se hace necesario regularizar los distintos parámetros de la calidad, los cuales han sido agrupados en cuatro categorías de la siguiente manera:

    .row.justify-content-around.mb-5
      .col-10.fond-1.row.p-3.justify-content-around.p-5

        ul.lista-ul--color.fa-ul2
          li 
            i.ii.fas.fa-atom
            p.mb-0 #[strong Calidad técnico-científica:] todo lo que se vincula con los avances técnicos y científicos disponibles en el país y basados en el criterio profesional.
          li 
            i.ii.fas.fa-atom
            p.mb-0 #[strong Calidad funcional:] todo lo referente a la percepción, por parte del paciente y su familia, sobre la atención recibida.
          li 
            i.ii.fas.fa-atom
            p.mb-0 #[strong Calidad corporativa:] toda la imagen que transmite una institución que presta servicios de salud, calificada por pacientes, familiares, cuidadores y los mismos profesionales de la salud, que trabajan en la institución de salud.
          li 
            i.ii.fas.fa-atom
            p.mb-0 #[strong Gestión de la calidad:] todo el conjunto de técnicas de planificación dirigidas hacia la obtención de los niveles más altos de calidad en una institución.


    .row.justify-content-center.align-items-center.mb-5
      figure(data-aos="flip-up")
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/11111111" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.justify-content-around.align-items-center 
      .col-12.col-lg-auto.justify-content-md-center.mb-5 
        figure.fond-1
          img(src='@/assets/tema1/img-intro2-.svg')
      .col-lg.justify-content-md-center.align-self-center.px-5.mb-5 
                 
        .crd_03.mb-4.sep.pt-4
          .crd_03__icon
            .cc1.img-c
              h2.text-white.cc3 1         
          .crd_03__txt
            p.mb-0.lii #[strong Eficiencia:] si el servicio se llevó a cabo de acuerdo con la mejor relación, costos, resultados. 
        .crd_03.mb-4.sep.pt-4
          .crd_03__icon
            .cc1.img-c
              h2.text-white.cc3 2         
          .crd_03__txt
            p.mb-0.lii #[strong Eficacia:] si los resultados pronosticados fueron obtenidos en términos de cantidad y calidad.
        .crd_03.mb-4.sep2.py-4
          .crd_03__icon
            .cc1.img-c
              h2.text-white.cc3 3         
          .crd_03__txt
            p.mb-0.lii #[strong Efectividad:] si los desenlaces se dieron acordes con las solicitudes, apoyos y necesidades de los usuarios. 
    p Las conclusiones de las mediciones se pondrán a disposición de los usuarios, beneficiarios o destinatarios y, si tales facilidades se encuentran disponibles en cada entidad, con preferencia en la Web, para que puedan ser vigilados por determinados ciudadanos y agencias de gestión.             


</template>

<script>
export default {
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
