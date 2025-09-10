import * as React from 'react'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const ModelSelect = ({ models, onChange }) => {
  return (
    <Select onValueChange={(e) => onChange(e)}>
      <SelectTrigger className="w-[300px]">
        <SelectValue placeholder="Selecione um modelo" />
      </SelectTrigger>
      <SelectContent className="bg-zinc-800 text-blue-50 border-0">
        <SelectGroup>
          <SelectLabel>Modelos</SelectLabel>
          {models?.map((model) => {
            return (
              <SelectItem key={model.id} value={model.id}>
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
