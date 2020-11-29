import axios from 'axios'

const backURL = process.env.NEXT_PUBLIC_BACK_URL

async function fetchedData(method = 'get', path, userInfo, params = null) {
  let url
  if (params !== null) {
    url = `${backURL}/${path}/${params}`
  } else {
    url = `${backURL}/${path}`
  }
  const data = userInfo ? userInfo : {}

  try {
    const { data: response } = await axios({
      method,
      url: `${url}`,
      data,
    })
    console.log(response)
    return response
  } catch (err) {
    console.error(`Error is ${err}`)
  }
}
export { backURL, fetchedData }
