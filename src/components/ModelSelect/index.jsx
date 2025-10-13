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

import { Spinner } from '../ui/spinner'

const ModelSelect = ({ disabled, models, selectedModel, onChange, isLoading }) => {
  return (
    <Select
      value={selectedModel || <Spinner />}
      onValueChange={onChange}
      disabled={disabled || isLoading}
    >
      <SelectTrigger className="truncate text-amber-50 border-zinc-700 !shadow-none focus-visible:!ring-0">
        {isLoading ? <Spinner /> : <SelectValue placeholder="Modelo" />}
      </SelectTrigger>
      <SelectContent className="bg-zinc-800 text-blue-50 border-0 truncate max-md:w-[100%]">
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
