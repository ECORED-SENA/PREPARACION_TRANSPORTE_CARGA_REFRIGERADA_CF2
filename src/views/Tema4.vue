<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5#tema4

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero.text-white
        span 4
      h1 Protocolos y seguridad

    .row.mt-4.align-items-center
      .col-lg-7.col-12
        p.mb-5(data-aos="fade") Para una mejor comprensión de los protocolos y seguridad en el transporte de carga refrigerada es determinante tener en cuenta que los transportistas deben implementar buenas prácticas higiénicas en el transporte de alimentos y ser conscientes de sus actividades operativas las cuales inciden en la inocuidad de los alimentos, seguridad en el transporte de carga refrigerada y el impacto en su protección individual.

        p.mb-4 Lo anterior, teniendo en cuenta la guía de inocuidad para alimentos de transporte (Salud, 2017), en la que se menciona:


      .col-lg-5.col-12
        figure.p-4
          img(src='@/assets/curso/tema4/img61.jpg' data-aos="zoom-in")

    .bloque-texto-b.color-secundario.p-4.mb-5
      .bloque-texto-b__texto
        i.fas.fa-quote-left
        h4.mb-0 Las condiciones del personal manipulador de alimentos son fundamentales para obtener un alimento inocuo. A continuación, se describe el estado de salud, las prácticas higiénicas, la educación y capacitación que el personal debe cumplir, para que los consumidores obtengan un alimento inocuo.
        i.fas.fa-quote-right
        <br>
        span &nbsp;&nbsp;- Salud, 2017 (p.7).

    // 4.1
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 4.1  Generalidades sobre prácticas higiénicas en el transporte de alimentos

    figure.mb-5
      img(src='@/assets/curso/tema4/img62.jpg')

    p.mb-4(data-aos="fade") Los pilares fundamentales de un programa de buenas prácticas de higiene en el transporte de alimentos se enfocan en la higiene personal, el uso de la dotación individual y el lavado de manos. Se puede observar esto con la siguiente infografía:


    .titulo-quinto.color-acento-contenido
      h4 Buenas prácticas de higiene durante la manipulación de alimentos

    .row.justify-content-center.mb-5
      .col-md-6.col-lg-4.mb-5.mb-lg-3
        .tarjeta-avatar
          img(src='@/assets/curso/tema4/img63.svg')
          .tarjeta.color-acento3
            .text-white.p-4
              h2.text-center.color-texto-primario No hablar, toser o estornudar sobre los alimentos.

      .col-md-6.col-lg-4.mb-5.mb-lg-3
        .tarjeta-avatar
          img(src='@/assets/curso/tema4/img64.svg')
          .tarjeta.color-acento-botones
            .p-4
              h2.text-center Informar cualquier enfermedad.

      .col-md-6.col-lg-4.mb-5.mb-lg-3
        .tarjeta-avatar
          img(src='@/assets/curso/tema4/img65.svg')
          .tarjeta.color-acento-contenido
            .p-4
              h2.text-center Cubrir y proteger las heridas.

      .col-md-6.col-lg-4.mb-5.mb-lg-3
        .tarjeta-avatar
          img(src='@/assets/curso/tema4/img66.svg')
          .tarjeta.bg-morado
            .p-4
              h2.text-center.text-white Utilizar cubrecabezas efectivo.

      .col-md-6.col-lg-4.mb-5.mb-lg-3
        .tarjeta-avatar
          img(src='@/assets/curso/tema4/img67.svg')
          .tarjeta.bg-rojo
            .p-4
              h2.text-center.text-white Evitar joyas y objetos personales.

      .col-md-6.col-lg-4.mb-5.mb-lg-3
        .tarjeta-avatar
          img(src='@/assets/curso/tema4/img68.svg')
          .tarjeta.bg-amarillo
            .p-4
              h2.text-center Utilizar ropa de trabajo exclusiva y limpia.

      .col-md-6.col-lg-4.mb-5.mb-lg-3
        .tarjeta-avatar
          img(src='@/assets/curso/tema4/img69.svg')
          .tarjeta.color-acento3
            .color-texto-primario.p-4
              h2.text-center No fumar en el lugar de trabajo.

      .col-md-6.col-lg-4.mb-5.mb-lg-3
        .tarjeta-avatar
          img(src='@/assets/curso/tema4/img70.svg')
          .tarjeta.color-acento-botones
            .p-4
              h2.text-center No consumir alimentos.

      .col-md-6.col-lg-4.mb-5.mb-lg-3
        .tarjeta-avatar
          img(src='@/assets/curso/tema4/img71.svg')
          .tarjeta.color-acento-contenido
            .p-4
              h2.text-center Lavarse las manos constantemente con agua y jabón.


    Separador

    // 4.2
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 4.2 Problemas sanitarios con el manejo de alimentos


    p.mb-4 De acuerdo con el objetivo del transporte de carga refrigerada, en relación con la conservación y el control de la contaminación microbiana de la carga, el transportista de carga debe asumir su responsabilidad en el control de la descomposición microbiana de los alimentos transportados y su incidencia en la salud del consumidor final.

    //p.mb-4 Según la publicación de (Cluster de Salud, 2017):

    .row.mb-5.justify-content-center
      .col-lg-10.mb-5.mb-lg-0
        //- .bloque-texto-d debe ir acompañado de una de una de estas clases =>
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        .bloque-texto-d.color-secundario.p-4
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left
            h3.text-regular La Organización Mundial de la Salud (OMS) afirma que existen más de 200 enfermedades generadas por la inadecuada manipulación de alimentos que generalmente son causadas por bacterias, virus, parásitos o sustancias químicas. Estas enfermedades llegaron al organismo a través de la ingesta de alimentos tan comunes, como la carne, pescado, leche, frutas y verduras. La inadecuada manipulación en su refrigeración o cocción de los mismos son causas recurrentes de su aparición y pueden derivar en intoxicaciones leves, infecciones renales o la muerte.
            <br><br>
            h3.text-regular Aunque afecta a cada persona de forma diferente, existen algunos síntomas comunes en estas intoxicaciones, como los vómitos, los calambres abdominales y la diarrea.
            i.fas.fa-quote-right
          .bloque-texto-d__autor
            .h5.mb-0 Según la publicación de
            .h6.mb-0 (Cluster de Salud, 2017)


    p.mb-4 Este aporte realizado por la OMS afirma la importancia sobre el manejo y manipulación de los alimentos que requieren una cadena de frío en su distribución para su respectivo consumo.

    Separador

    // 4.3
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 4.3 Salud y seguridad en el transporte de carga refrigerada


    p.mb-4 En el transporte de carga refrigerada se deben desarrollar operaciones seguras que no interrumpan el ciclo de operación completo, en el siguiente vídeo se identifican actividades adicionales que se deben realizar durante el servicio.

    .row.justify-content-center.tarjeta.fondo-video.mb-4.py-5(data-aos="fade-down")
      .col-md-10
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/NlgzGbxKoIk" title="Salud y seguridad en el transporte de carga refrigerada" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p.mb-4 Además, en el transporte de carga refrigerada se consideran aspectos relacionadas con la revisión de medidas de seguridad del vehículo en las zonas de parqueo, condiciones de salubridad y seguridad individual del transportista durante el transporte de la carga y rastreo del desarrollo de la ruta a través del uso de las tecnologías de información y comunicación. Observar la siguiente figura:

    .row(data-aos="fade-down").justify-content-center.my-4
      .col-lg-10
        .row
          .col-lg-6.mb-3.mb-md-0
            .tarjeta-foto-hover(@mouseover="mostrarIndicador = false")
              .indicador--hover(v-if="mostrarIndicador")
              .tarjeta-foto-hover__img: img(src='@/assets/curso/tema4/img72.jpg')
              .tarjeta-foto-hover__titulo.bg-acento-contenido.d-flex.justify-content-center.align-items-center.p-2
                h4.text-center.mb-0.text-white Seguridad
              .tarjeta-foto-hover__tarjeta.bg-primario.d-flex.align-items-center.justify-content-center
                .p-4.text-center
                  h4 Seguridad
                  p.mb-0
                    ul.lista-ul.mb-5
                      li
                        i.lista-ul__vineta
                        | Revisar el estado mecánico del vehículo.
                      li
                        i.lista-ul__vineta
                        | Cámara de seguridad monitoreada.
                      li
                        i.lista-ul__vineta
                        | Parquear en áreas seguras.
                      li
                        i.lista-ul__vineta
                        | Hacer descanso en las rutas de transporte.

          .col-lg-6.mb-3.mb-md-0
            .tarjeta-foto-hover(@mouseover="mostrarIndicador = false")
              .indicador--hover(v-if="mostrarIndicador")
              .tarjeta-foto-hover__img: img(src='@/assets/curso/tema4/img74.jpg')
              .tarjeta-foto-hover__titulo.bg-acento-contenido.d-flex.justify-content-center.align-items-center.p-2
                h4.text-center.mb-0.text-white Transporte de carga
              .tarjeta-foto-hover__tarjeta.bg-primario.d-flex.align-items-center.justify-content-center
                .p-4.text-center
                  h4 Transporte de carga
                  p.mb-0
                    ul.lista-ul.mb-5
                      li
                        i.lista-ul__vineta
                        | Registro médicos actualizados.
                      li
                        i.lista-ul__vineta
                        | Seguimiento cronometrado del proceso de ruteo.
                      li
                        i.lista-ul__vineta
                        | Manejo de alertas.

    h3.titulo-tercero.mt-5 Enfermedades profesionales en el manejo de la cadena de frío

    p.mb-4 La fisiología del frío se puede definir con dos enfoques, a saber: concepto fisiológico, se considera que el frío es la temperatura ambiental que activa el sistema de termorregulación corporal. Ahora en el contexto psicológico, el frío es una temperatura que produce sensación de frío o disconfort, como se explica a continuación, ver tabla 3:

    .row.justify-content-center
      .col-lg-10.col-sm-12

        PasosA.color-secundario.my-5(tipo="")
          .row.align-items-center.justify-content-center
            .col-md-8.mb-4.mb-md-0
              p El frío trae consecuencias adversas en el rendimiento y la salud de la persona. Los ambientes fríos causan sensaciones de disconfort térmico, ocasionando distracciones, reduciendo el rendimiento del personal en las actividades que requieren una concentración y vigilancia permanente, así como el aumento de riesgos de accidentes.

            .col-md-4
              figure
                img(src='@/assets/curso/tema4/img75.jpg')
          .row.align-items-center.justify-content-center
            .col-md-4
              figure.mb-4
                img(src='@/assets/curso/tema4/img76.jpg')
            .col-md-8.mb-4.mb-md-0
              p Produciendo enfermedades tales como: el fenómeno de Raynaud y la urticaria. La secuencia básica de eritema, edema y prurito puede desencadenarse en respuesta a las bajas temperaturas ambientales, viento frío, o manipulación de objetos fríos, igualmente acelera sintomatologías de enfermedades crónicas, tales como hipertensión, cardiopatías y asma, entre otras.

          .row.align-items-center.justify-content-center
            .col-md-8.mb-4.mb-md-0
              p Afecta también el sistema cardiovascular, la piel se comporta como recubrimiento natural del cuerpo humano y se constituye en una base de reserva de energía, también actúa como un tejido aislante en él se encuentran vasos circulatorios en toda la periferia cutánea y se encuentra regulado a través del sistema nervioso autónomo.

            .col-md-4
              figure
                img(src='@/assets/curso/tema4/img77.jpg')

          .row.align-items-center.justify-content-center
            .col-md-4
              figure.mb-4
                img(src='@/assets/curso/tema4/img78.jpg')
            .col-md-8.mb-4.mb-md-0
              p Otro aspecto a tener en cuenta, influye en los órganos internos, por ejemplo, en los riñones, produciéndose más orina, lo que se conoce como diuresis.

          .row.align-items-center.justify-content-center
            .col-md-8.mb-4.mb-md-0
              p En casos de descensos de temperatura, se presentan el estrés por frio. En relación con las manos, estas tienen una vascularización como una capacidad de respuesta junto con los pies, los pabellones auditivos, la nariz y los labios, llamados las partes acras del organismo, debido a la interrupción de la circulación periférica, están expuesta al frío, y sufren lesiones por la congelación.
            .col-md-4
              figure
                img(src='@/assets/curso/tema4/img79.jpg')

          .row.align-items-center.justify-content-center
            .col-md-4
              figure.mb-4
                img(src='@/assets/curso/tema4/img80.jpg')
            .col-md-8.mb-4.mb-md-0
              p La exposición del trabajador a las bajas temperaturas, se reflejan en la sensación de tener frío, la piel se vuelve pálida por su contracción, la tensión arterial aumenta por la contracción de los vasos periféricos, el corazón bombea con más fuerza, notándose aumento de las palpitaciones y disminución de la frecuencia cardíaca. Además, se produce escalofríos, la destreza manual se ve afectada, se cometen errores y aumentan los accidentes laborales y la secreción nasal y bronquial.


    .titulo-sexto.color-acento-3.mt-4
      h5 Tabla 3
      span Enfermedades profesionales relacionadas con la exposición al frío
    .tabla-a.color-acento-botones.mb-5
      table
        caption Nota. Adaptado de SGS TECNOS. Departamento de Desarrollo de Proyectos e Innovación (2008).
        thead
          tr
            th Tipo de enfermedad
            th Factores
            th Sintomatología
        tbody
          tr
            td Trastornos músculo esqueléticos
            td.color-acento4
            td.color-acento4 Origen ergonómico (manipulación de cargas, posturas forzadas) puede verse potenciado por los efectos el frío.

          tr
            td Enfermedades respiratorias.
            td.color-acento4 Efectos del frío sobre el sistema respiratorio, asociados a las variaciones de temperatura, así como a la inhalación de aire frío.
            td.color-acento4 Patologías en las zonas más expuestas: nariz, oídos y garganta, donde se puede relacionar con el ambiente térmico, y con una menor presencia de medidas preventivas.
          tr
            td Fenómenos vasculares o alérgicos.
            td.color-acento4
            td.color-acento4 Estímulos fríos, como las rinitis, el eritema pernio y las urticarias.

          tr
            td Metabolismo muscular.
            td.color-acento4 La destreza manual y, posteriormente, la movilidad general se va a ver comprometidas. En esta situación, es más fácil cometer errores en las tareas psicomotrices, así como sufrir accidentes.
            td.color-acento4 Hipertonía, es decir, los músculos se vuelven más tensos. Tiritona o escalofríos (por debajo de los 33ºC). Se trata de contracciones involuntarias de grupos musculares, principalmente de las extremidades.


          tr
            td Aparato respiratorio.
            td.color-acento4 El broncoespasmo (contracción brusca de los bronquios) y la broncorrea (aumento de las secreciones bronquiales). Además, se ha comprobado la disminución de la actividad mucociliar, deshidratación y sequedad de las mucosas.
            td.color-acento4 Aumenta la secreción de mucosidad bronquial, con disminución de los sistemas que permiten su transporte y expulsión (cilios y la tos). Ocasionando o empeorando el asma bronquial, y las alteraciones de la ventilación pulmonar (atelectasias) y de infecciones pulmonares.

          tr
            td Endocrinos y metabólicos.
            td.color-acento4 - Aumento de la glucosa en sangre.
              | <br> - Disminución de las hormonas hipotalámico-hipofisarias ACTH, TSH, vasopresina y oxitocina.

            td.color-acento4 El sodio disminuye el potasio a aumentar. El metabolismo aumenta para producir más cantidad de calor.

          tr
            td Cambios renales y hematológicos.
            td.color-acento4 La diuresis, incluso antes de la disminución de la temperatura central. Se debe a la vasoconstricción cutánea que desplaza la afluencia de sangre hacia los territorios centrales, como es el caso de los riñones.
            td.color-acento4 Al recibir más sangre, filtran más cantidad de líquido y producen mayor cantidad de orina, lo que implica que la sangre va a quedar más concentrada. Por todo ello la hemoglobina y el hematocrito suelen estar elevados.

          tr
            td Efectos neurológicos y conductuales.
            td.color-acento4 Cuando la temperatura corporal central disminuye, a pesar de los mecanismos de respuesta, el nivel de consciencia va a disminuir hasta llegar, en grados extremos, al coma profundo, medida que intenta disminuir el consumo de oxígeno (del cerebro y médula espinal).
            td.color-acento4 Este mecanismo preventivo permite explicar las recuperaciones neurológicas completas de personas que han estado inmersas en aguas heladas más de 30 minutos.

    .row.my-4
      .col-lg-6.col-12
        p.mb-4(data-aos="fade") Es importante señalar que muchas de las manifestaciones clínicas de las enfermedades relacionadas con el frío tienen una manifestación aguda.

        p.mb-4 Por todo esto, la inclusión del frío en el cuadro de enfermedades profesionales proporciona una nueva dimensión laboral a las patologías y consecuencias del frío, por lo que deben orientarse como contingencias profesionales y no como contingencias comunes, tal como viene ocurriendo hasta ahora.

        p.mb-4 En consecuencia, el empresario está obligado a facilitar la formación a los trabajadores sobre los riesgos a los que están sometidos, las medidas preventivas a aplicar y en el uso y conservación de los equipos de protección individual.

        .cajon.color-primario.p-4.mb-4
          p Como medida preventiva, es fundamental el uso de los equipos de prevención. Las mediciones realizadas parecen indicar que, a partir de los 30 minutos de exposición al frío, la tendencia es a la disminución de la frecuencia cardiaca y la temperatura timpánica, lo que supone un impacto sobre la salud del trabajador. Una de las carencias en las medidas preventivas es la evaluación de riesgos por exposición al frío que contemple la carga metabólica de los trabajadores de mayor exposición al frío.


      .col-lg-6.col-12
        img(src='@/assets/curso/tema4/img81.jpg' data-aos="zoom-in")

    h3.titulo-tercero.mt-5 Recomendaciones

    p.mb-4 De acuerdo con estándares internacionales definidos en el nuevo cuadro de enfermedades profesionales y las implicaciones legales y sanitarias que conlleva, se requiere considerar las siguientes condiciones laborales de los trabajadores del transporte refrigerado:

    .titulo-sexto.color-acento-contenido
      h5 Realización de evaluaciones de riesgos laborales en el manejo del transporte refrigerado:

    ul.lista-ul.mb-3.mx-4
      li
        i.lista-ul__vineta
        | Las condiciones térmicas.
      li
        i.lista-ul__vineta
        | Los tiempos de exposición.
      li
        i.lista-ul__vineta
        | La carga metabólica de las actividades desarrolladas en el interior de las cámaras.
      li
        i.lista-ul__vineta
        | La adecuación de los equipos de protección individual.

    .row.justify-content-center.mb-4
      .col-lg
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema4/img82.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-4 El objetivo general se basa en el manejo del equipamiento con una vestimenta que permita la protección del frío, para el sostenimiento de la temperatura corporal de los trabajadores en los rangos de confort térmico. La vestimenta debe garantizar la conservación del calor corporal, evitando la acumulación de calor, y situaciones de sudoración y estrés térmico.


    p.mb-4 En cuanto a la prevención del riesgo es importante un buen manejo de la información y la capacitación que se brinde a los empleados, esta no solo se debe presentar orientando los efectos negativos del frío, sino, las buenas prácticas que se deben realizar como medida preventiva.

    .row
      .col-lg
        .cajon.color-primario.p-4.mb-4
          p De igual forma, la decisión de compra y manejo de los Equipos de Protección Individual se llevan a cabo con éxito cuando se tiene el control de las actuaciones relativas a la gestión de los EPIS mediante grupos de trabajo, en los que intervengan los responsables de la empresa, los representantes de los trabajadores en materia de Seguridad y Salud en el trabajo, y el personal técnico y sanitario del Servicio de Prevención.

    .titulo-sexto.color-acento-contenido
      h5 Los equipos de trabajo deben individualizarse teniendo en cuenta:

    p.mb-4 En general, los equipos de trabajo están formados por indumentaria y características específicas tales como las registradas a continuación:

    .titulo-quinto.color-acento-contenido
      h4 Los equipos de trabajo individualizados se deben analizar teniendo en cuenta…

    .row.justify-content-center.my-4
      .col-md-8.col-lg-6.col-12.py-4
        ImagenInfografica.color-secundario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema4/img83.png')
              figcaption Equipos de protección

          .tarjeta.bg-primario.p-3(x="25%" y="27%" numero="")
            p.text-center El nivel de actividad que se va a desarrollar

          .tarjeta.bg-primario.p-3(x="72%" y="27%" numero="")
            p.text-center La velocidad del viento, si se desarrolla en exteriores o existen ventiladores

          .tarjeta.bg-primario.p-3(x="80%" y="50%" numero="")
            p.text-center Las propiedades aislantes de la ropa

          .tarjeta.bg-primario.p-3(x="18%" y="50%" numero="")
            p.text-center El nivel de humedad

          .tarjeta.bg-primario.p-3(x="78%" y="75%" numero="")
            p.text-center La temperatura de exposición

          .tarjeta.bg-primario.p-3(x="20%" y="75%" numero="")
            p.text-center El tiempo máximo de exposición

    .titulo-quinto.color-acento-contenido
      h4 Características especiales de los equipos de trabajo.

    .row.justify-content-center
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        //- .tarjeta--boton debe ir acompañado de una de una de estas clases =>
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta--boton.color-secundario.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema4/img84.svg')
          p.text-small No deben utilizarse prendas húmedas o mojadas.

      .col-sm-6.col-lg-3.mb-4.mb-sm-0
        //- .tarjeta--boton debe ir acompañado de una de una de estas clases =>
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta--boton.color-acento-contenido.text-white--hover.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema4/img85.svg')
          p.text-small Utilización de gafas protectoras en caso de presencia de partículas de hielo o polvo en suspensión.

      .col-sm-6.col-lg-3.mb-4.mb-sm-0
        .tarjeta--boton.color-acento-contenido.text-white--hover.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema4/img86.svg')
          p.text-small Deben cubrirse todas las partes del cuerpo. No debe haber exposición directa de la piel.

    .row.justify-content-center.mt-4
      .col-sm-6.col-lg-3.mb-4.mb-sm-0
        .tarjeta--boton.color-acento-contenido.text-white--hover.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema4/img87.svg')
          p.text-small Uso de mascarillas y tapones que disminuyan el contacto del aire frío con las mucosas respiratoria y auditiva.

      .col-sm-6.col-lg-3.mb-4.mb-sm-0
        .tarjeta--boton.color-acento-contenido.text-white--hover.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema4/img88.svg')
          p.text-small Retiro de las prendas de abrigo exteriores durante el tiempo de recuperación, y fuera de las cámaras.

    p.my-5 Por su parte, la vigilancia de la salud permite:

    .row.my-4.justify-content-center
      .col-lg-10
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        LineaTiempoD.color-secundario
          .row(numero="1" titulo="Detección")
            .col-md-6.mb-4.mb-md-0
              p Precoz de patologías, así como un medio para informar a los trabajadores sobre su estado de salud.

            .col-md-6
              figure
                img(src='@/assets/curso/tema4/img89.jpg', alt='Detección')

          .row(numero="2" titulo="Diagnóstico")
            .col-md-6.mb-4.mb-md-0
              p De patología de los efectos de la exposición al frío con su respectivo plan de contingencia.
            .col-md-6
              figure
                img(src='@/assets/curso/tema4/img90.jpg', alt='Diagnóstico')
            


          .row(numero="3" titulo="Difusión de programas")
            .col-md-6
              figure
                img(src='@/assets/curso/tema4/img91.jpg', alt='Difusión de programas')
            .col-md-6.mb-4.mb-md-0
              p Difusión de programas de promoción de la salud y de hábitos de vida.

            

          .row(numero="4" titulo="Hábitos saludables")
            .col-md-6
              figure
                img(src='@/assets/curso/tema4/img92.jpg', alt='Hábitos saludables')
            .col-md-6.mb-4.mb-md-0
              p
                ul.lista-ul--color
                  li
                    i.fas.fa-check
                    | Abandonar el tabaco.
                  li
                    i.fas.fa-check
                    | Moderar el consumo de alcohol.
                  li
                    i.fas.fa-check
                    | Practicar ejercicio físico.
                  li
                    i.fas.fa-check
                    | Consumir una dieta equilibrada. 

            


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
