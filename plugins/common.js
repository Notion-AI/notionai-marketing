import { slice, join, get } from 'lodash'

export default (context, inject) => {
  inject('textConvert', (title, classTextNormal = '', classTextHighlight = '') => {
    const text = title?.text
    
    const insertOpenTagNormalText = `<span class="${classTextNormal}">`

    const insertOpenTagHighlightText = `<span class="${classTextHighlight}">`
    const insertCloseTagSpan = '</span>'

    const positionStart = get(title, 'spans[0].start', 0)
    const positionEnd = get(title, 'spans[0].end', 0)

    const convertTextHTML = join([insertOpenTagNormalText, join(slice(text, 0, positionStart), ''), insertCloseTagSpan, insertOpenTagHighlightText, join(slice(text, positionStart, positionEnd), ''), insertCloseTagSpan, insertOpenTagNormalText, join(text.slice(positionEnd), ''), insertCloseTagSpan] , '') || ''

    return convertTextHTML
  })
}