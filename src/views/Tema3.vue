<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero.text-white
        span 3
      h1 Inspección de carga

    .row.my-4
      .col-lg-8.col-12.align-items-center
        p.mb-5(data-aos="fade") La inspección de carga se realiza con el fin de proporcionar seguridad en el envío del producto por parte del vendedor, además respalda del envió de la carga comparada con las características correspondientes en cuanto a calidad, cantidad, referencias y todo lo correspondiente al producto comercializado. Se interpreta como un proceso de auditoría e inspección. Esta operación se debe realizar a toda clase productos.
        .cajon.color-primario.p-4
          p.mb-0 En algunos casos esta operación requiere el uso de tecnología necesaria para una inspección adecuada y eficiente, por lo tanto, en algunos casos es necesaria la utilización de escáneres dependiendo de la naturaleza de la carga.
      .col-lg-4.col-12.px-4
        img(src='@/assets/curso/tema3/img53.svg' data-aos="zoom-in")


    // 3.1
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 3.1  Control de cantidad y calidad de la carga

    p.mb-4(data-aos="fade") En el proceso de revisión y control de carga del contenedor es necesario seleccionar varias cajas al azar con el fin de verificar el estado y la cantidad de la mercancía correspondiente al pedido, además de la verificación del embalaje que incluya los códigos de barra asignados, etiquetas y materia del empacado en general. A continuación, se presentan recomendaciones que hacen parte de la inspección y control de la carga:


    .titulo-quinto.color-acento-contenido
      h4 Proceso de inspección y control de la carga

    .row.my-4.justify-content-center
      .col-lg-8.py-3
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        LineaTiempoD.color-secundario
          .row(numero="1" titulo="Planificar el proceso de carga y descarga: definir horarios y rutas.")
            .col-md-10
              figure.my-2
                img(src='@/assets/curso/tema3/img54.jpg')

          .row(numero="2" titulo="Agrupar entregas por categoría: tamaño, región y orden de entrega.")
            .col-md-10
              figure
                img(src='@/assets/curso/tema3/img55.jpg')

          .row(numero="3" titulo="Vigilar el proceso de carga y descarga.")
            .col-md-10
            figure
              img(src='@/assets/curso/tema3/img56.jpg')

          .row(numero="4" titulo="Revisar los documentos.")
            .col-md-10
              figure
                img(src='@/assets/curso/tema3/img57.jpg')

          .row(numero="5" titulo="Capacitar al equipo de trabajo.")
            .col-md-10
            figure
              img(src='@/assets/curso/tema3/img58.jpg')

          .row(numero="6" titulo="Implementar tecnología.")
            .col-md-10
              figure
                img(src='@/assets/curso/tema3/img59.jpg')

    // 3.1
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 3.2  Mercancías inspeccionadas y analizadas

    figure.mb-5
      img(src='@/assets/curso/tema3/img60.jpg')

    p.mb-4 Las mercancías que han sido inspeccionadas deben cumplir con unas condiciones específicas para que realmente se cuente con la firmeza que cumplan con las condiciones para el consumo humano o utilización para otros seres vivos, entre estos están las siguientes:

    ul.lista-ul--color
      li
        i.fas.fa-check
        | Inspección (calidad, cantidad, empaquetado, rotulado aspecto visual).
      li
        i.fas.fa-check
        | Control de peso.
      li
        i.fas.fa-check
        | Análisis de laboratorio.

</template>

<script>
export default {
  name: 'Tema3',
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
