<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5


    .titulo-principal.color-acento-contenido
      .titulo-principal__numero.text-white
        span 1
      h1 Características técnicas del transporte de carga refrigerada

    .row.justify-content-center.mb-4
      .col-lg
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/img1.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 El transporte de carga refrigerada requiere de condiciones técnicas específicas para asegurar la conservación y buen estado de los alimentos y productos que se transportan. En los siguientes ítems se describen estas condiciones.

    //p.mb-4(data-aos="fade") El transporte de carga refrigerada requiere de condiciones técnicas específicas para asegurar la conservación y buen estado de los alimentos y productos que se transportan. En los siguientes ítems se describen estas condiciones.

    //figure.mb-5
      img(src='@/assets/curso/tema1/img1.jpg', alt='Características técnicas del transporte de carga refrigerada')


    // 1.1
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 1.1  Temperaturas y cadena de frío

    p.mb-4 <span class="etiqueta">La <strong>cadena de frío</strong> es el <strong>proceso de garantizar el mantenimiento de la temperatura de los productos perecederos</strong> a lo largo de fases sucesivas.</span>De acuerdo con la circular externa DAB 400-1395-17 (INVIMA) expedida por la dirección de alimentos y bebidas de Invima, se deben considerar las condiciones que se registran en las siguientes tablas 1 y 2:

    //.row.justify-content-center.mb-5.color-gray
      .col-10.col-sm-10.py-5
        .row.justify-content-center.align-items-center
          .col-md-8.col-12
            p.mb-0(data-aos="fade") La cadena de frío es el proceso de garantizar el mantenimiento de la temperatura de los productos perecederos a lo largo de fases sucesivas. De acuerdo con la circular externa DAB 400-1395-17 (INVIMA) expedida por la dirección de alimentos y bebidas de Invima, se deben considerar las condiciones que se registran en las siguientes tablas 1 y 2:

          .col-md-4.col-8
            img(src='@/assets/curso/tema1/img2.png', alt='Temperaturas y cadena de frío').py-4


    .titulo-sexto.color-acento-3.mt-4
      h5 Tabla 1
      div.fst-italic Conservación en los alimentos refrigerados
    .tabla-a.color-acento-botones.mb-5
      table
        caption Nota. Departamento de Salud y Servicios Humanos de EE.UU. (2021).
        thead
          tr
            th.table-title-head.py-4(colspan='4') Conservación en los alimentos refrigerados
          tr
            th Alimento
            th Almacenamiento Refrigeración T°C / Tiempo Almacenamiento Máximo
            th Almacenamiento Congelación T°C / Tiempo Almacenamiento Máximo
            th Microorganismo patógeno asociado al alimento
        tbody
          tr
            td Hamburguesa y preparación con carne molida (hamburguesa carne molida de vaca, pavo, ternera, cerdo, cordero y mezcla de todas).

            td.color-acento4 4,4°C / 1 a 2 días.
            td.color-acento4 - 18°C / 3 a 4 meses.
            td.color-acento4 <i>Escherichia coli</i> O157:H7 <br><i>Salmonella</i>

          tr
            td Carne fresca de vaca, ternera, cordero y cerdo.
            td.color-acento4 Filetes y chuletas 4,4°C / 4 a 5 días.
            td.color-acento4 Filetes y chuletas 18°C / 6 a 12 meses y 4 a 6 meses.
            td.color-acento4 <i>Escherichia coli</i> O157:H7, en carne de rumiantes. <i>Salmonella staphylocpccus aureus. Listeria monocytogenes.</i>

          tr
            td Carne fresca de ave.
              | <br>Pollo o pavo entero.
              | <br>Pollo o pavo en trozos.

            td.color-acento4 4,4°C / 1 a 2 días.
            td.color-acento4 - 18°c / 1 año y 9 meses.
            td.color-acento4 <i>Salmonella Campylobacter jejuni</i><br><i>Escherichia coli(E. coli) Listeria monocytogenes</i> <br><i>Staphylococcus aureus</i>

          tr
            td Pescados y mariscos.
              | <br>Pescados magros y grasos.
              | <br>Camarones, ostiones, langostas y calamares frescos.
            td.color-acento4 4,4°C / 1 a 2 días.
            td.color-acento4 - 18°c / 6 meses y 2 a 3 meses y 3 a 6 meses.
            td.color-acento4 <i>Vibrio clolerae.</i>


    .titulo-sexto.color-acento-3.mt-4
      h5 Tabla 2
      div.fst-italic  Cadena de frio para alimentos refrigerados
    .tabla-a.color-acento-botones.mb-5
      table
        caption Nota. Adaptado del Invima.
        thead
          tr
            th.table-title-head.py-4(colspan='2') Cadena de frio para alimentos refrigerados
          tr
            th Tipo de alimento
            th Temperatura
        tbody
          tr
            td Comidas preparadas.
            td.color-acento4
              | <= 4°C, si se conservan más de 24 h	/ <= 8°C, si se conservan menos de 24 h.
              hr.linea
              | <= -18°C, si se conservan congeladas / >= 65°C, si se conservan calientes.
          tr
            td Carnes frescas, de ovinos, porcinos, bovinos y equinos.
            td.color-acento4
              | <= 7°C, si se conservan en refrigeración / <= -12°C, si se conservan congeladas.
          tr
            td Carnes frescas, de conejo doméstico y de aves de corral (gallinas, pavos, ocas, patos…) porcinos, bovinos y equinos.
            td.color-acento4
              | <= 4°C, si se conservan en refrigeración / <= -12°C, si se conservan congeladas.
          tr
            td Carnes de animales de caza silvestre (conejos, liebres, perdices, ciervos, jabalíes).
            td.color-acento4
              | <= 7°C, si es caza mayor en refrigeración / <= 4°C, si es caza menor en refrigeración.
              hr.linea
              | <= -12°C, si se conservan congeladas.
          tr
            td Vísceras y despojos comestibles.
            td.color-acento4
              | <= 3°C, si se conservan en refrigeración / <= -12°C, si se conservan congeladas.
          tr
            td Carnes picadas.
            td.color-acento4
              | <= 2°C, si se conservan en refrigeración / <= -18°C, si se conservan congeladas.
          tr
            td Preparados de carne (hamburguesas, albóndigas, filetes rusos, aves rellenas…).
            td.color-acento4
              | Preparados de carne refrigerados que contengan carne picada: <= 2°C.
              |<br>Preparados de carne refrigerados que contengan vísceras comestibles: <= 3°C
              |<br>Preparados de carne refrigerados elaborados con carnes frescas: <= 7°C.
              |<br>Preparados de carne refrigerados elaborados con carnes frescas de aves de corral: <= 4°C
              |<br>Preparados de carne ultracongelados: <= - 18°C
          tr
            td Productos cárnicos.
            td.color-acento4
              | <= 5°C, si es jamón o paleta cocidos y fiambres.
              |<br>Para el resto a las temperaturas indicadas por el fabricante o envasador, que figuran en el etiquetado.

          tr
            td Frutas y hortalizas frescas.
            td.color-acento4
              | No hay temperaturas reglamentarias. Se recomiendan T entre 10 y 12°C.
          tr
            td Frutas y hortalizas frescas, cortadas, limpias y envasadas.
            td.color-acento4
              | A las temperaturas indicadas por el fabricante o envasador, que figuran en el etiquetado.

          tr
            td Pescados frescos y refrigerados.
            td.color-acento4
              | A la T más próxima a la de fusión del hielo (0°C).
          tr
            td Moluscos bivalvos vivos.
            td.color-acento4
              | A la T mínima que garantice su viabilidad (En torno a 8°C).

          tr
            td Productos de la pesca transformados.
            td.color-acento4
              | A las temperaturas indicadas por el fabricante o envasador, que figuran en el etiquetado.

          tr
            td Leches y productos lácteos.
            td.color-acento4
              | A las temperaturas indicadas por el fabricante o envasador, que figuran en el etiquetado.
          tr
            td Huevos frescos o de categoría A.
            td.color-acento4
              | Mantenerlos en refrigeración después de la compra o entrega.

          tr
            td Ovoproductos.
            td.color-acento4
              | <= 4°C, si se conservan en refrigeración / <= -12°C, si se conservan en congelación.
              hr.linea
              | <= -18°C, si son ultracongelados.
          tr
            td Helados.
            td.color-acento4
              | Helados <= -18°C. (No obstante, los helados que se sirvan a granel o fraccionados pueden conservarse antes de su servicio a temperaturas superiores que permitan ser manipulados en dichas condiciones).
              |<br>Granizados <= 0°C.
          tr
            td Alimentos envasados en general.
            td.color-acento4
              | A las temperaturas indicadas por el fabricante o envasador, que figuran en el etiquetado.


    p.mb-4(data-aos="fade") Frente al fenómeno de la pandemia, surge el concepto de la cadena de frío aplicada en el manejo de las vacunas y productos farmacéuticos, en un contexto del sistema de almacenamiento y transporte en temperaturas refrigeradas.

    .row.justify-content-center.mb-4
      .col-md-11
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/img3.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 En el caso de las vacunas, se utiliza la cadena de frío inversa, que involucra el sistema de almacenamiento y transporte con el respectivo control de temperaturas desde el punto de recogida hasta el sitio de distribución o aplicación para garantizar el mantenimiento de la potencia de la vacuna acorde con los estándares internacionales de diseño.

    p.mb-4(data-aos="fade") Los componentes de la logística del transporte de vacunas están relacionados con el personal que gestiona su distribución, el equipo de almacenamiento y transporte de vacunas, el mantenimiento del equipo, igual que el monitoreo de la cadena de frío; la cual permite que el transporte y almacenamiento de las vacunas que integran el plan de inmunización satisfaga las necesidades de las actividades de inmunización y el transporte de los medicamentos o vacunas requeridas en el mercado. La siguiente figura explica el proceso:

    //.container-titulo-gradiente.mt-5
      h3.titulo-gradiente
        span Componentes de la logística del transporte refrigerado de vacunas

    .titulo-quinto.color-acento-contenido
      h4 Componentes de la logística del transporte refrigerado de vacunas

    .row.justify-content-center.my-4.fondo-linea
      .col-md-8.col-lg-6.col-12.py-4
        ImagenInfografica.color-secundario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema1/img4.svg', alt='Componentes de la logística del transporte refrigerado de vacunas')
              figcaption Componentes de la logística del transporte refrigerado de vacunas

          .tarjeta.bg-primario.p-3(x="49.5%" y="3%" numero="")
            p Personal que gestiona su distribución

          .tarjeta.bg-primario.p-3(x="95%" y="34%" numero="")
            p Equipo para el almacenamiento y transporte de vacunas

          .tarjeta.bg-primario.p-3(x="84%" y="74%" numero="")
            p Mantenimiento del equipo

          .tarjeta.bg-primario.p-3(x="18%" y="74%" numero="")
            p Monitoreo de la cadena de frío

          .tarjeta.bg-primario.p-3(x="5%" y="34%" numero="")
            p Actividades complementarias de inmunización

    .row.my-4
      .col-lg-6.col-12
        p.mb-5(data-aos="fade") La intención del transporte y conservación de las vacunas y medicamentos, se basa en mantener el efecto de las vacunas durante su movilización al centro de salud, la farmacia o la casa. Se requiere el cumplimiento de los protocolos de manejo de estos productos, para evitar la reducción de su inmunogenicidad e incluso la pérdida de su efecto, aspectos que pueden poner en riesgo la salud del usuario, por este motivo su conservación se basa en la buena práctica de la vacunación.

        .cajon.color-primario.p-4.mb-4
          p Para lograr la efectividad del transporte refrigerado de las vacunas y productos farmacéuticos, es indispensable contar con los vehículos frigoríficos, los acumuladores de frío, las cajas isotérmicas, los controladores de temperatura y las neveras portátiles.

        p(data-aos="fade") Basado en lo anterior, a través de la siguiente figura se conocerán los componentes del sistema de transporte refrigerado de vacunas:

      .col-lg-6.col-12
        img(src='@/assets/curso/tema1/img5.jpg', alt='Componentes de la logística del transporte refrigerado de vacunas')


    //.container-titulo-gradiente.mt-5.mb-5
      h3.titulo-gradiente
        span Sistemas de transporte refrigerado

    .titulo-quinto.color-acento-contenido
      h4 Sistemas de transporte refrigerado

    .row.justify-content-center.mb-0.mb-md-3#tema-refrigerado-vacunas
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido
              img(src='@/assets/curso/tema1/tarjeta-hover-1.png', alt='Vehículos frigoríficos')
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/tarjeta-1.svg')})`}")

      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.abajo.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido
              img(src='@/assets/curso/tema1/tarjeta-hover-2.png', alt='Acumuladores de frío')
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/tarjeta-2.svg')})`}")


      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.izquierda.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido
              img(src='@/assets/curso/tema1/tarjeta-hover-3.png', alt='Neveras de frío')
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/tarjeta-3.svg')})`}")

    .row.justify-content-center.mb-5#tema-refrigerado-vacunas
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.derecha.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido
              img(src='@/assets/curso/tema1/tarjeta-hover-4.png', alt='Cajas isotérmicas')
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/tarjeta-4.svg')})`}")

      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido
              img(src='@/assets/curso/tema1/tarjeta-hover-5.png', alt='Controladores de temperatura')
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/tarjeta-5.svg')})`}")



    .row.my-5.align-items-center
      .col-lg-7.col-12
        //img(src='@/assets/curso/tema1/img6.jpg', alt='Componentes de la logística del transporte refrigerado de vacunas')
        p.mb-3(data-aos="fade") Su uso depende del volumen de las vacunas a transportar, la temperatura ambiente y la distancia del recorrido en función del tiempo. Ahora, el mantenimiento de las vacunas en la cadena de frío requiere de un acumulador de frío y un controlador de temperatura independientemente del método de transporte que se utilice.

        p.mb-3(data-aos="fade") En cuanto a la conservación de las vacunas, se debe garantizar que el equipo de refrigeración que las contenga permita la circulación de aire entre las cajas, dejando espacio entre ellas, evitando que estén en contacto con las paredes de la nevera. Se recomienda que las bandejas que las contienen sean de malla metálica para evitar la acumulación de la humedad.

      .col-lg-5.col-12

        .cajon.color-primario.p-4.mb-3
          p Es importante, además, tener en cuenta que las vacunas son fotosensibles, por lo que se recomienda mantenerlas en sus cajas originales cerradas y en lugares donde no están expuestas a la luz; de igual forma, se debe comprobar la información relacionada con la fecha de caducidad de las vacunas y desechar las que ya no estén vigentes, la fecha de caducidad aparece en la caja y muestran el mes y año final desde su periodo de validez.

    .titulo-quinto.color-acento-contenido
      h4 Cuidados en el manejo de las vacunas
    .row.my-5.color-gray.align-items-center.py-4.p-lg-5
      .col-lg-4.col-12
          p(data-aos="fade")
            strong Los factores a tener en cuenta en el manejo tecnológico de las vacunas, se relacionan a continuación:

      .col-lg-8.col-12
        LineaSlideHorizontal.color-acento-contenido(text-small)
          div(titulo="Calentamiento de las vacunas por ruptura de la cadena de frío" :imagen="require('@/assets/curso/tema1/slide-1.svg')")

          div(titulo="Exposición de las vacunas a la luz y al calor"  :imagen="require('@/assets/curso/tema1/slide-2.svg')")

          div(titulo="Pérdida de la vida útil de la vacuna"  :imagen="require('@/assets/curso/tema1/slide-3.svg')")

          div(titulo="Limpieza del frigorífico"  :imagen="require('@/assets/curso/tema1/slide-4.svg')")

          div(titulo="Limpieza y acumulación de escarcha"  :imagen="require('@/assets/curso/tema1/slide-5.svg')")

          div(titulo="Selección y calidad de los productos de limpieza y desinfección"  :imagen="require('@/assets/curso/tema1/slide-6.svg')")



    .row.justify-content-center.align-items-center
      .col-md-8.pr-md-5.pr-4
        p.mb-4(data-aos="fade") Sumado a estas situaciones, se deben tener en cuenta durante su manejo: el calentamiento de las vacunas colocadas fuera de la nevera, dejar las vacunas expuestas a la luz y al calor, y la pérdida del tiempo de vida útil por caducidad de la fecha de uso.

        p.mb-4(data-aos="fade") Otro factor a tener en cuenta es la limpieza del frigorífico, la cual se realiza cada mes o cada vez que se observe que la capa de escarcha es superior a 5 mm. Para la limpieza de la escarcha acumulada en el frigorífico es necesario permitir que el hielo se deshaga y consultar el manual del equipo para verificar si cuenta con un sistema de escarcha. Si la acumulación de escarcha ocurre con frecuencia se requiere contratar el servicio técnico, para resolver este problema, puesto que genera un mal funcionamiento del equipo y un aumento en el consumo de energía. Por lo anterior tener en cuenta lo siguiente:


      .col-md-4
        img(src='@/assets/curso/tema1/img7.svg', alt='Temperaturas y cadena de frío')


    PasosA.color-secundario.my-5(tipo="n")
      .row
        .col-md-6.mb-4.mb-md-0
          h3 Selección y calidad de los productos
          p El éxito de la limpieza de un frigorífico depende de la selección y calidad de los productos, se deben evitar productos de limpieza que entra en contacto con las vacunas almacenadas. Por eso mientras se realice la limpieza, las vacunas se colocan en otro lugar evitando romper la cadena de frío.
        .col-md-6
          figure
            img(src='@/assets/curso/tema1/paso1.jpg', alt='Selección y calidad de los productos')
      .row
        .col-md-6.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/tema1/paso2.jpg', alt='Programas de limpieza')
        .col-md-6
          h3 Programas de limpieza
          p Aunque en los equipos frigoríficos, la aparición o expansión de bacterias es difícil debido al frío aún pueden proliferar hongos o bacterias resistentes a las bajas temperaturas, siendo esencial el desarrollo efectivo de los programas de limpieza y desinfección.
      .row
        .col-md-6.mb-4.mb-md-0
          h3 Servicio de transporte
          p El servicio de transporte refrigerado en el sector farmacéutico, se fundamenta en la sensibilidad de estos medicamentos al calor, su ubicación en el punto final, el caso a una farmacia, requiere toda una infraestructura que garantice la seguridad y calidad en su entrega al consumidor final.
        .col-md-6
          figure
            img(src='@/assets/curso/tema1/paso3.jpg', alt='Servicio de transporte')

    p.mb-4(data-aos="fade") Los medicamentos se mantienen a diferentes temperaturas según las características específicas de cada uno de ellos, estas condiciones de almacenamiento requieren condiciones especiales, las cuales se observan a continuación:

    .titulo-quinto.color-acento-contenido
      h4 Métodos de almacenamiento en la cadena de frío


    .row.justify-content-center.mb-lg-4.mb-0#tarjeta-slide-2
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido
              img(src='@/assets/curso/tema1/slideb-1.jpg', alt='Métodos de almacenamiento en la cadena de frío')
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/slideb-front-1.svg')})`}")

      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.abajo.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido
              img(src='@/assets/curso/tema1/slideb-2.jpg', alt='Métodos de almacenamiento en la cadena de frío')
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/slideb-front-2.svg')})`}")


      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.izquierda.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido
              img(src='@/assets/curso/tema1/slideb-3.jpg', alt='Métodos de almacenamiento en la cadena de frío')
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/slideb-front-3.svg')})`}")

    .row.justify-content-center.mb-5#tarjeta-slide-2
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.derecha.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido
              img(src='@/assets/curso/tema1/slideb-4.jpg', alt='Métodos de almacenamiento en la cadena de frío')
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/slideb-front-4.svg')})`}")

      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.abajo.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido
              img(src='@/assets/curso/tema1/slideb-5.jpg', alt='Métodos de almacenamiento en la cadena de frío')
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/slideb-front-5.svg')})`}")

    figcaption Nota. Adaptado de Polifret (2020).

    .row.my-4
      .col-lg-6.col-12
        p.mb-5(data-aos="fade") Durante el transporte refrigerado de medicamentos, la temperatura se mantiene entre 2 y 8 grados centígrados, esto les permite mantener su eficacia biológica, por lo que es importante que el transporte se haga en equipos de frío y estén colocados en bolsas isotérmicas para conservar las características del producto y que llegue en buenas condiciones y mantenga su calidad en la cadena de frío, indistinto el sitio de entrega al consumidor final.

        .cajon.color-primario.p-4.mb-4
          p Es importante tener en cuenta las recomendaciones en el transporte refrigerado de medicamentos definidos en la guía de buenas prácticas de distribución; por lo tanto, el vehículo debe cumplir con los requisitos establecidos, es responsabilidad de las autoridades sanitarias quienes verificar su cumplimiento, siendo crítico el manejo de temperaturas.


      .col-lg-6.col-12
        img(src='@/assets/curso/tema1/img5.jpg' data-aos="zoom-in", alt='Componentes de la logística del transporte refrigerado de vacunas' )


    p.mb-4 Generalmente el servicio de transporte refrigerado de medicamentos es tercerizado por transportistas logísticos, los cuales deben cumplir con los estándares de temperaturas acorde con la naturaleza del producto, sumado a otros aspectos que se plantean como recomendaciones en el siguiente vídeo:

    .row.justify-content-center.tarjeta.fondo-video.mb-4.py-5(data-aos="fade-down")
      .col-md-10
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/cdIhp0kHfMw" title="Recomendaciones para el servicio de transporte de carga refrigerada" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    Separador

    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 1.2. Contenedores refrigerados

    figure.mb-5
      img(src='@/assets/curso/tema1/img9.jpg', alt='El contenedor de carga permite reducir los tiempos de envío')

    .row.align-items-center.my-4
      .col-lg-7
        p(data-aos="fade-left") El contenedor de carga permite reducir los tiempos de envío, al acelerar el proceso de carga y descarga, además, mejora la utilización del espacio en barcos y puertos. Los contenedores evolucionan permanentemente buscando cada día su perfeccionamiento mediante adaptaciones tecnológicas de enfriamiento haciéndolo más versátil en el transporte de carga sensibles a las temperaturas, tales como: verduras, frutas, productos farmacéuticos, plantas, carne huevos y otros productos agregados de acuerdo con el impacto comercial y las mejoras sucesivas en el sistema de refrigeración.

        .cajon.color-primario.p-4.mb-4
          p Entre las ventajas que ofrecen los <strong>contenedores refrigerados y los buques refrigerados</strong>, se encuentran la flexibilidad y el mantenimiento de la cadena de frío, en la movilización de carga por carretera, el mar abierto o el ferrocarril.

      .col-lg-5.col-12
        img(src='@/assets/curso/tema1/img9.svg' data-aos="zoom-in")

    p.mb-4(data-aos="fade") Con respecto a la complejidad tecnológica, los contenedores se clasifican en:

    TabsA.color-acento-contenido.mb-5
      //- .tarjeta debe ir acompañado de una de una de estas clases =>
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .tarjeta.color-acento3--borde.p-4(titulo="Contenedor isotérmico")
        h4 Contenedor isotérmico
        .row
          .col-xl-6
            p El cual mantiene la temperatura y conserva la cadena de frío.

          .col-xl-6.mb-4
            figure
              img(src='@/assets/curso/tema1/p-1.jpg', alt='Texto que describa la imagen')
              figcaption Contenedor isotérmico
      //- .tarjeta debe ir acompañado de una de una de estas clases =>
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .tarjeta.color-acento3--borde.p-4(titulo="Contenedor frigorífico")
        h4 Contenedor frigorífico

        .row
          .col-xl-6.mb-4
            figure
              img(src='@/assets/curso/tema1/p-2.jpg', alt='Texto que describa la imagen')
              figcaption Contenedor frigorífico
          .col-xl-6
            p Que regula la temperatura interna y se adaptan a todo tipo de producto que se transporte, cuentan con un sistema propio de conservación con bajas temperaturas y un termostato.

      //- .tarjeta debe ir acompañado de una de una de estas clases =>
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .tarjeta.color-acento3--borde.p-4(titulo="Contenedor básico")
        h4 Contenedor básico

        .row
          .col-xl-6
            p El cual está conectado a una planta refrigerada que impulsa el aire enfriado al contenedor. Los contenedores cuentan con dos orificios que facilitan el movimiento del aire frío en el proceso de ventilación interna, un orificio permite la entrada de aire frío para su circulación al interior del contenedor y el otro la evacuación del aire caliente para mantener así, el equilibrio de la temperatura al interior del contenedor.
          .col-xl-6.mb-4
            figure
              img(src='@/assets/curso/tema1/p-3.jpg', alt='Contenedor básico')
              figcaption Contenedor frigorífico

      .tarjeta.color-acento3--borde.p-4(titulo="Contenedor integrado")
        h4 Contenedor integrado

        .row
          .col-xl-6.mb-4
            figure
              img(src='@/assets/curso/tema1/p-4.jpg', alt='Contenedor integrado')
              figcaption Contenedor frigorífico
          .col-xl-6
            p Cuenta con un sistema de enfriamiento integrado, siendo más independiente, facilitando el cambio entre diferentes modos de transporte y el movimiento de la carga del mar al ferrocarril y viceversa.


    p.mb-4 Estos contenedores mantienen frescos los productos al hacer circular aire frío, desde la parte inferior de la unidad para que circule sobre y a través de la carga perecedera y salga del contenedor por medio de las aberturas ubicadas en la parte superior de la unidad del sistema de refrigeración; estos contenedores además cuentan con un mecanismo de refrigeración que es autoalimentado y accionado por puntos de alimentación externos en muelles, barcos y bases de mercancía.

    p.mb-4 Existen opciones para mantener los artículos frescos mientras se transportan, en contenedores versátiles y confiables. La unidad es un contenedor independiente y se puede usar en cualquier lugar donde se cuente con un espacio para colocarlos, puede funcionar con electricidad o usar el generador para un uso a corto plazo <i>in situ </i>.


    .row.justify-content-center.mb-4
      .col-md-11
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/img10.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Los contenedores refrigerados son la mejor opción para el transporte de productos sensibles al calor, garantizando que lleguen en buenas condiciones a un destino final; en la actualidad, los sistemas de refrigeración que se usan en los contenedores son precisos y confiables, además estos contenedores son monitoreados y dispone de una unidad de refrigeración para su uso.

    p.mb-4 Existen dos tipos de contenedores refrigerados empleados en el transporte de carga refrigerada:

    .row.mb-4
      .col-lg-6
        .tarjeta-hover-imagenes
          .contenedor__texto--izquierda
            h6.mb-0.px-3.py-1.text-white Contenedor isotérmico
          .tarjeta-hover-imagenes__textos.bg-acento-contenido.justify-content-center.align-items-center.p-5.d-flex
            .elementos(@mouseover="mostrarIndicador=false")
              img(src='@/assets/curso/tema1/img13.svg', alt='Texto que describa la imagen').mb-2
              h4.text-center Contenedor isotérmico
              .indicador--hover(v-if="mostrarIndicador" )
          .tarjeta-hover-imagenes__imagen: img(src='@/assets/curso/tema1/img11.jpg', alt='Texto que describa la imagen')
          figcaption Permite mantener la temperatura y de así conserva intacta la cadena de frío.
      .col-lg-6
        .tarjeta-hover-imagenes
          .contenedor__texto--derecha
            h6.mb-0.px-3.py-1.text-white Contenedor frigorífico
          .tarjeta-hover-imagenes__imagen: img(src='@/assets/curso/tema1/img12.jpg', alt='Texto que describa la imagen')
          figcaption Permite regular la temperatura interna y adaptarla al tipo de mercancía que se transporta.
          .tarjeta-hover-imagenes__textos.bg-acento-contenido.d-flex.justify-content-center.align-items-center.p-5
            .elementos
              img(src='@/assets/curso/tema1/img14.svg', alt='Texto que describa la imagen').mb-2
              h4.text-center Contenedor frigorífico


    Separador

    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 1.3. Conservación

    .row.my-4.align-items-center

      .col-lg-6.col-12
        img(src='@/assets/curso/tema1/img15.jpg' data-aos="zoom-in", alt='Conservación' )

      .col-lg-6.col-12
        p.mb-5(data-aos="fade") El transporte refrigerado requiere de controles específicos de la temperatura para conservar las propiedades sensoriales en relación con el sabor y frescura la textura y el aroma de los productos. En el caso del transporte de productos perecederos, se orienta a la atención de los requerimientos del cliente y la garantía de las condiciones óptimas de calidad en el mercado.

    p.mb-4 Ahora, para lograr la optimización del manejo de los contenedores en la cadena de frío, es importante que estén dotados con las últimas tecnologías y soluciones sostenibles, <strong>específicamente en lo relacionado con:</strong>

    .row.my-4.justify-content-center
      .col-lg-10
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        LineaTiempoD.color-secundario
          .row(numero="1" titulo="Atmósferas controladas")
            .col-md-6.mb-4.mb-md-0
              p.text-small Permiten prolongar la vida útil de los productos perecederos, se cuentan con diferentes soluciones tecnológicas especializadas para el transporte de productos perecederos que requieren de tratamientos y tecnologías de avanzada.

            .col-md-6
              figure
                img(src='@/assets/curso/tema1/img16.jpg', alt='Atmósferas controladas')

          .row(numero="2" titulo="Deshumidificación")
            .col-md-6
              figure
                img(src='@/assets/curso/tema1/img17.jpg', alt='Deshumidificación')
            .col-md-6.mb-4.mb-md-0
              p.text-small Controla el nivel de humedad relativa en los contenedores, los cuales deben estar equipados con sensores de humedad. Estas tecnologías se aplican, a manera de ejemplo, en el manejo de aguacate, cebollas, jengibre y ajo, entre otros.


          .row(numero="3" titulo="Ventilación")
            .col-md-6.mb-4.mb-md-0
              p.text-small Facilita la circulación de aire fresco, eliminando el calor y los gases o compuestos químicos orgánicos derivados de los procesos biológicos de respiración de la carga perecedera, como son:  el etileno y el dióxido de carbono.

            .col-md-6
              figure
                img(src='@/assets/curso/tema1/img18.jpg', alt='Ventilación')

          .row(numero="4" titulo="Conservación")
            .col-md-6.mb-4.mb-md-0
              p.text-small De la calidad biológica de la carga perecedera en la industria alimentaria, farmacéutica y cosmética se logra mediante el uso del transporte refrigerado en la cadena de frío para evitar alteraciones y daños biológicos a causa de las reacciones biofísicas químicas naturales. La ruptura de esta cadena, genera problemas de contaminación y crecimiento de la flora microbiana, o simplemente una reducción de la vida útil del producto, además, trae riesgos para la salud del consumidor.

            .col-md-6
              figure
                img(src='@/assets/curso/tema1/img19.jpg', alt='Conservación')

    p.my-5 Los medios de transporte o vehículos frigoríficos que integran la logística del transporte de carga refrigerada se relacionan a continuación:

    .row.my-4.justify-content-center
      .col-lg-6.col-sm-8.col-12
        figure
          img(src='@/assets/curso/tema1/img20.svg', alt='Atmósferas controladas').mb-2
          figcaption Referencia Nota. Adaptado de Polifret (2020).


    .row.my-4.py-4.color-acento3.align-items-center.justify-content-center
      .col-lg-7.col-12
        p.mb-5(data-aos="fade") La logística en la cadena de suministros requiere de procesos para la movilidad de la carga a bajas temperatura y con atmósferas controladas, desde la recolección hasta la entrega final.

        .cajon.color-primario.p-4.mb-4
          p En esta cadena de frío se incluyen: almacenes refrigerados los cuales están ubicados en los diferentes eslabones que integran la cadena de distribución, tales como, áreas de producción, transporte refrigerado incluida en la flota transportista, almacenes refrigerados comerciales, almacenes refrigerados regulares, transporte refrigerado local y equipos refrigerados en puntos de destino de minoristas y mayoristas.


      .col-lg-4.col-12
        figure.p-5
          img(src='@/assets/curso/tema1/img25.svg' data-aos="zoom-in", alt='Componentes de la logística del transporte refrigerado de vacunas' )

    p.mb-4 La cadena de frío se encuentra integrada al sistema de enfriamiento de la carga perecedera y está estructurada por el almacenamiento en cuartos fríos, transformación y el procesamiento de los productos y su distribución. Sus características son:

    .titulo-quinto.color-acento-contenido.mt-5
      h4 Componentes de la cadena de frío

    .row(data-aos="fade-down")
      .col-lg-3.mb-3.mb-md-0
        .tarjeta-foto-hover
          .tarjeta-foto-hover__img: img(src='@/assets/curso/tema1/img21-2.jpg')
          .tarjeta-foto-hover__titulo.bg-acento-contenido.d-flex.justify-content-center.align-items-center.p-2
            h4.text-center.mb-0 Enfriamiento
          .tarjeta-foto-hover__tarjeta.bg-primario.d-flex.align-items-center.justify-content-center
            .p-4.text-center
              h4 Enfriamiento
              p.mb-0 Facilita el traslado de la carga perecedera, en temperaturas de refrigeración y congelación; incluye su procesamiento, almacenamiento y transporte.
      .col-lg-3.mb-3.mb-md-0
        .tarjeta-foto-hover(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          .tarjeta-foto-hover__img: img(src='@/assets/curso/tema1/img22-2.jpg')
          .tarjeta-foto-hover__titulo.bg-acento-contenido.d-flex.justify-content-center.align-items-center.p-2
            h4.text-center.mb-0 Almacenamiento
          .tarjeta-foto-hover__tarjeta.bg-primario.d-flex.align-items-center.justify-content-center
            .p-4.text-center
              h4 Almacenamiento
              p.mb-0 Instalaciones para conservar productos en tiempo de espera y su envió o ubicación en el procesamiento y distribución.
      .col-lg-3.mb-3.mb-md-0
        .tarjeta-foto-hover
          .tarjeta-foto-hover__img: img(src='@/assets/curso/tema1/img23-2.jpg')
          .tarjeta-foto-hover__titulo.bg-acento-contenido.d-flex.justify-content-center.align-items-center.p-2
            h4.text-center.mb-0 Transporte
          .tarjeta-foto-hover__tarjeta.bg-primario.d-flex.align-items-center.justify-content-center
            .p-4.text-center
              h4 Transporte
              p.mb-0 Transporte refrigerado para movilizar la carga con temperaturas y humedad relativa controlada, garantizando su integralidad.

      .col-lg-3.mb-3.mb-md-0
        .tarjeta-foto-hover
          .tarjeta-foto-hover__img: img(src='@/assets/curso/tema1/img24-2.jpg')
          .tarjeta-foto-hover__titulo.bg-acento-contenido.d-flex.justify-content-center.align-items-center.p-2
            h4.text-center.mb-0 Punto de venta
          .tarjeta-foto-hover__tarjeta.bg-primario.d-flex.align-items-center.justify-content-center
            .p-4.text-center
              h4 Punto de venta
              p.mb-0 Instalaciones en condiciones de integridad y medidas sanitarias para su conservación.
    //.row.mb-5
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/img21.jpg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              h4 Enfriamiento
              p Facilita el traslado de la carga perecedera, en temperaturas de refrigeración y congelación; incluye su procesamiento, almacenamiento y transporte.

      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-secundario(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/img22.jpg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              h4 Almacenamiento
              p Instalaciones para conservar productos en tiempo de espera y su envió o ubicación en el procesamiento y distribución.

      .col-sm-6.col-xl-3.mb-4.mb-sm-0
        .tarjeta.tarjeta-flip.color-acento-contenido(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/img23.jpg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              h4 Transporte
              p Transporte refrigerado para movilizar la carga con temperaturas y humedad relativa controlada, garantizando su integralidad.

      .col-sm-6.col-xl-3
        .tarjeta.tarjeta-flip.color-acento-botones(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/img24.jpg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              h4 Punto de venta
              p Instalaciones en condiciones de integridad y medidas sanitarias para su conservación.

    .row.mt-5.mb-4
      .col-lg-6.col-12
        p.mb-4(data-aos="fade") La prevención de estos riesgos se logra mediante el uso de vehículos refrigerados, lo cual permite regular la temperatura de la carga o el uso de termo cajas isotérmicas, que contienen placas eutécticas que permiten una constante difusión del frío para mantener un nivel de temperatura uniforme.

        p.mb-4(data-aos="fade") La conservación de las propiedades nutricionales y consumibles en cada categoría de la carga perecedera tiene sus propios estándares de temperatura. Las temperaturas del transporte refrigerado para cada una de las categorías de alimentos se detallan a continuación:


      .col-lg-6.col-12
        img(src='@/assets/curso/tema1/img26.jpg' data-aos="zoom-in")

    .titulo-quinto.color-acento-contenido
      h4 Categorías y temperatura para el transporte de productos perecederos

    .row#tarjetas-alto-fijo
      .col-md-4.col-sm-12.mb-4.mb-xl-0
        img(src='@/assets/curso/tema1/img27.jpg' data-aos="zoom-in")
        figcaption Alimentos altamente perecederos: carne y pescado se conservan  entre <strong>0 grados centígrados y 4 grados centígrados</strong>.
        //.tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/img27.jpg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              p Alimentos altamente perecederos: carne el pescado se conservan entre 0 grados centígrados y 4 grados centígrados.

      .col-md-4.col-sm-12.mb-4.mb-xl-0
        img(src='@/assets/curso/tema1/img28.jpg' data-aos="zoom-in")
        figcaption Alimentos perecederos: verduras y platos preparados, se conservan a <strong>8 grados centígrados</strong>.
        //.tarjeta.tarjeta-flip.color-secundario(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/img28.jpg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              p Alimentos perecederos: verduras, platos preparados, se conservan a 8 grados centígrados.

      .col-md-4.col-sm-12.mb-4.mb-sm-0
        img(src='@/assets/curso/tema1/img29.jpg' data-aos="zoom-in")
        figcaption Alimentos congelados: almacenados a <strong>18 grados centígrados</strong>.
        //.tarjeta.tarjeta-flip.color-acento-contenido(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/img29.jpg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              p Alimentos congelados: almacenados a -18 grados centígrados.
    figcaption.mb-5 Nota. Adaptado de Polifret (2020).

    .row.align-items-center.my-4

      .col-lg-8
        p.mb-4 En el proceso de la cadena de frío es esencial que se mantengan las temperaturas de refrigeración o de congelación, para garantizar el mantenimiento del equilibrio del agua de composición del producto, en su estado sólido, siendo este fenómeno la parte más importante del proceso de la cadena de frío. El manejo de bajas temperaturas evita que los productos sensibles alteren su estado natural esperado en el mercado y prolonguen su tiempo de vida útil.

        p A partir de lo anterior, es importante mencionar que las opciones de conservación de la carga perecedera en la cadena de frío son:

      .col-lg-4.col-12
        img(src='@/assets/curso/tema1/img30.svg' data-aos="zoom-in")


    TabsA.color-acento-contenido.mb-5
      //- .tarjeta debe ir acompañado de una de una de estas clases =>
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .tarjeta.color-acento3--borde.p-4(titulo="Refrigeración")
        h4 Refrigeración
        .row
          .col-xl-6
            p.mb-4 La conservación por refrigeración se realiza con temperatura por arriba de 0°C (generalmente entre 2 y 5 ºC en frigoríficos industriales, y entre 8 y 15ºC en frigoríficos domésticos).

            p.mb-4 Esta conservación es temporal considerando otros elementos como la temperatura del almacén, la humedad relativa, la rapidez del aire, la estructura de la atmósfera, etc. La temperatura debe permanecer uniforme durante la conservación y en los parámetros de tolerancia admitidos de acuerdo con el tipo de producto.

          .col-xl-6.mb-4
            figure.mb-4
              img(src='@/assets/curso/tema1/img33.jpg' data-aos="fade-right")

        .row
          .col-xl-6.mb-4
            figure
              img(src='@/assets/curso/tema1/img34.jpg')
          .col-xl-6
            p Es importante comprender que la refrigeración se utiliza para garantizar la vida útil de cada producto y que su integridad no se vea alterada a corto plazo; esto es, en términos de pocos días para los alimentos o de semanas para otros productos, cómo es el caso de los farmacéuticos.


      //- .tarjeta debe ir acompañado de una de una de estas clases =>
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .tarjeta.color-acento3--borde.p-4(titulo="Congelación")
        h4 Congelación

        p.mb-4 La industria de alimentos ha desarrollado cada vez más las técnicas de congelación para la conservación de los productos a largo plazo de una extensa variedad de alimentos: frutas, vegetales, carnes, pescados y alimentos precocinados. Se someten a un enfriamiento rápido, a temperaturas del orden de -30ºC a fin de que no se lleguen a conformar macrocristales de hielo que romperían la composición y aspecto del alimento.

        .row
          .col-xl-6.mb-4
            figure
              img(src='@/assets/curso/tema1/img36.jpg')

          .col-xl-6
            p.mb-4 Los empacados al vacío, tienen la posibilidad de conservarse a lo largo de meses en cámaras de congelación a temperaturas del orden de -18 a -20ºC, manteniendo su aspecto, costo nutritivo y contenido vitamínico.

            p.mb-4 El objetivo de la congelación es controlar a los alimentos a temperaturas equivalentes o inferiores a las primordiales de mantenimiento, para congelar el agua de su composición química.


</template>
<script>
import LineaSlideHorizontal from '../components/LineaSlideHorizontal'

export default {
  name: 'Tema1',
  components: {
    LineaSlideHorizontal,
  },
  data: () => ({
    indicadorTarjetaSlide: true,
    mostrarIndicador: true,
    indicadorTarjetaFlip: true,
  }),
}
</script>
<style lang="sass"></style>
