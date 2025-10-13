import React from 'react'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

import { AiOutlineExperiment } from 'react-icons/ai'

const InstructionsButton = ({ setValue, value }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const instructions = formData.get('instructions')
    setValue(instructions)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <AiOutlineExperiment size={35} />
          Instruções de IA
        </Button>
      </DialogTrigger>
      <DialogContent className="border-zinc-700 max-md:w-[90%]">
        <form onSubmit={handleSubmit} className="content">
          <DialogHeader className="mb-3 text-left gap-1">
            <DialogTitle>Customize suas respostas</DialogTitle>
            <DialogDescription>
              As instruções de IA são orientações que você dá ao sistema para definir como ele deve
              responder ou agir. Elas ajudam a IA a entender melhor o que você espera, seja o estilo
              da resposta, o formato do conteúdo ou o tipo de informação que deseja receber.
            </DialogDescription>
            <DialogDescription>
              A maioria das IAs respondem melhor a instruções positivas. Evite negações para obter
              os melhores efeitos. Por exemplo, "evite usar emojis" ao invés de "não use emojis".
            </DialogDescription>
          </DialogHeader>
          <div className="grid mb-4">
            <div className="grid gap-4">
              <Label htmlFor="instructions">Instruções</Label>
              <Textarea
                className="border-zinc-700 placeholder:italic placeholder:text-zinc-700"
                id="instructions"
                name="instructions"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Exemplo: Responda com imparcialidade. Use o mesma idioma do usuário. Evite abreviações."
              />
            </div>
          </div>
          <DialogFooter className="max-md:gap-3">
            <DialogClose asChild>
              <Button variant="destructive">Fechar</Button>
            </DialogClose>
            <DialogClose asChild>
              <Button variant="secondary" type="submit">
                Salvar
              </Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default InstructionsButton
