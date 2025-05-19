import React from 'react'
import Header from '@/components/Header'
import ChatInput from '@/components/ChatInput'
import TextBubble from '@/components/TextBubble'

const Chat = () => {
  const chatHistory = [
    {
      role: 'user',
      content: `Oi! Tô tentando entender melhor como funcionam redes neurais. Você consegue me explicar de forma simples, como se eu fosse leigo? Não precisa entrar em detalhes matemáticos ainda não, só quero ter uma visão geral pra não ficar tão perdido quando for estudar os detalhes.`,
    },
    {
      role: 'assistant',
      content: `Claro! Redes neurais são um tipo de modelo de inteligência artificial inspirado no funcionamento do cérebro humano. Elas são compostas por "neurônios" artificiais organizados em camadas — geralmente uma camada de entrada, uma ou mais camadas escondidas, e uma camada de saída.
  
  Cada neurônio recebe informações, faz alguns cálculos simples, e passa os resultados adiante. O que torna as redes poderosas é a forma como elas ajustam automaticamente os "pesos" dessas conexões durante o treinamento, aprendendo a reconhecer padrões complexos nos dados.
  
  Por exemplo, numa rede que identifica imagens de gatos, os primeiros neurônios podem detectar bordas, os próximos detectam formas, e os últimos combinam tudo pra dizer: “isso é um gato”.
  
  Elas são muito boas em tarefas como reconhecimento de imagem, tradução de texto, geração de linguagem e muito mais!`,
    },
    {
      role: 'user',
      content: `Ah, agora sim! Fez muito mais sentido. E como a rede aprende esses pesos aí? Tem algum processo por trás ou é tudo meio “mágico”?`,
    },
    {
      role: 'assistant',
      content: `Boa pergunta! O processo que a rede usa pra aprender os pesos se chama **backpropagation** (ou retropropagação) junto com um algoritmo de otimização, normalmente o **gradiente descendente**.
  
  Funciona mais ou menos assim: a rede faz uma previsão, compara com a resposta correta (o que chamamos de "rótulo"), e calcula o erro. Esse erro é então "propagado de volta" pela rede, camada por camada, ajustando os pesos pra que, da próxima vez, o erro seja menor.
  
  É um processo iterativo — a rede vê muitos exemplos, erra bastante no começo, mas com o tempo vai se ajustando. É como se ela fosse calibrando a própria visão de mundo até ficar boa em uma tarefa.
  
  Apesar de parecer meio mágico, no fundo são só contas de multiplicação, soma e derivadas sendo feitas de forma eficiente com muita repetição.`,
    },
    {
      role: 'user',
      content: `Cara, fantástico. Última dúvida por enquanto: o ChatGPT é uma rede neural também? E se for, como ele é treinado pra responder tão bem assim?`,
    },
    {
      role: 'assistant',
      content: `Sim, o ChatGPT é baseado em uma arquitetura de rede neural chamada **transformer**, que revolucionou a área de processamento de linguagem natural (NLP). Ele é treinado usando uma abordagem chamada **aprendizado supervisionado com ajuste fino**, em grandes quantidades de texto coletado da internet.
  
  No início, ele aprende a prever a próxima palavra num texto — isso é chamado de pré-treinamento. Depois, ele passa por um processo chamado **fine-tuning** com feedback humano, onde anotadores avaliam respostas e ajudam a guiar o modelo a responder de maneira mais útil, educada e segura.
  
  Toda essa etapa de treinamento usa bilhões (ou até trilhões) de exemplos. O resultado é um modelo que não entende o mundo como a gente, mas consegue gerar respostas muito coerentes com base no padrão dos dados que viu.
  
  O impressionante é que, apesar de não "pensar" como humanos, ele consegue simular conversas de forma extremamente convincente por causa da riqueza e variedade de seu treinamento.`,
    },
  ]

  return (
    <>
      <Header />
      <div className="flex flex-row h-screen overflow-hidden">
        <div className="w-85 h-full border-r-1 border-zinc-700"></div>
        <div className="w-full items-center flex flex-col py-10 gap-10 overflow-y-scroll">
          {chatHistory.map((message, index) => {
            return (
              <TextBubble
                key={message.content + index}
                role={message.role}
                message={message.content}
              />
            )
          })}
          <ChatInput />
        </div>
      </div>
    </>
  )
}

export default Chat
