import axios from 'axios'

const backURL = process.env.NEXT_PUBLIC_BACK_URL

async function fetchedData(path, params = null) {
  let url
  if (params !== null) {
    url = `${backURL}/${path}/${params}`
  } else {
    url = `${backURL}/${path}`
  }
  try {
    const { data: response } = await axios.get(`${url}`)
    return response
  } catch (err) {
    console.error(`Error is ${err}`, err)
  }
}
export { backURL, fetchedData }
