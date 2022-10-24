import MyComponent from '../../../../slices/Service';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Service'
}


export const _Default = () => ({
  components: {
    MyComponent,
    SliceZone
  },
  methods: {
    resolve() {
      return MyComponent
    }
  },
  data() {
    return {
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"title":[{"type":"paragraph","text":"Proident duis ad commodo aute est sunt.","spans":[]}],"description":[{"type":"paragraph","text":"Aliqua ad esse qui exercitation pariatur aliqua esse fugiat excepteur esse.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1579931794097-0ad001e51edb"}},"slice_type":"service","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
