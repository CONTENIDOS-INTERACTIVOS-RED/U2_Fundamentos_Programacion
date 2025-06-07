<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'2. Condicionales'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

      .bg-color-3.mb-5(data-aos="fade-up")
        .row.justify-content-center.align-items-center
          .col-lg
            .p-4
              p.mb-0(data-aos="fade-up") Las estructuras condicionales son una parte esencial en la programación, ya que permiten tomar decisiones dentro del flujo de ejecución de un programa. En su forma más básica, una estructura condicional permite que el programa actúe de manera diferente dependiendo de si una determinada condición es verdadera o falsa (Juganaru Mathieu, 2015). Esta capacidad de "tomar decisiones" según ciertos criterios es fundamental para crear programas dinámicos, capaces de adaptarse a distintas situaciones.
          .col-lg-auto
            figure
              img(src='@/assets/curso/tema2/1.png', alt='')
      
  
      h2 ¿Qué son las estructuras condicionales?


      .row.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/2.png", data-aos="zoom-in")
        .col-lg-8
          p(data-aos="fade-left").mb-5 Las estructuras condicionales son bloques de código que se ejecutan solo si se cumple una determinada condición. Estas condiciones son expresiones lógicas que se evalúan como verdaderas o falsas. Dependiendo del resultado, se define qué conjunto de instrucciones se ejecutará (Juganaru Mathieu, 2015).
      
          .bg-color-8.p-4(data-aos="fade-left").mb-4
            .row.align-items-start
              .col-lg-auto
                img(src="@/assets/curso/tema2/3.svg", style="max-width: 90px").mx-auto
              .col-lg
                p #[strong Ejemplo práctico:]
                p.mb-0 Si un programa debe determinar si una persona es mayor de edad o no, evaluará la edad de la persona mediante una condición y tomará una decisión con base en esa evaluación.
      
      h2 Importancia de las condicionales

      .row.mb-5
        .col-lg-8
          p(data-aos="fade-left").mb-5 El uso de condicionales es crucial porque permite que un programa se adapte a diferentes entradas y escenarios. Sin estas estructuras, un programa seguiría siempre el mismo flujo, sin tener en cuenta los datos o situaciones específicas.
      
          .bg-color-1.p-4(data-aos="fade-left")
            p.mb-0 Gracias a las condicionales, el flujo del programa puede ramificarse y realizar distintas acciones según las condiciones dadas. Esto posibilita la creación de programas que respondan de manera inteligente a las interacciones del usuario, los resultados de cálculos o cualquier otro evento dinámico que ocurra durante la ejecución.
      
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/4.png", data-aos="zoom-in")
      
      h2 Sintaxis básica de condicionales

      .row.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/5.png", data-aos="zoom-in")
        .col-lg-8
          p(data-aos="fade-left").mb-4 El dominio de la sintaxis básica de las condicionales es fundamental para que un programador pueda estructurar correctamente las instrucciones que alteran el flujo del programa según ciertos criterios (Arbones Malisani, 1991).
      
          .bg-color-8.p-4.p-lg-5
            p.mb-0 La estructura básica de una condicional utiliza la palabra clave #[strong if] (o su equivalente en otros lenguajes), seguida de una condición lógica. Si la condición es verdadera, se ejecuta un bloque de código; si es falsa, se omite.

      h2 Estructura General de una Condicional

      p(data-aos="fade-left").mb-5 La sintaxis condicional está compuesta por tres elementos esenciales, que se presentan a continuación:

      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/6V5n519VveY?si=h7jnbXEMcwLPc17y" title="Estructura General de una Condicional" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

      #t_2_1.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.1] Sintaxis del #[u if] en diferentes lenguajes

      .row.mb-4
        .col-lg-8
          p(data-aos="fade-left") La sintaxis puede variar según el lenguaje, pero la estructura fundamental permanece constante. A continuación, se ilustran ejemplos de la sintaxis básica de condicionales en diferentes lenguajes de programación.
      
          h2 Sintaxis en C
      
          p(data-aos="fade-left") En el #[strong lenguaje C], la sintaxis básica para una condicional if es la siguiente:
      
        .col-lg-4.d-none.d-sm-block
          figure
            img(src="@/assets/curso/tema2/6.png", data-aos="zoom-in").mb-4.mb-lg-0



      .titulo-figura.mb-2
        h5 Figura 1. 
        span Condicional simple

      
      figure.bg-color-info.p-4.p-md-5.mb-5
        img(src="@/assets/curso/tema2/f1.png", data-aos="zoom-in", style="max-width: 734px").mx-auto
      
      p #[strong Ejemplo:] Si se quiere verificar si una persona es mayor de edad (18 años o más), la estructura podría ser:

      .titulo-figura.mb-2
        h5 Figura 2. 
        span Ejemplo condicional simple

      
      figure.bg-color-info.p-4.p-md-5.mb-4
        img(src="@/assets/curso/tema2/f2.png", data-aos="zoom-in", style="max-width: 570px").mx-auto

      p En este caso, la condición edad >= 18 se evalúa. Si la edad es mayor o igual a 18, se ejecuta el bloque de código que imprime el mensaje en pantalla.


      
      .row.mb-5
        .col-lg-8
          h2.mt-5 Sintaxis en Python

          p En Python, la sintaxis de la estructura condicional if es muy simple y clara:
      
        .col-lg-4.d-none.d-sm-block
          figure
            img(src="@/assets/curso/tema2/7.png", data-aos="zoom-in").mb-4.mb-lg-0


      .titulo-figura.mb-2
        h5 Figura 3. 
        span Condicional sintaxis en Python
      
      figure.bg-color-info.p-4.p-md-5.mb-4
        img(src="@/assets/curso/tema2/f3.png", data-aos="zoom-in", style="max-width: 734px").mx-auto
      
      p #[strong Ejemplo:] Para verificar si una persona es mayor de edad:

      .titulo-figura.mb-2
        h5 Figura 4. 
        span Ejemplo de condicional

      
      figure.bg-color-info.p-4.p-md-5.mb-4
        img(src="@/assets/curso/tema2/f4.png", data-aos="zoom-in", style="max-width: 570px").mx-auto

      p En este ejemplo, Python no requiere el uso de llaves { } para definir el bloque de código, sino que depende de la indentación (espacios o tabulaciones) para identificar qué instrucciones deben ejecutarse dentro del if.
      

      .row.mb-5
        .col-lg-8
          h2.mt-5 Sintaxis en JavaScript

          p En JavaScript, la sintaxis sigue un formato muy similar al de C:
      
        .col-lg-4.d-none.d-sm-block
          figure
            img(src="@/assets/curso/tema2/8.png", data-aos="zoom-in").mb-4.mb-lg-0

      .titulo-figura.mb-2
        h5 Figura 5. 
        span Condicional en JavaScript
      
      figure.bg-color-info.p-4.p-md-5.mb-4.mb-5
        img(src="@/assets/curso/tema2/f5.png", data-aos="zoom-in", style="max-width: 734px").mx-auto

      .titulo-figura.mb-2
        h5 Figura 6. 
        span Ejemplo: Para verificar si una persona es mayor de edad:

      
      figure.bg-color-info.p-4.p-md-5.mb-5
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/f6.png", data-aos="zoom-in", style="max-width: 400px").mx-auto
          .col-lg
            p Al igual que en C, en JavaScript se utilizan llaves {} para definir el bloque de código.


      h2.mb-4 Operadores Condicionales

      .bg-color-3.mb-5(data-aos="fade-up")
        .row.justify-content-center.align-items-center
          .col-lg-auto
            figure
              img(src='@/assets/curso/tema2/9.png', alt='')
          .col-lg
            .p-4
              p.mb-0(data-aos="fade-up") Los operadores en programación son herramientas fundamentales para comparar valores y combinar expresiones dentro de las estructuras condicionales. Estos operadores son esenciales para evaluar condiciones dentro de las estructuras de control, como las condicionales if, permitiendo tomar decisiones dentro del flujo de ejecución del programa. El dominio de los operadores permite a un programador crear expresiones más complejas y específicas en las condiciones, haciendo que el programa se comporte de manera más flexible y adaptada a diversas situaciones (Arbones Malisani, 1991).

      #t_2_2.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.2] Operadores de comparación

      .row.mb-5
        .col-lg-8
          .bg-color-4.px-4.py-5(data-aos="fade-left").mb-4
            p.mb-0 Los operadores de comparación se utilizan para comparar dos valores y determinar si son iguales, diferentes, mayores, menores, etc. Estas comparaciones generan valores lógicos que pueden ser true (verdadero) o false (falso). El resultado de la comparación determina qué ruta tomará el flujo de ejecución dentro de una estructura condicional (Juganaru Mathieu, 2015).
          
        .col-lg-4.d-none.d-sm-block
          figure
            img(src="@/assets/curso/tema2/10.png", data-aos="zoom-in").mb-4.mb-lg-0


      h2 Operadores comunes y su función
      
      p La siguiente infografía describe los operadores de comparación más utilizados en la mayoría de los lenguajes de programación:


      .bg-full-width.bg-color-info
        .p-4.p-md-5
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-10
              ImagenInfografica.color-secundario
                template(v-slot:imagen)
                  figure
                    img(src='@/assets/curso/tema2/info1.png', alt='', style="max-width: 1161px;").mx-auto
      
                .bg-color-white.box-shadow.p-3(x="2.3%" y="84.5%" numero="+")
                  h5 <= Menor o igual que
                  p Verifica si el valor de la izquierda es menor o igual al de la derecha.
      
                .bg-color-white.box-shadow.p-3(x="7.5%" y="59%" numero="+")
                  h5 < Menor que
                  p Determina si el valor de la izquierda es menor que el de la derecha.
      
                .bg-color-white.box-shadow.p-3(x="23.5%" y="20%" numero="+")
                  h5 == Igualdad
                  p Compara si dos valores son #[strong iguales]. Devuelve #[em true] si lo son, #[em false] en caso contrario.
      
                .bg-color-white.box-shadow.p-3(x="86.5%" y="20%" numero="+")
                  h5 != Desigualdad
                  p Verifica si dos valores son diferentes. Devuelve true si no son iguales.
      
                .bg-color-white.box-shadow.p-3(x="93%" y="51.5%" numero="+")
                  h5 > Mayor que
                  p Evalúa si el valor de la izquierda es mayor que el de la derecha.

                .bg-color-white.box-shadow.p-3(x="97.5%" y="84.5%" numero="+")
                  h5 >= Mayor o igual que
                  p Comprueba si el valor de la izquierda es mayor o igual que el valor de la derecha.

      .bg-full-width.bg-color-2.mb-4
        .px-4.px-md-5.py-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/11.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Estos operadores son fundamentales para construir expresiones lógicas dentro de sentencias condicionales como #[em if, else if, switch,] entre otras. Al evaluarse, dichas expresiones determinan si un determinado bloque de código debe ejecutarse o no.


      .titulo-figura.mb-2
        h5 Figura 7. 
        span Ejemplo en JavaScript
      
      figure.bg-color-info.p-4.p-md-5.mb-4
        img(src="@/assets/curso/tema2/f7.png", data-aos="zoom-in", style="max-width: 570px").mx-auto

      p.mb-5 En este caso, numero <= 10 evalúa si el número es menor o igual a 10. La condición es verdadera, por lo que el mensaje se imprime.

      .titulo-figura.mb-2
        h5 Figura 8. 
        span Ejemplo en Python

      
      figure.bg-color-info.p-4.p-md-5.mb-4
        img(src="@/assets/curso/tema2/f8.png", data-aos="zoom-in", style="max-width: 570px").mx-auto

      p En este caso, edad < 18 evalúa si la persona es menor de 18 años. Como la edad es 15, la condición es verdadera y el mensaje se imprime.


      h2 Operadores Lógicos

      p Los operadores lógicos permiten combinar múltiples condiciones dentro de una sola expresión condicional. Estos operadores son útiles cuando se desea realizar verificaciones más complejas que involucren varias condiciones.

      .row.justify-content-center.mb-5
        .col-lg-11

          LineaTiempoD.color-primario.large(data-aos="fade-right")
            div(numero="1" titulo="Y Lógico (&&)")
              p El operador && (AND) devuelve verdadero si ambas condiciones son verdaderas. Si alguna de las condiciones es falsa, el resultado será falso.


              .titulo-figura.mb-2
                h5 Figura 9. 
                span Ejemplo en C
              
              figure.bg-color-info.p-4.p-md-5.mb-4
                img(src="@/assets/curso/tema2/f9.png", data-aos="zoom-in", style="max-width: 570px").mx-auto
              
              p Aquí, la condición edad >= 18 && tieneLicencia se evalúa como verdadera sólo si ambas condiciones son verdaderas (es decir, la persona tiene 18 años o más y tiene licencia). Si alguna de las condiciones es falsa, no se ejecuta el bloque de código.
              

            div(numero="2" titulo="O Lógico (||)")
              p El operador || (OR) devuelve verdadero si al menos una de las condiciones es verdadera. Si ambas son falsas, el resultado será falso.

              .titulo-figura.mb-2
                h5 Figura 10. 
                span Ejemplo en Python
              
              figure.bg-color-info.p-4.p-md-5
                img(src="@/assets/curso/tema2/f10.png", data-aos="zoom-in", style="max-width: 570px").mx-auto
              
              p En este ejemplo, edad >= 18 or tienePermiso será verdadero si al menos una de las condiciones se cumple. Si la edad no es mayor o igual a 18, pero tiene permiso, el mensaje se imprimirá.


            div(numero="3" titulo="No Lógico (!)")
              p El operador ! (NOT) invierte el valor lógico de la condición. Si la condición es verdadera, se convierte en falsa, y si es falsa, se convierte en verdadera.

              .titulo-figura.mb-2
                h5 Figura 11. 
                span Ejemplo en JavaScript
              
              figure.bg-color-info.p-4.p-md-5
                img(src="@/assets/curso/tema2/f11.png", data-aos="zoom-in", style="max-width: 570px").mx-auto

              p En este caso, la condición !tieneCarne invierte el valor de tieneCarne. Como tieneCarne es falso, !tieneCarne se convierte en verdadero y se ejecuta el bloque de código.
      

      .bg-full-width.bg-color-7
        .px-4.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-4
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema2/14.png', alt='')
      
            .col-lg-8
              h2.mb-4(data-aos="flip-up") Estructuras condicionales en programación
              p.mb-4(data-aos="fade-right") Se invita a leer el documento #[strong Estructuras condicionales en programación], donde se aborda el uso de estructuras condicionales como herramientas clave para la toma de decisiones en el desarrollo de software.
      
              a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_2.pdf')" target="_blank")(data-aos="flip-up")
                .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p <strong>Anexo. </strong> Estructuras condicionales en programación
        





      .bg-full-width.border-top.color-primario
        .p-4.p-md-5
          h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
          .row.material-complementario
            .col-12.col-md-6.col-lg-7
              p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
  
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/74076" target="_blank" rel="noopener noreferrer") Menchaca García, F. R. (2010). Fundamentos de programación en Lenguaje C: ( ed.). Instituto Politécnico Nacional. 
  
              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://www.youtube.com/watch?v=sMo0Ri4enHk" target="_blank" rel="noopener noreferrer") Campus Virtual Intec. (2016, 12 de julio). Programación con Processing: condicionales
  
            .col-12.col-md-6.col-lg-3.offset-lg-1
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='')
  
  </template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
