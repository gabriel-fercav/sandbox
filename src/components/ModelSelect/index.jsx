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
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Selecione um modelo" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Modelos</SelectLabel>
          {models?.map((model) => {
            return (
              <SelectItem key={model.id} value={model.id}>
                {model.id}
              </SelectItem>
            )
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default ModelSelect
