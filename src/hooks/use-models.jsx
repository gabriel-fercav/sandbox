import { useState, useEffect, useCallback } from 'react'
import { useQuery } from '@tanstack/react-query'
import { request } from '@/services/api'
import { formatModelName } from '@/utils/format-model-name'

import { PiOpenAiLogoLight } from 'react-icons/pi'
import { TbBrandMeta } from 'react-icons/tb'
import { DeepSeek } from '@lobehub/icons'
import { Qwen } from '@lobehub/icons'
import { Moonshot } from '@lobehub/icons'

export const useModels = () => {
  const [modelList, setModelList] = useState([])

  const displayModelIcon = useCallback((model) => {
    if (model.owned_by.includes('DeepSeek')) return <DeepSeek className="inline text-amber-50" />
    if (model.owned_by.includes('Alibaba')) return <Qwen className="inline text-amber-50" />
    if (model.owned_by === 'Moonshot AI') return <Moonshot className="inline text-amber-50" />
    if (model.owned_by === 'OpenAI') return <PiOpenAiLogoLight className="inline text-amber-50" />
    if (model.owned_by === 'Meta') return <TbBrandMeta className="inline text-amber-50" />
  }, [])

  const { data: models, isFetching } = useQuery({
    queryFn: async () => request('/api/getModels', 'GET'),
    queryKey: ['models'],
    refetchOnWindowFocus: false,
  })

  useEffect(() => {
    if (!models?.data) return

    const LLMs = models.data.filter(
      (model) =>
        model.max_completion_tokens > 1000 &&
        !['whisper', 'guard', 'tts', 'groq', 'gemma2', 'allam'].some((ex) => model.id.includes(ex))
    )

    setModelList(
      LLMs.map((model) => ({
        id: model.id,
        name: formatModelName(model.id),
        owned_by: model.owned_by,
        icon: displayModelIcon(model),
      })).sort((a, b) => a.owned_by.localeCompare(b.owned_by) || a.name.localeCompare(b.name))
    )
  }, [displayModelIcon, models])

  return { modelList, isFetching }
}
