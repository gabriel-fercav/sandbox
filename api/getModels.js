import fetch from 'node-fetch'

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Only GET allowed' })
  }

  const apiKey = process.env.GROQ_API_SECRET_KEY

  try {
    const response = await fetch('https://api.groq.com/openai/v1/models', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
    })

    const data = await response.json()
    return res.status(200).json(data)
  } catch (err) {
    console.error(err)
    return res.status(500).json({ error: err.message })
  }
}
