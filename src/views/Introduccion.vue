<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero.text-white
        span
          i.fas.fa-info
      h1 Introducción

    p.mb-4(data-aos="fade") Mediante el siguiente video, se da la bienvenida al componente formativo <strong>“Preparación del proceso de transporte de carga refrigerada”</strong>, este será un espacio que permitirá la reflexión para detectar las buenas prácticas en el transporte de carga y el manejo de contenedores, los planes de ruta y la salud, así como la seguridad del operario en relación con la necesidad de control de calidad:

    figure.mb-5
      img(src='@/assets/curso/intro-banner.png', alt='Preparación del proceso de transporte de carga refrigerada')


    .row.justify-content-center.tarjeta.fondo-video.mb-4.py-5(data-aos="fade-down")
      .col-md-10
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/ed4u5FiCnS4" title="Preparación del proceso de transporte de carga refrigerada" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
