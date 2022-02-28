<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero.text-white
        span 2
      h1 Plan de carga

    .row.justify-content-center.mb-4
      .col-lg
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/img38.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 El plan de carga implica una serie de actividades coordinadas para asegurar una operación adecuada que garantice el cumplimiento de los pedidos realizados por el cliente. A continuación, se detallan algunos aspectos importantes.

    // 2.1
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 2.1  Procedimientos

    .row
      .col-lg-8.col-12
        p.mb-5(data-aos="fade") Las operaciones de carga de transporte deben desarrollarse en centros de acopio para disminuir tiempos en los procesos de cargue, descargue y trámites de acarreo, además permite reducir la ocupación del espacio público generada por el cargue y descargue de camiones. Este cargue requiere vías de acceso especializada y conectada con la región a través de centros de acopio externos, situados en la periferia o en municipios vecinos para su respectiva distribución.

        .cajon.color-primario.p-4.mb-4
          p Es necesario controlar el peso de los vehículos de carga en los accesos al perímetro urbano a través de la implantación de básculas de pesaje sujeto a las restricciones de transporte de carga pesada en las centralidades.

      .col-lg-4.col-12
        .px-md-4.px-3
          img(src='@/assets/curso/tema2/img40.svg' data-aos="zoom-in")


    p.mb-4 <strong>Arias (2019)</strong> establece un procedimiento logístico para lograr un proceso coordinado en la distribución, indicando los siguientes pasos:

    ol.lista-ol--cuadro.my-4
      li
        .lista-ol--cuadro__vineta
          span 1
        | Recepción de servicio.
      li
        .lista-ol--cuadro__vineta
          span 2
        | Asignación de chofer.
      li
        .lista-ol--cuadro__vineta
          span 3
        | Entrega de check y registro de despacho en la nube.
      li
        .lista-ol--cuadro__vineta
          span 4
        | Envío de información al cliente.
      li
        .lista-ol--cuadro__vineta
          span 5
        | Seguimiento del contenedor.
      li
        .lista-ol--cuadro__vineta
          span 6
        | Llenado del contenedor y colocación de sellos.
      li
        .lista-ol--cuadro__vineta
          span 7
        | Confirmación de salida del contenedor hacia el puerto.
      li
        .lista-ol--cuadro__vineta
          span 8
        | Gestión de ingreso al puerto.
      li
        .lista-ol--cuadro__vineta
          span 9
        | Entrega de contenedor a puerto con la documentación.
      li
        .lista-ol--cuadro__vineta
          span 10
        | Facturación.


    Separador


    // 2.1
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 2.2  Métodos de cargue

    p.mb-4(data-aos="fade") En el método de cargue existen algunas recomendaciones apropiadas para una correcta operación:

    .row.justify-content-center
      .col-lg-8.col-sm-12

        PasosA.color-secundario.my-5(tipo="n")
          .row.align-items-center.justify-content-center
            .col-md-8.mb-4.mb-md-0
              p Seleccionar los empaques y embalajes de acuerdo con la naturaleza de la carga y los procesos logísticos

            .col-auto
              figure
                img(src='@/assets/curso/tema2/img41.svg')
          .row.align-items-center.justify-content-center
            .col-auto
              figure.mb-4
                img(src='@/assets/curso/tema2/img42.svg')
            .col-md-8.mb-4.mb-md-0
              p Colocar las unidades en el empaque mediante las diferentes técnicas y métodos a través de equipos y tecnologías teniendo en cuenta las características, naturaleza de la mercancía y normas de seguridad e higiene

          .row.align-items-center.justify-content-center
            .col-md-8.mb-4.mb-md-0
              p Agrupar envases primarios o secundarios para el transporte o distribución comercial de acuerdo a los métodos o técnicas establecidas y normas señaladas por la empresa

            .col-auto
              figure
                img(src='@/assets/curso/tema2/img43.svg')

          .row.align-items-center.justify-content-center
            .col-auto
              figure.mb-4
                img(src='@/assets/curso/tema2/img44.svg')
            .col-md-8.mb-4.mb-md-0
              p Identificar los productos a través de rótulos, adhesivos, stickers en el lugar asignado apoyados con tecnología.

          .row.align-items-center.justify-content-center
            .col-md-8.mb-4.mb-md-0
              p Agrupar la carga en una unidad de acuerdo a las técnicas y métodos establecidos.
            .col-auto
              figure
                img(src='@/assets/curso/tema2/img45.svg')


    // 2.1
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 2.3  Ruta e itinerario

    p.mb-4 El diseño de rutas de transporte de carga permite a las empresas planificar estrategias de distribución logística previendo posibles situaciones que obstaculicen las entregas de mercancía, teniendo en cuenta los recursos y parámetros necesarios que se deben cumplir con el contrato de entrega.

    //Para determinar las rutas óptimas y el itinerario es importante tener en cuenta la información que nos registra el siguiente recurso:

    p.mb-4 En el diseño de una ruta de transporte de carga refrigerada intervienen distintos elementos, tanto internos como externos a la empresa, por esto para definir la ruta e itinerario es necesario considerar los siguientes aspectos:


    //- LineaTiempoE debe ir acompañado de una de una de estas clases =>
    //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
    LineaTiempoE.color-acento-contenido

      div(titulo="1. Conocer la demanda de productos.")
        figure
          img(src='@/assets/curso/tema2/img46.jpg')
          figcaption Conocer la demanda de productos.

      div(titulo="2. Detallar la capacidad en volumen y peso de los vehículos.")
        figure
          img(src='@/assets/curso/tema2/img47.jpg')
          figcaption Detallar la capacidad en volumen y peso de los vehículos.

      div(titulo="3. Establecer el número de entregas diarias por ruta.")
        figure
          img(src='@/assets/curso/tema2/img48.jpg')
          figcaption Establecer el número de entregas diarias por ruta.

      div(titulo="4. Conocer el límite de kilómetros recorridos por vehículo.")
        figure
          img(src='@/assets/curso/tema2/img49.jpg')
          figcaption Conocer el límite de kilómetros recorridos por vehículo.

      div(titulo="5. Determinar la cantidad de productos distribuidos en cada ruta.")
        figure
          img(src='@/assets/curso/tema2/img50.jpg')
          figcaption Determinar la cantidad de productos distribuidos en cada ruta.

      div(titulo="6. Planear el tiempo máximo de cada ruta.")
        figure
          img(src='@/assets/curso/tema2/img51.jpg')
          figcaption Planear el tiempo máximo de cada ruta.

      div(titulo="7. Decidir el Intervalo de Km entre las entregas.")
        figure
          img(src='@/assets/curso/tema2/img52.jpg')
          figcaption Decidir el Intervalo de Km entre las entregas.


</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
    mostrarIndicador: true,
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
