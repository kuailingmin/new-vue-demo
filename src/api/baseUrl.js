const htp = location.origin

export const BASE_URL = {
  plusCard: process.env.NODE_ENV === 'development' ? 'http://172.16.4.159:8885' + '/plusCard' : htp + '/plusCard'
}
