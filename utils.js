import axios from 'axios'

const backUrl = process.env.BACK_URL

async function fetchedData(path, params = null) {
  let url
  if (params !== null) {
    url = `${backUrl}/${path}/${params}`
  } else {
    url = `${backUrl}/${path}`
  }

  const response = await axios(`${url}`)
  const data = await response.json()
  return data
}
export { backUrl, fetchedData }
