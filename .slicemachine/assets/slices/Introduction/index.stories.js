import MyComponent from '../../../../slices/Introduction';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Introduction'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"is_active":false,"title":[{"type":"paragraph","text":"Non sint voluptate pariatur. Culpa mollit sit esse adipisicing tempor irure laboris cillum aliquip minim dolore exercitation velit dolore.","spans":[]}],"description":"written","button_link":{"link_type":"Web","url":"http://google.com"},"button_text":"explain","media":{"link_type":"Media","name":"mock","kind":"image","url":"https://source.unsplash.com/random","size":"10kB"}},"slice_type":"introduction","id":"_Default"}
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
      mock: {"variation":"enterprise","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"is_active":false,"title":[{"type":"paragraph","text":"Reprehenderit aliquip eu reprehenderit culpa aliqua ad dolor culpa. Consequat et sit laboris laborum. Reprehenderit mollit anim deserunt aliquip fugiat.","spans":[]}],"description":"way","button_link":{"link_type":"Web","url":"https://prismic.io"},"button_text":"mistake","media":{"link_type":"Media","name":"mock","kind":"image","url":"https://source.unsplash.com/random","size":"10kB"}},"slice_type":"introduction","id":"_Enterprise"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Enterprise.storyName = ''
