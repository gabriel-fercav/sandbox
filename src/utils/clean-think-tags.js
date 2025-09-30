export const cleanThinkTags = (response) => {
  if (response.content?.includes('<think>')) {
    return {
      ...response,
      content: response.content.replace(/<think>[\s\S]*?<\/think>/g, '').trim(),
    }
  }

  return response
}
