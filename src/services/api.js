const getHeaders = () => ({
  'Content-Type': 'application/json',
  Authorization: 'Bearer',
})

export const request = async (url, method = 'GET', data = null) => {
  const options = {
    method,
    headers: getHeaders(),
    ...(data && { body: JSON.stringify(data) }),
  }

  const response = await fetch(url, options)

  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({}))
    throw new Error(
      `HTTP ${response.status} - ${response.statusText}: ${errorBody?.error || 'Unknown error'}`
    )
  }

  return await response.json()
}
