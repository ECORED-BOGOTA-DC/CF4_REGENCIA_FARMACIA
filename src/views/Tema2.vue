<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Sistema de Información y Atención al Usuario – SIAU
    p.mb-5(data-aos="fade-right") Las instituciones prestadoras de servicios de salud son responsables de evaluar el nivel de satisfacción de los usuarios, familiares, cuidadores y visitantes; para lograrlo aplican diferentes instrumentos que les permitan conocer el grado de satisfacción de los clientes tanto internos como externos; a partir de esta información se generan oportunidades para mejorar, que permiten aplicar acciones correctivas y aprender del error. 
    .row.justify-content-center(data-aos="zoom-in-up")
      .col-10
        .row.mb-5.fond4
          .co-12.p-4.p-lg-5
            .row.align-items-center
              .col-lg-5
                  img(src="@/assets/tema2/img-1.svg", style="width:350px" ,alt='Imágen decorativa').m-auto
              .col-lg-7
                p.mb-0
                  b Según la Resolución 2063 2017 PPSS “el Manual de Sistema de Información y Atención al Usuario (SIAU) se constituye en un instrumento para verificar y promover el cumplimiento de los deberes y derechos de los usuarios y familiares, e identificar las fallas que se puedan originar durante el proceso de atención; posteriormente, establecer acciones correctivas que permitan lograr los objetivos propuestos”.
    p(data-aos="fade-left") El Sistema de Información y Atención al Usuario (SIAU) es una herramienta que se utiliza para identificar las necesidades y expectativas de los clientes internos y externos de las instituciones prestadoras de servicios de salud, con el propósito de mejorar la calidad de los servicios brindados.
    p.mb-5(data-aos="fade-right") El SIAU se considera un vínculo entre la estructura organizacional y el usuario, utilizado como medio para fortalecer los procesos institucionales, analizando la información recolectada y monitoreando los planes de mejora, creando mecanismos para alcanzar las metas y políticas misionales; además, monitorea y administra rápidamente las solicitudes o sugerencias, quejas, peticiones y celebraciones (PQRSF) realizadas por los usuarios y/o familiares que califican el índice de satisfacción del usuario.
    .row.justify-content-around.align-items-center.izq.p-5
      .row
        .col-lg-6
          h3 Funciones del SIAU:
          ul.lista-ul--color.fa-ul2
            li(data-aos="flip-up") 
              i.ii.fas.fa-atom
              p.mb-2 Orientar e informar a los usuarios sobre el portafolio de servicios de la institución.
            li(data-aos="flip-up") 
              i.ii.fas.fa-atom
              p.mb-2 Gestionar y agilizar las solicitudes de las historias clínicas que merezcan prontitud.
            li(data-aos="flip-up") 
              i.ii.fas.fa-atom
              p.mb-2 Tramitar PQRSF.
            li(data-aos="flip-up") 
              i.ii.fas.fa-atom
              p.mb-2 Realizar encuestas en los servicios ambulatorios para medir el grado de satisfacción de los usuarios.
            li(data-aos="flip-up") 
              i.ii.fas.fa-atom
              p.mb-2 Seguimiento y verificación telefónica de los pacientes hospitalizados, con el fin de conocer la satisfacción del servicio recibido.
            li(data-aos="flip-up") 
              i.ii.fas.fa-atom
              p.mb-2 Rastrear de las sugerencias halladas en los buzones de los diferentes servicios de la institución.
        .col-lg-5
          figure
            img(src='@/assets/tema2/img-2.svg', style="width:350px" ,alt='Imágen decorativa').m-auto

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
