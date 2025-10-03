export const cleanThinkTags = (response) => {
  if (response.includes('<think>')) {
    return response.replace(/<think>[\s\S]*?<\/think>/g, '').trim()
  }

  return response
}
