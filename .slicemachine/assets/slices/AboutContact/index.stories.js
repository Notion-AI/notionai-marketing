import MyComponent from '../../../../slices/AboutContact';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/AboutContact'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"title":[{"type":"paragraph","text":"Minim dolore exercitation duis consectetur occaecat cillum nostrud exercitation duis id sunt fugiat.","spans":[]}],"button_text":"halfway","button_link":{"link_type":"Web","url":"https://slicemachine.dev"}},"slice_type":"about_contact","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
