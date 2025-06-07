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


    h2 Características de una variable
    p(data-aos="fade-left") Una variable posee varias características fundamentales que determinan su funcionamiento en un lenguaje de programación. 

    .row.align-items-start.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/4.png", alt="").mb-4.mb-lg-0
      .col-lg-8

    
        AcordionA(tipo="b")
          .div(titulo="Nombre (Identificador)")
            p Es el término que se asigna a la variable para referirse a ella en el código. Debe seguir ciertas reglas sintácticas y convenciones del lenguaje (Zohonero Martínez & Joyanes Aguilar, 2008).
          .div(titulo="Tipo de Dato")
            p Determina la clase de información que la variable puede almacenar (números enteros, decimales, texto, booleanos, entre otros). Cada variable debe tener un tipo de dato definido, lo cual influye en las operaciones que se pueden realizar sobre ella.
          .div(titulo="Espacio en Memoria")
            p Cada variable ocupa una porción específica de la memoria RAM del computador.
          .div(titulo="Valor")
            p Es el dato almacenado en la variable, que puede cambiar a lo largo de la ejecución del programa.
    
    .bg-full-width-2.bg-fondo-6
      .px-4.px-md-5.py-4
    

        .row.align-items-start.mb-5.bg-fondo-6
          .col-lg-8
        
            AcordionA(tipo="b")#Acordion2
              .div(titulo="Ámbito o Alcance (Scope)")
                p El ámbito de una variable se refiere a la parte del programa en la que se puede acceder a ella. Puede ser local (solo accesible dentro de la función o bloque donde fue declarada) o global (accesible desde cualquier parte del programa) (Flórez Fernández, 2012).
              .div(titulo="Mutabilidad")
                p Las variables son mutables, lo que significa que su valor puede cambiar a lo largo del programa. También pueden declararse como constantes, garantizando que un dato no se modifique durante la ejecución (Flórez Fernández, 2012).
              .div(titulo="Inicialización")
                p Implica asignar un valor inicial al momento de su declaración. Algunos lenguajes como C y C++ requieren inicialización obligatoria; otros como Python permiten asignación posterior (Zohonero Martínez & Joyanes Aguilar, 2008).
              .div(titulo="Visibilidad")
                p Se refiere a las partes del programa donde se puede acceder a la variable. En programación orientada a objetos, las variables pueden tener niveles de visibilidad como privado, protegido o público.
        
          .col-lg-4
            figure
              img(src="@/assets/curso/tema1/5.png", alt="").mb-4.mb-lg-0


        h2 Ejemplo: alcance y visibilidad

        p El ámbito y la visibilidad son fundamentales para evitar errores. Por ejemplo, una variable global podría usarse por error en lugar de una variable local, provocando comportamientos inesperados. En lenguajes orientados a objetos, se puede controlar el acceso a los atributos con niveles de visibilidad como:


        .row.justify-content-center.align-items-stretch.mb-4
          .col-lg-4
            .bg-color-9.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema1/6.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5.mb-2 Público <em>(public)</em>
                  p.mb-0 Accesible desde cualquier parte del programa.
        
          .col-lg-4
            .bg-color-9.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema1/7.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5.mb-2 Protegido <em>(protected)</em>
                  p.mb-0 Accesible dentro de la clase y sus subclases.
        
          .col-lg-4
            .bg-color-9.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema1/8.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5.mb-2 Privado <em>(private)</em>
                  p.mb-0 Accesible solo dentro de la clase donde se declaró.

    
    h2 Ejemplos en lenguajes de programación

    p A continuación, se muestran ejemplos en distintos lenguajes:


    TabsC.color-acento-contenido.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Python" :icon="require('@/assets/bullets/icon-tab-c-1.svg')" )
        .row
          .col-lg.mb-4.mb-md-0.order-2
            h4 Python
            p No es necesario especificar un tipo de dato al declarar una variable. El tipo se asigna dinámicamente según el valor que se le asigna.
          .col-lg-auto.order-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/tab-1.png', alt='', style="max-width: 675px")
      .tabs-content.border.px-4.p-md-5.py-3(titulo="JavaScript" :icon="require('@/assets/bullets/icon-tab-c-1.svg')" )
        .row
          .col-lg.mb-4.mb-md-0.order-2
            h4 JavaScript
            p Se pueden declarar variables usando var, let o const. let y const son recomendados por ofrecer un control más preciso sobre el alcance y la mutabilidad.
          .col-lg-auto.order-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/tab-2.png', alt='')
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Java" :icon="require('@/assets/bullets/icon-tab-c-1.svg')" )
        .row
          .col-lg.mb-4.mb-md-0.order-2
            h4 Java
            p Es necesario especificar explícitamente el tipo de dato al declarar una variable. Java es un lenguaje fuertemente tipado, lo que significa que el tipo de la variable no puede cambiar una vez asignado.
          .col-lg-auto.order-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/tab-3.png', alt='')
    

    .bg-full-width.bg-color-7
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/9.png', alt='')
    
          .col-lg-8
            h2.mb-4(data-aos="flip-up") Tipos de variables y constantes en programación
            p.mb-4(data-aos="fade-right") Se invita a leer el documento #[strong Tipos de variables y constantes en programación], donde se aborda la clasificación y uso de variables y constantes en distintos lenguajes de programación. Este material ofrece explicaciones claras, ejemplos ilustrativos y reflexiones técnicas, con el fin de mejorar la comprensión y correcta implementación de estos elementos fundamentales en el desarrollo de #[em software].
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Tipos de variables y constantes en programación
    



    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/62476" target="_blank" rel="noopener noreferrer") Moreno Pérez, J. C. (2015). Programación: ( ed.). RA-MA Editorial. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=ue5sr5ZLLxc" target="_blank" rel="noopener noreferrer") Daniel PC. (2020, 24 de agosto). 6.-Curso Programación - Algoritmos ¿Qué son Variables y Constantes?

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
