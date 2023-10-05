<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5 La evaluación de las iniciativas de mejora de la atención de la salud, se  describe la importancia de evaluar la satisfacción del usuario en los servicios de salud, dando respuesta de manera oportuna y asertiva a todas las peticiones, sugerencias, quejas y reclamos. Estas necesidades  pueden surgir por una falta de comprensión compartida de los objetivos de la evaluación; confusión sobre las funciones, las relaciones y las responsabilidades; carga de datos; cuestiones de flujo de datos y confidencialidad; la incomodidad de ser estudiado y el impacto de resultados decepcionantes o no deseados.
    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="Esquema gráfico que resume lo abordado en el componente formativo, indicando lo relacionado con la evaluación de la atención en salud, la cual permite identificar oportunidades para mejorar y actuar en el cumplimiento de la norma y se divide en:<br>Política de atención en salud<br>Satisfacción del usuario<br>Sistema de Información y Atención al Usuario - SIAU<br>Ley de participación ciudadana<br>Sujetos de especial protección")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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

<style lang="sass"></style>
