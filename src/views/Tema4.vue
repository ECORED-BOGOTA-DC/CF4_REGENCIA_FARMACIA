<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Sujetos de especial protección
    p.mb-5(data-aos="fade-right") De acuerdo con el proceso de atención en el sistema general de salud uno de los principios es garantizar la universalidad del servicio; sin embargo, existe un grupo más vulnerable y al que se le debe garantizar igualdad de oportunidades y evitar su discriminación, este grupo se encuentra compuesto por los que son #[b denominados jurídicamente sujetos de especial protección que merecen un enfoque diferencial]; por ello, es importante recordar:
    .row.justify-content-center.mb-5.align-self-center.mx-3
      .col-10
        .cajon.color-primario.fond3.p-4.mb-4(data-aos="flip-down")
          p.mb-0 “Todos podemos ser, en alguna circunstancia, vulnerables y, en consecuencia, ser sujetos de especial protección por condiciones de debilidad manifiesta o por la posición de indefensión dependiendo de la situación”. #[b Artículo 13 de la Constitución Política.]
    p.mb-5(data-aos="fade-left") En marzo 14 de 2008, la Corte Constitucional reconoció como sujetos de especial protección a quienes se encontraban por razones históricas y culturales en condiciones menos favorables para el ejercicio efectivo de sus derechos físicos, psicológicos o sociales, quienes merecen una ayuda reforzada, con el ánimo de lograr una igualdad en los servicios de salud, real y efectiva. Lo que obliga a todas las instituciones de salud públicas o privadas a brindar un tratamiento preferencial en términos de acceso. Por lo anterior, se ha establecido entre los grupos de especial protección a:
    .row.justify-content-center(data-aos="zoom-in-up")
      .col-lg-10
        .row.fond4
          .col-12.p-4.p-lg-5
            .row.align-items-center
              .col-lg-5
                img(src="@/assets/tema4/img-1.svg", style="width: 350px",alt='Imágen decorativa').m-auto
              .col-lg-7
                p Todos los niños, adolescentes, adultos mayores, personas con algún tipo de discapacidad física, psíquica o sensorial; todas las mujeres cabeza de familia, personas desplazadas por la violencia, personas que se encuentran en extrema pobreza y todas aquellas personas que, por su situación de debilidad manifiesta, se ubican en una posición de desigualdad material con respecto al resto de la población.
                p.mb-0 Se identifica como sujetos de especial protección a las víctimas de la violencia, desplazados, refugiados, exiliados, líderes políticos, periodistas y habitantes en zonas con problemas de orden público, entre otros. Igualmente, a aquellos que por su etnia o raza, orientación sexual, nacionalidad, lenguaje, orientación religiosa o situación jurídica han sido tradicionalmente discriminados. 

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
