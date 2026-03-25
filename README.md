# ⏳ WorthIt? (Vale a Pena?)

> Transforme o preço das suas compras no seu custo real: **o seu tempo de vida.**

O **WorthIt?** é uma aplicação web focada em educação e planejamento financeiro. Ele ajuda os usuários a tomarem decisões de compra mais conscientes ao calcular exatamente quantas horas ou dias de trabalho são necessários para adquirir um produto. Além da matemática pura, o sistema integra Inteligência Artificial para atuar como um conselheiro financeiro, analisando o custo de oportunidade e sugerindo alternativas de investimento.

## ✨ Funcionalidades

* **Calculadora de Esforço:** Converte o valor de um produto em horas e dias reais de trabalho com base no salário do usuário.
* **Análise de IA (AI Advisor):** Integração com IA Generativa para fornecer um feedback personalizado sobre o impacto financeiro da compra.
* **Custo de Oportunidade:** Projeção de quanto o dinheiro gasto renderia se fosse investido a médio/longo prazo.
* **Interface Premium:** Design focado em usabilidade, com Dark Mode nativo e componentes altamente responsivos.

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído com foco em performance, tipagem estática e componentização moderna:

* **[React](https://react.dev/)** + **[Vite](https://vitejs.dev/)**: Para um ambiente de desenvolvimento ultra-rápido.
* **[TypeScript](https://www.typescriptlang.org/)**: Para garantir segurança e previsibilidade no código.
* **[Mantine UI (v7)](https://mantine.dev/)**: Biblioteca de componentes baseada em PostCSS para uma interface elegante e acessível.
* **[Tabler Icons](https://tabler-icons.com/)**: Ícones consistentes e otimizados.
* **Integração de IA**: (Adicionar aqui qual API você usará, ex: Google Gemini API ou OpenAI API).

## 📁 Arquitetura do Projeto

O código foi estruturado visando a separação de responsabilidades e escalabilidade:

```text
src/
├── components/       # Componentes visuais isolados (InputForm, ResultBoard)
├── hooks/            # Hooks customizados para gerenciamento de estado
├── services/         # Comunicação com APIs externas (IA)
├── utils/            # Funções matemáticas e formatação isoladas para testes
├── App.tsx           # Ponto de montagem da interface
└── main.tsx          # Configurações globais e provedores de tema
