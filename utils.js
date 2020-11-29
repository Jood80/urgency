import axios from 'axios'

const backURL = process.env.NEXT_PUBLIC_BACK_URL

async function fetchedData(method = 'get', path, userInfo, params = null) {
  let url
  if (params !== null) {
    url = `${backURL}/${path}/${params}`
  } else {
    url = `${backURL}/${path}`
  }
  const userINFO = userInfo ? userInfo : {}

  try {
    const { data } = await axios({
      method,
      url: `${url}`,
      data: userINFO,
    })
    return data
  } catch (err) {
    console.error(`${err} is`, err)
  }
}
export { backURL, fetchedData }
