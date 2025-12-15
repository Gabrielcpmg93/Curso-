
import { 
  ToolsIcon, 
  ScreenIcon, 
  BatteryIcon, 
  MotherboardIcon, 
  SolderingIcon, 
  SoftwareIcon,
  IosIcon,
  AndroidIcon,
  ConnectorIcon
} from './components/IconComponents';
import type { Course } from './types';

export const courses: Course[] = [
  {
    id: 'intro',
    title: 'Introdução e Ferramentas',
    description: 'Comece sua jornada com o pé direito. Conheça as ferramentas essenciais e os conceitos básicos de segurança.',
    longDescription: 'Este módulo fundamental é o ponto de partida para qualquer técnico. Você aprenderá a identificar e utilizar cada ferramenta, desde chaves de precisão a estações de ar quente, além de práticas de segurança ESD (Descarga Eletrostática) para proteger os componentes sensíveis.',
    icon: ToolsIcon,
    topics: [
      'Kit de ferramentas essenciais',
      'Manuseio seguro de componentes',
      'Prevenção contra Descarga Eletrostática (ESD)',
      'Organização da bancada de trabalho',
      'Primeiros passos na desmontagem',
    ],
  },
  {
    id: 'screen',
    title: 'Reparo de Telas e Displays',
    description: 'Aprenda a trocar telas quebradas de diversos modelos, dos mais simples aos mais complexos.',
    longDescription: 'Um dos reparos mais comuns e lucrativos. Este curso cobre a troca de telas de LCD, OLED e AMOLED. Você aprenderá técnicas para separar o vidro do display, aplicar cola UV e garantir um acabamento perfeito sem bolhas ou manchas.',
    icon: ScreenIcon,
    topics: [
      'Diferença entre LCD, OLED e AMOLED',
      'Técnicas de desmontagem sem danificar o chassi',
      'Remoção de telas coladas',
      'Aplicação de cola UV e B-7000',
      'Testes de display e touch',
    ],
  },
  {
    id: 'battery',
    title: 'Troca e Diagnóstico de Bateria',
    description: 'Domine a arte de substituir baterias e diagnosticar problemas de carregamento e autonomia.',
    longDescription: 'Baterias são componentes com vida útil limitada. Aprenda a identificar baterias viciadas, estufadas ou com falhas, realizar a troca de forma segura e calibrar a nova bateria para garantir a máxima performance e durabilidade para o cliente.',
    icon: BatteryIcon,
    topics: [
      'Identificação de baterias com defeito',
      'Procedimento seguro de remoção',
      'Cuidados com baterias de lítio',
      'Calibração do sistema após a troca',
      'Análise de consumo de energia',
    ],
  },
  {
    id: 'motherboard',
    title: 'Diagnóstico de Placa-mãe',
    description: 'Aprenda a ler esquemas elétricos e a diagnosticar defeitos complexos na placa-mãe.',
    longDescription: 'Entre no nível avançado da manutenção. Este módulo ensina a interpretar esquemas elétricos, utilizar o multímetro para medir tensões e resistências, e identificar componentes defeituosos na placa-mãe, a central de comando do celular.',
    icon: MotherboardIcon,
    topics: [
      'Leitura de esquemas elétricos',
      'Uso avançado do multímetro',
      'Diagnóstico de curtos-circuitos',
      'Análise de circuitos de carga e imagem',
      'Identificação de componentes (capacitores, resistores, ICs)',
    ],
  },
  {
    id: 'connectors',
    title: 'Reparo de Conectores',
    description: 'Especialize-se na troca de conectores de carga, fone de ouvido e outros componentes.',
    longDescription: 'Conectores de carga são um ponto comum de falha devido ao uso constante. Este curso ensina as técnicas precisas de soldagem para substituir conectores USB-C, Lightning e Micro-USB sem danificar a placa-mãe ou componentes próximos.',
    icon: ConnectorIcon,
    topics: [
        'Técnicas de dessoldagem',
        'Limpeza e preparação da placa',
        'Soldagem de conectores USB-C e Lightning',
        'Reparo de trilhas rompidas',
        'Testes de funcionalidade pós-reparo',
    ]
  },
  {
    id: 'microsoldering',
    title: 'Micro-soldagem Avançada',
    description: 'Leve suas habilidades ao próximo nível com técnicas de micro-soldagem para reparos em nível de componente.',
    longDescription: 'Para os defeitos mais complexos, a micro-soldagem é essencial. Aprenda a manusear o microscópio, a estação de ar quente e o ferro de solda de precisão para trocar CIs (Circuitos Integrados), realizar reballing e reconstruir trilhas danificadas na placa.',
    icon: SolderingIcon,
    topics: [
      'Uso de microscópio para reparos',
      'Técnicas de reballing de CIs',
      'Troca de componentes SMD',
      'Reconstrução de pads e trilhas',
      'Uso de malha dessoldadora e fluxo de solda',
    ],
  },
  {
    id: 'software',
    title: 'Software e Desbloqueio',
    description: 'Resolva problemas de software, remova contas Google e realize atualizações e downgrades de sistema.',
    longDescription: 'Nem todo problema é de hardware. Este módulo foca em resolver falhas de software, como loops de inicialização, remoção de conta Google (FRP), instalação de ROMs customizadas e procedimentos de flash para recuperar aparelhos travados.',
    icon: SoftwareIcon,
    topics: [
      'Instalação de ROMs (Stock e Custom)',
      'Remoção de Conta Google (FRP)',
      'Procedimentos de Hard Reset',
      'Uso de ferramentas como Odin e ADB',
      'Backup e restauração de dados',
    ],
  },
  {
    id: 'ios',
    title: 'Especialista em iPhones',
    description: 'Mergulhe no ecossistema Apple. Reparos e particularidades dos iPhones, do 7 ao mais recente.',
    longDescription: 'O iPhone tem uma arquitetura única que exige conhecimento especializado. Este curso detalha os procedimentos de reparo específicos para cada modelo, desde a troca de tela com True Tone até o diagnóstico de falhas comuns como o "erro de áudio" e problemas na baseband.',
    icon: IosIcon,
    topics: [
        'Arquitetura e desmontagem de iPhones',
        'Reparo de Face ID e Touch ID',
        'Preservação da função True Tone',
        'Diagnóstico com 3uTools',
        'Falhas comuns por modelo',
    ]
  },
  {
    id: 'android',
    title: 'Especialista em Androids',
    description: 'Domine a vasta gama de aparelhos Android, incluindo Samsung, Motorola, Xiaomi e outros.',
    longDescription: 'O universo Android é diverso. Aprenda as particularidades de cada grande fabricante, como as telas AMOLED da Samsung, a arquitetura da Motorola e os desafios dos aparelhos Xiaomi. Este curso prepara você para lidar com a enorme variedade do mercado.',
    icon: AndroidIcon,
    topics: [
        'Diferenças entre fabricantes',
        'Reparo de telas com borda curva (Edge)',
        'Desbloqueio de bootloader',
        'Particularidades de software (MIUI, One UI)',
        'Fontes de peças para diversas marcas',
    ]
  },
];
