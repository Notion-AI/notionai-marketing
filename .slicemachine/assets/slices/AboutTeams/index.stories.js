import MyComponent from '../../../../slices/AboutTeams';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/AboutTeams'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"is_active":true,"avatar":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1571126770897-2d612d1f7b89"},"name":"exclaimed","position":"electricity","link_linkedin":{"link_type":"Web","url":"http://twitter.com"}}],"primary":{"title":[{"type":"paragraph","text":"Magna id est sit nostrud. Lorem ullamco dolor magna consequat culpa anim laborum anim et velit amet.","spans":[]}]},"slice_type":"about_teams","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
