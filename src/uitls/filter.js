const filters = {
    cardNameType (type) {
      let val = ''
      switch (type) {
        case 'D':
          val = '天'
          break
        case 'M':
          val = '月'
          break
        case 'Q':
          val = '季'
          break
        case 'Y':
          val = '年'
          break
        default:
          break
      }
      return val
    },
    timeFormat (v) {
      if (v == null) {
        return ''
      }
      const n = new Date(v)
      const m = n.getMonth() + 1
      const d = n.getDate()
      const h = n.getHours()
      const f = n.getMinutes()
      const s = n.getSeconds()

      const time = n.getFullYear() +
            '-' + (m < 10 ? '0' + m : m) +
            '-' + (d < 10 ? '0' + d : d) +
            ' ' + (h < 10 ? '0' + h : h) +
            ':' + (f < 10 ? '0' + f : f) +
            ':' + (s < 10 ? '0' + s : s)
      return time
    }
  }

  export default filters
