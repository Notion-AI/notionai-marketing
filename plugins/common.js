import { slice, join } from 'lodash'

export default (context, inject) => {
  inject('textConvert', (title) => {
    const text = title?.text

    const insertOpenTag = '<span>'
    const insertCloseTag = '</span>'

    const positionStart = title?.spans[0]?.start || 0
    const positionEnd = title?.spans[0]?.end || 0

    const convertTextHTML = join([slice(text, 0, positionStart), insertOpenTag, join(slice(text, positionStart, positionEnd), ''), insertCloseTag, text.slice(positionEnd)] , '') || ''

    return convertTextHTML
  })
}