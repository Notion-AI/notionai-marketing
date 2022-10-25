import MyComponent from '../../../../slices/AboutIntroduction';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/AboutIntroduction'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"title":"occur","description":[{"type":"paragraph","text":"Culpa in laborum esse labore labore enim amet ea. Officia non anim ut commodo. Labore reprehenderit nisi elit culpa non pariatur tempor esse mollit ea.","spans":[]}]}],"primary":{"title":[{"type":"paragraph","text":"Amet aute nisi non excepteur laborum aute veniam laborum.","spans":[]}]},"slice_type":"about_introduction","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
