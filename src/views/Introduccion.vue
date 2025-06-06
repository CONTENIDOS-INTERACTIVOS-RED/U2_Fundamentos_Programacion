<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(subTitulo="Introducción")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .row.mb-5
      .col-lg-8
        p(data-aos="fade-left").mb-4 En un mundo donde la tecnología está presente en casi todas nuestras actividades diarias, la programación se ha convertido en una habilidad esencial. Comprender sus fundamentos no solo permite desarrollar soluciones tecnológicas, sino también entender la lógica y estructura detrás de los sistemas que utilizamos a diario. Esta unidad proporciona una base sólida en los principios fundamentales de la programación, abordando los conceptos esenciales que permiten escribir código eficiente y estructurado.
    
        .bg-color-1.p-4(data-aos="fade-left")
          p.mb-0 A lo largo de esta unidad, se explorarán cuatro temas clave que constituyen el núcleo del pensamiento computacional y la resolución de problemas mediante código. Primero, se analizarán las variables y constantes, componentes esenciales para el almacenamiento y manipulación de datos en un programa. Se estudiará cómo se declaran, asignan y utilizan en diferentes lenguajes de programación.
    
      .col-lg-4
        figure
          img(src="@/assets/curso/intro/1.png", data-aos="zoom-in")


    .row.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/intro/2.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left").mb-4 Luego, se abordarán las estructuras condicionales, las cuales permiten la toma de decisiones dentro de un programa, ejecutando diferentes bloques de código según se cumplan ciertas condiciones. Este concepto es crucial para desarrollar aplicaciones dinámicas y adaptables.
    
        .bg-color-8.p-4(data-aos="fade-left").mb-4
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/intro/3.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Posteriormente, se explorarán los ciclos y estructuras iterativas, herramientas fundamentales que permiten repetir bloques de código de manera controlada, optimizando procesos y reduciendo la redundancia en la programación. Se estudiarán los diferentes tipos de bucles, su aplicación y cómo optimizar su uso para mejorar la eficiencia del código.
    

</template>
