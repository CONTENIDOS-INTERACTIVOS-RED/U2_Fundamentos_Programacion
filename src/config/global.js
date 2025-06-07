export default {
  global: {
    numeroUnidad: '2',
    tituloUnidad: 'Tipos de datos y estructuras de control',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Variables y constantes',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Condicionales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Sintaxis del if en diferentes lenguajes',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Operadores de comparació',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Ciclos y estructura iterativas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Flórez Fernández, H. A. (2012). Programación orientada a objetos usando java: ( ed.). Ecoe Ediciones.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/69236',
    },
    {
      referencia:
        'Zohonero Martínez, I. & Joyanes Aguilar, L. (2008). Estructuras de datos en Java: ( ed.). McGraw-Hill España.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/50117',
    },
    {
      referencia:
        'Arbones Malisani, E. A. (1991). Ingeniería de sistemas: ( ed.). Marcombo.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/101860',
    },
    {
      referencia:
        'Juganar Mathieu, M. (2015). Introducción a la programación: ( ed.). Grupo Editorial Patria.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/39449',
    },
    {
      referencia:
        'Cormen, T. H., Leiserson, C. E., Rivest, R. L., & Stein, C. (2022). Introduction to Algorithms (4ª ed.). MIT Press.',
      link:
        'https://mitpress.mit.edu/books/introduction-algorithms-fourth-edition',
    },
    {
      referencia:
        'Marzal Varó, A., García Sevilla, P. & Gracia Luengo, I. (2016). Introducción a la programación con Python 3: ( ed.). D - Universitat Jaume I. Servei de Comunicació i Publicacions.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/51760',
    },
  ],
  glosario: [
    {
      termino: 'Algoritmo',
      significado:
        'Conjunto de pasos ordenados y finitos que resuelven un problema o ejecutan una tarea específica en programación.',
    },
    {
      termino: 'Bucle',
      significado:
        'Estructura que permite repetir un conjunto de instrucciones varias veces mientras se cumpla una condición específica.',
    },
    {
      termino: 'Condición',
      significado:
        'Expresión lógica que evalúa como verdadera o falsa y determina el flujo de ejecución en estructuras condicionales y ciclos.',
    },
    {
      termino: 'Condicional',
      significado:
        'Instrucción de control que ejecuta diferentes bloques de código según si una condición se cumple o no (por ejemplo, if-else).',
    },
    {
      termino: 'Constante',
      significado:
        'Espacio de memoria cuyo valor no cambia durante la ejecución del programa, utilizado para representar datos inmutables.',
    },
    {
      termino: 'Estructura de control',
      significado:
        'Conjunto de instrucciones que modifican el flujo de ejecución del programa, como condicionales y bucles.',
    },
    {
      termino: 'Estructura iterativa',
      significado:
        'Tipo de estructura de control que permite repetir un bloque de código un número determinado o indeterminado de veces.',
    },
    {
      termino: 'Iteración',
      significado:
        'Repetición de un conjunto de instrucciones dentro de un ciclo hasta que se cumpla una condición de finalización.',
    },
    {
      termino: 'Sentencia de control',
      significado:
        'Instrucción que altera el flujo normal de ejecución del programa, como break, continue o return.',
    },
    {
      termino: 'Variable',
      significado:
        'Espacio en memoria utilizado para almacenar datos cuyo valor puede cambiar durante la ejecución del programa.',
    },
    {
      termino: 'Variable de control',
      significado:
        'Variable que se usa dentro de un ciclo para definir el número de iteraciones o controlar la ejecución del bucle.',
    },
    {
      termino: 'While',
      significado:
        'Tipo de bucle que ejecuta un bloque de código repetidamente mientras una condición sea verdadera.',
    },
  ],
}
