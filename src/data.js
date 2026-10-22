export const COURSE_STEPS = [
      {
        id: 1,
        title: "1. Introdução à LIBRAS",
        category: "Fundamentos",
        desc: "Conceitos fundamentais, legislação brasileira e cultura surda.",
        duration: "15 min",
        status: "concluida",
        content: {
          summary: "A Língua Brasileira de Sinais (LIBRAS) é uma língua visual-espacial reconhecida oficialmente pela Lei nº 10.436/2002.",
          details: "Muitas pessoas acreditam que LIBRAS é apenas sinalização de palavras em Português ou gestos aleatórios. Na verdade, possui sintaxe autônoma, gramática rica e expressões faciais fundamentais.",
          signTitle: "Sinal de 'Aprender'",
          signDesc: "Posicione a mão em 'S' na testa e abra/feche simulando a captação de conhecimento para a mente.",
          signSvg: `<svg viewBox="0 0 200 160" class="w-48 h-48 mx-auto">
            <circle cx="100" cy="60" r="35" class="fill-brand-100 stroke-brand-500" stroke-width="3"/>
            <path d="M100 95 L100 140 M70 120 L130 120" stroke="#1e3a8a" stroke-width="4" stroke-linecap="round"/>
            <path d="M125 50 C 150 40, 160 60, 135 65" class="fill-none stroke-brand-600 animate-pulseSubtle" stroke-width="3" stroke-dasharray="4,4"/>
            <text x="100" y="155" text-anchor="middle" font-weight="bold" font-size="12" fill="#1e3a8a">Sinal: APRENDER</text>
          </svg>`,
          tips: "Mantenha o olhar direto no interlocutor. A expressão neutra ou curiosa ajuda no entendimento.",
          exercise: {
            question: "A LIBRAS é uma simples versão em gestos do Português falado?",
            options: [
              "Sim, é exatamente a mesma gramática do Português.",
              "Não! É uma língua autônoma com estrutura gramatical própria.",
              "Sim, serve apenas para soletração de letras."
            ],
            correct: 1
          }
        }
      },
      {
        id: 2,
        title: "2. Alfabeto Dactilológico",
        category: "Alfabeto",
        desc: "Aprenda a soletrar nomes e palavras específicas com as mãos.",
        duration: "20 min",
        status: "concluida",
        content: {
          summary: "A dactilologia é utilizada para soletrar nomes de pessoas, locais ou vocábulos que não possuem sinal próprio.",
          details: "O segredo para uma boa dactilologia é manter o braço firme na altura do peito e movimentar apenas os dedos de forma fluida.",
          signTitle: "Configuração das Letras A, B, C",
          signDesc: "Posicionamento básico dos dedos mantendo a palma voltada para a frente.",
          signSvg: `<svg viewBox="0 0 300 120" class="w-full h-36 mx-auto">
            <g transform="translate(10,10)">
              <rect x="10" y="10" width="60" height="70" rx="12" class="fill-brand-100 stroke-brand-600" stroke-width="3"/>
              <text x="40" y="98" text-anchor="middle" font-bold font-size="14" fill="#1e3a8a">Letra A</text>
            </g>
            <g transform="translate(110,10)">
              <rect x="10" y="10" width="60" height="70" rx="6" class="fill-brand-200 stroke-brand-600" stroke-width="3"/>
              <text x="40" y="98" text-anchor="middle" font-bold font-size="14" fill="#1e3a8a">Letra B</text>
            </g>
            <g transform="translate(210,10)">
              <path d="M 50 20 A 25 25 0 0 0 50 70 L 30 70 A 25 25 0 0 1 30 20 Z" class="fill-brand-300 stroke-brand-700" stroke-width="3"/>
              <text x="40" y="98" text-anchor="middle" font-bold font-size="14" fill="#1e3a8a">Letra C</text>
            </g>
          </svg>`,
          tips: "Evite balançar a mão para a frente a cada letra. Mantenha o ponto fixo.",
          exercise: {
            question: "Quando é recomendado utilizar a Dactilologia?",
            options: [
              "Para todas as conversas do dia a dia.",
              "Para soletrar nomes próprios, endereços ou termos sem sinal.",
              "Apenas em provas de LIBRAS."
            ],
            correct: 1
          }
        }
      },
      {
        id: 3,
        title: "3. Números e Quantidades",
        category: "Numerais",
        desc: "Sinais de números cardinais, ordinais e contagem de itens.",
        duration: "18 min",
        status: "concluida",
        content: {
          summary: "Em LIBRAS, os números possuem formatos distintos se representam quantidade ou numerais cardinais.",
          details: "Por exemplo, o número '1' em quantidade utiliza o indicador levantado, enquanto para valor cardinal o formato da mão se altera.",
          signTitle: "Numerais Cardinais de 1 a 4",
          signDesc: "Visualização com a palma virada para o próprio corpo.",
          signSvg: `<svg viewBox="0 0 200 120" class="w-48 h-32 mx-auto">
            <rect x="40" y="15" width="120" height="80" rx="16" class="fill-brand-100 stroke-brand-500" stroke-width="3"/>
            <text x="100" y="65" text-anchor="middle" font-size="28" font-weight="900" fill="#1e3a8a">1 • 2 • 3 • 4</text>
          </svg>`,
          tips: "Atenção ao contexto para diferenciar numerais ordinais (que tremem levemente) de cardinais.",
          exercise: {
            question: "A forma de sinalizar o número altera entre cardinal e quantidade?",
            options: [
              "Não, a forma é rigorosamente idêntica.",
              "Sim, a configuração de mão e orientação variam segundo o contexto.",
              "Números não usam as mãos em LIBRAS."
            ],
            correct: 1
          }
        }
      },
      {
        id: 4,
        title: "4. Cumprimentos e Saudações",
        category: "Social",
        desc: "Aprenda 'Oi', 'Tudo bem?', 'Bom dia', 'Por favor' e 'Obrigado'.",
        duration: "20 min",
        status: "concluida",
        content: {
          summary: "Saudações são a porta de entrada para uma comunicação empática e cortês em LIBRAS.",
          details: "O sinal de 'Obrigado' combina o toque leve na testa e peito movendo as mãos para a frente acompanhado de um sorriso receptivo.",
          signTitle: "Sinal de 'BOM DIA'",
          signDesc: "Toque nos lábios (Bom) seguido da abertura dos braços (Dia/Sol).",
          signSvg: `<svg viewBox="0 0 200 140" class="w-48 h-36 mx-auto">
            <circle cx="100" cy="50" r="30" class="fill-amber-100 stroke-amber-500" stroke-width="3"/>
            <path d="M 60 110 Q 100 80, 140 110" class="fill-none stroke-brand-600" stroke-width="4" stroke-linecap="round"/>
            <text x="100" y="130" text-anchor="middle" font-weight="bold" font-size="12" fill="#1e3a8a">Sinal: BOM DIA</text>
          </svg>`,
          tips: "Sorria durante a saudação. A empatia facial reforça o respeito.",
          exercise: {
            question: "Como é realizada a expressão para perguntar 'Tudo bem?'",
            options: [
              "Fazendo o sinal de 'Bom' com fisionomia neutra.",
              "Fazendo o sinal de 'Bom' + interrogação facial (sobrancelhas levemente erguidas).",
              "Apenas batendo as palmas das mãos."
            ],
            correct: 1
          }
        }
      },
      {
        id: 5,
        title: "5. Expressões Faciais e Gramática",
        category: "Gramática",
        desc: "Aprenda os 5 parâmetros fundamentais e marcadores não-manuais.",
        duration: "25 min",
        status: "em_andamento",
        content: {
          summary: "Os 5 Parâmetros da LIBRAS: Configuração de Mão, Ponto de Articulação, Movimento, Orientação e Expressão Facial.",
          details: "Mudar a expressão facial pode alterar totalmente o significado de um sinal (ex: Triste vs Muito Triste).",
          signTitle: "Marcadores Não-Manuais (Expressão)",
          signDesc: "Elevação das sobrancelhas para perguntas e franzimento para dúvidas.",
          signSvg: `<svg viewBox="0 0 200 150" class="w-48 h-36 mx-auto">
            <circle cx="100" cy="65" r="40" class="fill-brand-50 stroke-brand-600" stroke-width="3"/>
            <path d="M 80 50 Q 90 40, 95 50" stroke="#1e3a8a" stroke-width="3" fill="none"/>
            <path d="M 105 50 Q 110 40, 120 50" stroke="#1e3a8a" stroke-width="3" fill="none"/>
            <circle cx="87" cy="65" r="5" fill="#1e3a8a"/>
            <circle cx="113" cy="65" r="5" fill="#1e3a8a"/>
            <path d="M 85 90 Q 100 105, 115 90" stroke="#2563eb" stroke-width="4" fill="none"/>
          </svg>`,
          tips: "Treine no espelho para soltar os músculos faciais sem timidez.",
          exercise: {
            question: "Qual elemento NÃO é um dos 5 parâmetros gramaticais da LIBRAS?",
            options: [
              "Configuração de Mão.",
              "Tom de voz audível.",
              "Expressão Facial/Corporal."
            ],
            correct: 1
          }
        }
      },
      {
        id: 6,
        title: "6. Família e Pessoas",
        category: "Vocabulário",
        desc: "Sinais para pai, mãe, filho, irmão, amigo e avós.",
        duration: "20 min",
        status: "bloqueada",
        content: null
      },
      {
        id: 7,
        title: "7. Cores e Natureza",
        category: "Vocabulário",
        desc: "Cores primárias, clima, elementos da natureza e ambientes.",
        duration: "18 min",
        status: "bloqueada",
        content: null
      },
      {
        id: 8,
        title: "8. Animais e Objetos",
        category: "Vocabulário",
        desc: "Sinais de animais domésticos, selvagens e objetos cotidianos.",
        duration: "20 min",
        status: "bloqueada",
        content: null
      },
      {
        id: 9,
        title: "9. Frases e Diálogos do Dia a Dia",
        category: "Conversação",
        desc: "Construção prática de diálogos completos com estrutura SOV/OSV.",
        duration: "25 min",
        status: "bloqueada",
        content: null
      },
      {
        id: 10,
        title: "10. Avaliação Final & Certificado",
        category: "Conclusão",
        desc: "Exame geral de conhecimentos e emissão do Certificado Simbólico.",
        duration: "30 min",
        status: "bloqueada",
        content: null
      }
    ];

