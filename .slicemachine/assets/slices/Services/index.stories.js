import MyComponent from '../../../../slices/Services';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Services'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"is_active":true,"title":[{"type":"paragraph","text":"Elit ex consectetur mollit minim sint fugiat ipsum consectetur fugiat tempor.","spans":[]}],"description":"smaller","image":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1491975474562-1f4e30bc9468"},"background_color":"#ab3e78","button_text":"process","button_link":{"link_type":"Web","url":"http://google.com"}}],"primary":{},"slice_type":"services","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''

export const _Enterprise = () => ({
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
      mock: {"variation":"enterprise","version":"sktwi1xtmkfgx8626","items":[{"is_active":true,"title":[{"type":"paragraph","text":"Irure voluptate nostrud laboris incididunt in. Mollit dolor incididunt officia aliqua. Voluptate proident deserunt deserunt.","spans":[]}],"description":"label","image":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1600804931749-2da4ce26c869"},"background_color":"#28d937","button_text":"identity","button_link":{"link_type":"Web","url":"https://prismic.io"}}],"primary":{},"slice_type":"services","id":"_Enterprise"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Enterprise.storyName = ''
