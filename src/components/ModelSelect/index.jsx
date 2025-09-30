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

const ModelSelect = ({ models, selectedModel, onChange }) => {
  return (
    <Select onValueChange={(e) => onChange(e)}>
      <SelectTrigger className="w-fit text-amber-50">
        <SelectValue value={selectedModel} placeholder="Modelo" />
      </SelectTrigger>
      <SelectContent className="bg-zinc-800 text-blue-50 border-0">
        <SelectGroup>
          <SelectLabel>Modelos</SelectLabel>
          {models?.map((model) => {
            return (
              <SelectItem key={model.id} value={model.id}>
                {model.icon}
                {model.name}
              </SelectItem>
            )
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default ModelSelect
