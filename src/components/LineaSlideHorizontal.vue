<template lang="pug">
.linea-tiempo-c
  .row.flex-nowrap.mx-0.linea-tiempo-c__header.mb-4
    .col-2.col-sm-auto.px-0.me-sm-3
      .linea-tiempo-c__header__btn--left(@click="selected = leftBtnId")
        i.fas.fa-angle-left
    .col-8.col-sm.px-0
      .row.mx-0.flex-nowrap.linea-tiempo-c__header__items
        ScrollHorizontal(
          v-if="elements.length"
          :selectedId="'ltc-header-' + (selected -1)"
        )
          .col-6.col-sm-4.px-0.linea-tiempo-c__header__item(
            v-for="(elm,index) of elements"
            :key="'ltc-header-key-'+elm.id"
            :id="'ltc-header-' +elm.id"
            :class="itemClasses(elm.id)"
            @click="selected = elm.id"
            @mouseover="mostrarIndicador = mostrarIndicador && index >= 1 ? false : mostrarIndicador"
          )
            .indicador__container(v-if="mostrarIndicador && index === 1")
              .indicador--click.indicador--sm
            .linea-tiempo-c__header__item__imagen.mb-2
              img(:src='elm.imagen')
            .linea-tiempo-c__header__item__line-container
              .linea-tiempo-c__header__item__dot
            span.linea-tiempo-c__header__item__text(v-html="elm.titulo" :class="{'text-small' : textSmall }").mt-2.px-1
    .col-2.col-sm-auto.px-0.ms-sm-3.d-flex.justify-content-end
      .linea-tiempo-c__header__btn--right(@click="selected = rightBtnId")
        i.fas.fa-angle-right

  .linea-tiempo-c__content
    ScrollHorizontal(
      v-if="elements.length"
      :selectedId="'ltc-content-' + selected"
      item-full-width
    )
      .linea-tiempo-c__content__item(
        v-for="item in elements"
        :key="'ltc-content-key-'+item.id"
        :id="'ltc-content-'+item.id"
        v-child="item.elm"
      )
    .hidden-slot
      slot
</template>

<script>
import componentSlotMixins from '../../node_modules/ecored-base-pkg/src/mixins/componentSlotMixins'
import ScrollHorizontal from '../components/ScrollHorizontal'
export default {
  name: 'LineaSlideHorizontal',
  components: { ScrollHorizontal },
  mixins: [componentSlotMixins],
  props: {
    textSmall: {
      type: Boolean,
    },
  },
  data: () => ({
    headerSelected: 0,
    mostrarIndicador: true,
  }),
  computed: {
    leftBtnId() {
      return this.selected - 1 === this.mainId
        ? this.selected
        : this.selected - 1
    },
    rightBtnId() {
      return this.selected + 1 ===
        this.elements[this.elements.length - 1].id + 1
        ? this.selected
        : this.selected + 1
    },
  },
  watch: {
    elements(newVal, oldVal) {
      if (!oldVal.length && newVal.length) {
        this.headerSelected = newVal[0].id
      }
    },
  },
  methods: {
    itemClasses(id) {
      return [
        { 'linea-tiempo-c__header__item--active': id === this.selected },
        { 'linea-tiempo-c__header__item--before': id < this.selected },
        this.elements.length > 6 ? 'col-lg-2' : 'col-lg',
        this.elements.length >= 3
          ? 'col-6 col-sm-6 col-md-4 col-lg-3'
          : 'col-md',
      ]
    },
  },
}
</script>

<style lang="sass">
.linea-tiempo-c__header__item__text
  min-height: 58px
  text-align: center
</style>
