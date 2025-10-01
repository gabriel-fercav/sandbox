import React from 'react'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const ModelSelect = ({ disabled, models, selectedModel, onChange }) => {
  return (
    <Select value={selectedModel} onValueChange={onChange} disabled={disabled}>
      <SelectTrigger className="w-fit text-amber-50 border-zinc-700 !shadow-none focus-visible:!ring-0">
        <SelectValue placeholder="Modelo" />
      </SelectTrigger>
      <SelectContent className="bg-zinc-800 text-blue-50 border-0">
        <SelectGroup>
          <SelectLabel>Modelos</SelectLabel>
          {models?.map((model) => (
            <SelectItem key={model.id} value={model.id}>
              {model.icon}
              {model.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default ModelSelect
