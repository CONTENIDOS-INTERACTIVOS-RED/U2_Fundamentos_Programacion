<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'3. Ciclos y estructura iterativas'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

      .bg-color-3.mb-5(data-aos="fade-up")
        .row.justify-content-center.align-items-center
          .col-lg-auto
            figure
              img(src='@/assets/curso/tema3/1.png', alt='')
      
          .col-lg
            .p-4
              p.mb-0(data-aos="fade-up") Las estructuras iterativas son un componente esencial en la programación, ya que permiten la ejecución repetitiva de un bloque de código bajo ciertas condiciones establecidas. Su correcta utilización optimiza el rendimiento de los programas, evita la redundancia y mejora la eficiencia del código (Marzal Varó et al., 2016)

  
      h2 Definición de ciclos y su importancia en la programación

      .row.mb-5
        .col-lg-8
          p(data-aos="fade-left").mb-4 Un ciclo en programación es una estructura de control que repite una secuencia de instrucciones hasta que se cumple una condición de salida. Su propósito es automatizar tareas repetitivas, eliminando la necesidad de escribir el mismo código varias veces.
      
          .bg-color-1.p-4(data-aos="fade-left").mb-4
            .row.align-items-start
              .col-lg-auto
                img(src="@/assets/curso/tema3/2.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 El uso de ciclos es fundamental en una gran variedad de aplicaciones, desde el procesamiento de datos hasta la ejecución de algoritmos avanzados. Sin ellos, los programas serían más largos, menos eficientes y mucho más difíciles de mantener (Cormen et al., 2022).
            
        .col-lg-4
          figure
            img(src="@/assets/curso/tema3/3.png", data-aos="zoom-in")

      h2 Tipos de estructuras iterativas

      p.mb-4 Existen diversos tipos de estructuras iterativas en los lenguajes de programación. Cada una tiene características que las hacen adecuadas para distintas situaciones. La siguiente tabla compara las principales estructuras de ciclo:

      .row.justify-content-center.mb-5
        .col-lg-10

          .tabla-a.color-acento-contenido
            table.mb-0
              tbody
                tr
                  td(style="width: 30%") #[strong while] (condición de entrada)
                  td(style="width: 70%") Ejecuta un bloque de código mientras una condición lógica sea true. La condición se evalúa antes de cada iteración. Útil cuando no se conoce de antemano el número de repeticiones necesarias (Cormen et al., 2022).

                tr
                  td #[strong do...while] (condición de salida)
                  td Similar al #[strong while], pero garantiza que el bloque de código se ejecute al menos una vez, ya que la condición se evalúa después de la primera iteración.

                tr
                  td #[strong for] (contador definido)
                  td itera un número definido de veces. Se utiliza comúnmente cuando se conoce con anticipación cuántas veces debe repetirse el ciclo. ideal para recorrer listas, arreglos, o generar secuencias.

      h3 #[u Ciclo while]

      p El ciclo while es una de las estructuras iterativas más básicas y ampliamente utilizadas. Se ejecuta mientras la condición evaluada sea verdadera. Al utilizar una condición de entrada, permite controlar el número de repeticiones según una evaluación dinámica durante la ejecución del programa (Cormen et al., 2022).

      .bg-full-width.bg-color-1.mb-5
        .px-4.px-md-5
          .row.justify-content-center.align-items-center
            .col-lg-auto
              figure
                img(src="@/assets/curso/tema3/4.svg" alt="" style="max-width: 400px;").mx-auto.mb-4.mb-lg-0
            .col-lg
              p Las características principales del #[strong while]  son:
              ul.lista-ul--color
                li.mb-2
                  i.fas.fa-arrow-circle-right
                  | La condición se evalúa antes de cada iteración.
                li.mb-2
                  i.fas.fa-arrow-circle-right
                  | Si la condición es true, el código dentro del ciclo se ejecuta.
                li.mb-2
                  i.fas.fa-arrow-circle-right
                  | Cuando la condición se vuelve false, el ciclo finaliza.
      

      .titulo-figura.mb-2
        h5 Figura 12. 
        span Ejemplo de ciclo while en Python
      
      figure.bg-color-info.p-4.p-md-5.mb-5
        img(src="@/assets/curso/tema3/f12.png", data-aos="zoom-in", style="max-width: 900px").mx-auto.mb-4
      
        p.mb-3 #[strong Explicación:]
        ul.lista-ul--color.color-dark.mb-4
          li.mb-0
            i.fas.fa-arrow-circle-right
            | La variable contador comienza en 1.
          li.mb-0
            i.fas.fa-arrow-circle-right
            | Mientras el contador sea menor o igual a 5, el ciclo imprime el número de iteración.
          li.mb-0
            i.fas.fa-arrow-circle-right
            | Después de cada iteración, el contador se incrementa en 1.
          li.mb-0
            i.fas.fa-arrow-circle-right
            | Cuando el contador llega a 6, la condición contador <= 5 se vuelve falsa y el ciclo finaliza.


      h4(data-aos="fade-up").mb-4 Importancia de la condición de entrada

      p(data-aos="fade-up").mb-4 La condición de entrada en un ciclo while determina si el bloque de código debe ejecutarse o no. Esta condición se evalúa antes de cada iteración. Es fundamental asegurarse de que la condición se modifique dentro del ciclo, de lo contrario, puede producirse un ciclo infinito, lo cual podría provocar que el programa se bloquee o consuma demasiados recursos del sistema.

      .bg-color-8.mb-5(data-aos="fade-up")
        .px-4.px-md-5.py-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema3/5.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 El ciclo while es una herramienta esencial en programación, ya que permite la ejecución repetitiva de instrucciones mientras se cumpla una condición lógica. Su correcto uso implica definir una condición de entrada adecuada y garantizar que cambie dentro del ciclo para evitar iteraciones incontroladas.


      h3(data-aos="fade-up").mb-4 #[u Ciclo do...while]

      p(data-aos="fade-up").mb-4 El ciclo do-while es una estructura iterativa que garantiza la ejecución de un bloque de código al menos una vez, sin importar si la condición es true o false en la primera evaluación. A diferencia del ciclo while, en el que la condición se evalúa antes de ejecutar el código, en el do-while:

      .row.justify-content-center.align-items-stretch.mb-4
        .col-lg-4
          .bg-color-1.p-4(data-aos="fade-left").h-100
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema3/6.svg", style="max-width: 90px").mx-auto
              .col-lg
                h5.mb-2 Primero se ejecuta el bloque de código.
      
        .col-lg-4
          .bg-color-1.p-4(data-aos="fade-left").h-100
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema3/7.svg", style="max-width: 90px").mx-auto
              .col-lg
                h5.mb-2 Luego se evalúa la condición.


        .col-lg-4
          .bg-color-1.p-4(data-aos="fade-left").h-100
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema3/8.svg", style="max-width: 90px").mx-auto
              .col-lg
                h5.mb-2 Si la condición es true, el ciclo se repite; si es false, finaliza.
      

      h4 ¿Cuándo usar do-while?

      p Este tipo de ciclo es ideal para situaciones en las que se necesita garantizar al menos una ejecución del bloque de código. Algunos casos comunes incluyen:

      .bg-full-width.bg-color-2.mb-5
        .px-4.px-md-5
          .row.justify-content-center.align-items-center
            .col-lg-4
              figure
                img(src="@/assets/curso/tema3/9.svg" alt="" style="max-width: 400px;").mx-auto.mb-4.mb-lg-0
            .col-lg-8
              ul.lista-ul--color
                li.mb-2
                  i.fas.fa-arrow-circle-right
                  | Solicitar datos al usuario y validar su entrada.
                li.mb-2
                  i.fas.fa-arrow-circle-right
                  | Mostrar menús interactivos que se deben ejecutar al menos una vez.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Repetir acciones hasta que el usuario decida salir.

      h3 Sintaxis del Ciclo do-while

      p La sintaxis general del ciclo do-while en la mayoría de los lenguajes de programación es la siguiente:

      .titulo-figura.mb-2
        h5 Figura 13. 
        span Sintaxis del ciclo do-while
      
      figure.bg-color-info.p-4.p-md-5.mb-4
        img(src="@/assets/curso/tema3/f13.png", data-aos="zoom-in", style="max-width: 734px").mx-auto


      .titulo-figura.mb-2
        h5 Tabla 1. 
        span Diferencias con el while
      
      .tabla-a.color-acento-contenido.mb-4
        table
          thead
            tr
              th.bg-color-tabla.text-white Característica
              th.bg-color-tabla.text-white while
              th.bg-color-tabla.text-white do-while
          tbody
            tr
              td #[strong Evaluación de la condición]
              td Antes de cada iteración
              td Después de la primera iteración
            tr
              td #[strong Ejecución mínima]
              td Puede no ejecutarse si la condición es falsa desde el inicio
              td Al menos se ejecuta una vez
            tr
              td #[strong Uso común]
              td Cuando se desconoce si se debe ejecutarse el código
              td Cuando se necesita ejecutarse el código al menos una vez

      
      .titulo-figura.mb-2
        h5 Figura 14. 
        span Ejemplo Básico del Ciclo do-while
      
      figure.bg-color-info.p-4.p-md-5.mb-5
        img(src="@/assets/curso/tema3/f14.png", data-aos="zoom-in", style="max-width: 900px").mx-auto
      
        p.mb-3 #[strong Explicación:]
        ul.lista-ul--color.color-dark.mb-4
          li.mb-0
            i.fas.fa-arrow-circle-right
            | Se solicita al usuario que ingrese un número.
          li.mb-0
            i.fas.fa-arrow-circle-right
            | El código se ejecuta al menos una vez, sin importar el valor inicial de número.
          li.mb-0
            i.fas.fa-arrow-circle-right
            | Si el número ingresado es negativo, el ciclo se repite hasta que el usuario ingrese un valor positivo.
          li.mb-0
            i.fas.fa-arrow-circle-right
            | Una vez que la condición número < 0 se vuelve falsa, el ciclo finaliza y el programa continúa.

            
            
      h3(data-aos="fade-up").mb-4 #[u Ciclo for]

      p El ciclo for es una estructura iterativa que permite ejecutar un bloque de código un número determinado de veces. Se utiliza cuando se conoce de antemano el número de iteraciones que se deben realizar.



      .bg-full-width.bg-color-7
        .px-4.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-8
              h2.mb-4(data-aos="flip-up") Ciclo for: estructura clave para iteraciones controladas
              p.mb-4(data-aos="fade-right") Se invita a leer el documento #[strong Ciclo for: estructura clave para iteraciones controladas], donde se aborda el uso y la estructura del ciclo for como herramienta esencial en programación. 
      
              a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_3.pdf')" target="_blank")(data-aos="flip-up")
                .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p <strong>Anexo. </strong> Ciclo for: estructura clave para iteraciones controladas
      
            .col-lg-4
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema3/10.png', alt='')
      


      .bg-full-width.border-top.actividad.bg-color-actividad
        .p-4.p-md-5
          #Actividad                
            <Actividad :cuestionario="cuestionario"/>

      .bg-full-width.border-top.color-primario
        .p-4.p-md-5
          h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
          .row.material-complementario
            .col-12.col-md-6.col-lg-7
              p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
  
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/69236" target="_blank" rel="noopener noreferrer") Flórez Fernández, H. A. (2012). Programación orientada a objetos usando java: ( ed.). Ecoe Ediciones. 
  
  
              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://www.youtube.com/watch?v=dNsikPxA44Q" target="_blank" rel="noopener noreferrer") asaeldev - Crypto & Tech. [@asaeldev] (2015, 13 de agosto). 4.- Ciclos | Fundamentos de programación.
  
            .col-12.col-md-6.col-lg-3.offset-lg-1
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Cuál es la principal ventaja de utilizar funciones en la programación?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Reducir la velocidad de ejecución del programa',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Mejorar la organización y reutilización del código',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Evitar el uso de estructuras de control',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Aumentar la complejidad del código',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              '¡Correcto! Las funciones mejoran la organización y reutilización del código.',
            mensaje_incorrecto:
              'Incorrecto. La principal ventaja es mejorar la organización y reutilización del código.',
            retroalimentacion:
              'Las funciones permiten dividir un programa en partes más pequeñas y reutilizables, facilitando la organización del código y reduciendo la repetición innecesaria.',
          },
          {
            id: 2,
            texto:
              '¿Cuál de las siguientes afirmaciones es cierta sobre la recursión?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Siempre es más eficiente que la iteración',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Una función recursiva siempre necesita una condición de parada',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'La recursión no puede usarse en estructuras de datos',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Sólo los lenguajes funcionales permiten la recursión',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              '¡Correcto! Una función recursiva siempre necesita una condición de parada.',
            mensaje_incorrecto:
              'Incorrecto. La respuesta correcta es que una función recursiva siempre necesita una condición de parada.',
            retroalimentacion:
              'Una función recursiva debe incluir una condición de parada para evitar llamadas infinitas y un consumo excesivo de memoria.',
          },
          {
            id: 3,
            texto:
              '¿Qué significa la modularidad en el desarrollo de software?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Dividir un programa en módulos independientes',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Escribir todo el código en una sola función',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Eliminar la reutilización de código',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Evitar el uso de bibliotecas externas',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              '¡Correcto! La modularidad significa dividir un programa en módulos independientes.',
            mensaje_incorrecto:
              'Incorrecto. La modularidad significa dividir un programa en módulos independientes.',
            retroalimentacion:
              'La modularidad permite dividir un programa en partes más pequeñas y manejables, facilitando su mantenimiento, escalabilidad y reutilización.',
          },
          {
            id: 4,
            texto:
              '¿Cuál de los siguientes problemas es más adecuado para ser resuelto con recursión?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Buscar un elemento en un arreglo ordenado',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Encontrar el factorial de un número',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Sumar los elementos de un arreglo con un bucle for',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Imprimir los números pares del 1 al 100',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              '¡Correcto! El cálculo del factorial es un problema adecuado para la recursión.',
            mensaje_incorrecto:
              'Incorrecto. El cálculo del factorial es un problema adecuado para la recursión.',
            retroalimentacion:
              'El cálculo del factorial es un problema que se resuelve naturalmente con recursión, ya que cada valor depende del resultado de la función aplicada al número anterior.',
          },
          {
            id: 5,
            texto:
              '¿Cuál de los siguientes beneficios no está relacionado con la modularidad en proyectos de software?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Mejora la organización del código',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Permite dividir el trabajo entre varios desarrolladores',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Aumenta la dependencia entre módulos',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Facilita la reutilización de código',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              '¡Correcto! Aumentar la dependencia entre módulos no es un beneficio de la modularidad.',
            mensaje_incorrecto:
              'Incorrecto. Aumentar la dependencia entre módulos no es un beneficio de la modularidad.',
            retroalimentacion:
              'La modularidad busca reducir la dependencia entre módulos, asegurando que cada uno pueda ser modificado o reutilizado sin afectar al resto del sistema.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