export const EBOOKS_DATA = [
      {
        id: 1,
        title: "Guia Ilustrado do Alfabeto Dactilológico",
        pages: "24 páginas",
        author: "Profª. Maria Clara Santos",
        desc: "Ilustrações em altíssima resolução de todos os fonemas manuais da Libras.",
        topics: ["História do alfabeto manual", "Ângulos corretos de visualização", "Exercícios de agilidade para os dedos"],
        sampleContent: "Este e-book serve como um mapa visual rápido. A dactilologia é essencial para estabelecer pontes de comunicação imediatas quando novos vocábulos surgem na conversação."
      },
      {
        id: 2,
        title: "Manual de Gramática e Parâmetros da Libras",
        pages: "42 páginas",
        author: "Dr. Roberto Lima",
        desc: "Entenda a estrutura profunda dos 5 parâmetros gramaticais.",
        topics: ["Configuração de mãos detalhada", "Pontos de articulação no corpo", "Verbos direcionais e neutros"],
        sampleContent: "A gramática da LIBRAS diferencia-se do Português por não utilizar artigos ou conectivos da mesma forma verbal. A tridimensionalidade do espaço é o seu grande diferencial."
      },
      {
        id: 3,
        title: "Dicionário Visual de Sinais do Cotidiano",
        pages: "60 páginas",
        author: "Equipe Aprenda Sinais",
        desc: "Mais de 300 sinais essenciais divididos por categorias e temáticas.",
        topics: ["Saúde e emergência", "Alimentação e supermercado", "Transporte e localização urbana"],
        sampleContent: "Guia indispensável de rápida consulta para ter no smartphone durante situações do cotidiano e viagens."
      },
      {
        id: 4,
        title: "Guia Prático de Comunicação no Trabalho",
        pages: "30 páginas",
        author: "Juliana Andrade (Consultora em Inclusão)",
        desc: "Promova ambientes corporativos verdadeiramente inclusivos.",
        topics: ["Atendimento acessível a clientes surdos", "Vocabulário de escritório e reuniões", "Legislação de cotas e acessibilidade"],
        sampleContent: "Como transformar a cultura da sua empresa através do aprendizado prático de LIBRAS e da contratação inclusiva."
      }
    ];
