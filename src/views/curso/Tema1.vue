<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Variables y constantes'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/1.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left").mb-4 En programación, las variables y constantes son componentes fundamentales para el almacenamiento y manipulación de datos. Una variable es un espacio de memoria con un nombre asignado que puede contener distintos valores durante la ejecución de un programa. En cambio, una constante es un valor que permanece fijo y no puede modificarse una vez asignado (Flórez Fernández, 2012).
    
        .bg-color-1.p-4(data-aos="fade-left").mb-4
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 El uso adecuado de variables y constantes permite escribir programas más estructurados, optimizados y fáciles de mantener. A continuación, se abordan sus definiciones, tipos de datos, reglas de nomenclatura, alcance, ciclo de vida y beneficios en el desarrollo de software.
    

    h2 Definición de variable

    .row.mb-5
      .col-lg-8
        p(data-aos="fade-left") Una variable es un identificador que se utiliza para almacenar y gestionar datos dentro de un programa. Se puede considerar como un contenedor que guarda información en la memoria del computador y permite modificar su contenido durante la ejecución del programa (Zohonero Martínez & Joyanes Aguilar, 2008).
    
        .bg-color-4.p-4(data-aos="fade-left")
          p.mb-0 Las variables son esenciales en la programación, ya que permiten realizar cálculos, almacenar datos temporales, manejar estructuras complejas y facilitar la manipulación de información. La correcta gestión de variables contribuye a mejorar la eficiencia y legibilidad del código.
    
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/3.png", data-aos="zoom-in")
    

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/274611" target="_blank" rel="noopener noreferrer") De Castro Emilio Cerdá, F. J. A. L. M. (s/f). Las energías renovables en el ámbito internacional. Revistasice.com. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              span De Janeiro, R. (1992). La declaración del Río sobre el Medio Ambiente y el Desarrollo. Río de Janeiro República Federativa del Brasil., aprobada en Estocolmo el, 16.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/QKLjwCMyv3M?si=uAWhO9tnyghljaJg" target="_blank" rel="noopener noreferrer") Innovación y sostenibilidad.

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
