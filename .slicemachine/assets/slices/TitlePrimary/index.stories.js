import MyComponent from '../../../../slices/TitlePrimary';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/TitlePrimary'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"test":[{"type":"paragraph","text":"Laboris dolore voluptate esse eu.","spans":[]}]}],"primary":{"title":[{"type":"heading1","text":"Every","spans":[]}]},"slice_type":"title_primary","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
