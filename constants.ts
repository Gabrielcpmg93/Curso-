
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
    longDescription: 'Bem-vindo ao ponto de partida da sua jornada como técnico de manutenção de celulares. Este módulo inicial foi desenhado para desmistificar o processo de reparo, apresentando os conceitos fundamentais de segurança e a organização de uma bancada de trabalho eficiente. Você entenderá a importância de cada passo, desde a correta identificação dos problemas até a execução dos procedimentos com precisão e segurança, garantindo a integridade dos aparelhos e a sua.',
    icon: ToolsIcon,
    topics: [
      'Kit de Chaves de Precisão: Indispensável para abrir os parafusos específicos de cada marca, como Philips, Pentalobe (iPhone) e Torx.',
      'Espátulas Plásticas e Metálicas: Utilizadas para abrir carcaças e desconectar componentes delicados sem causar arranhões ou danos.',
      'Ventosa de Sucção: Ferramenta chave para remover telas de vidro com segurança, aplicando uma força de tração uniforme.',
      'Estação de Ar Quente (Retrabalho): Essencial para dessoldar e soldar componentes na placa-mãe, como conectores de carga e CIs.',
      'Fonte de Alimentação Assimétrica: Permite ligar a placa-mãe sem a bateria para diagnosticar curtos-circuitos e analisar o consumo de energia.',
      'Multímetro Digital: Ferramenta de diagnóstico fundamental para medir voltagem, corrente e continuidade em circuitos eletrônicos.',
      'Pinças de Precisão (Reta e Curva): Usadas para manipular componentes minúsculos, parafusos e cabos flexíveis com exatidão.',
      'Manta Antiestática (ESD): Protege os componentes eletrônicos sensíveis contra danos por descarga eletrostática durante o manuseio.',
      'Pulseira e Luvas Antiestáticas (ESD): Equipamento de proteção pessoal que aterra o técnico para evitar que a eletricidade estática do corpo danifique o aparelho.',
      'Álcool Isopropílico: O solvente ideal para limpar placas de circuito e componentes eletrônicos, pois evapora rapidamente sem deixar resíduos.',
      'Microscópio USB ou Estereoscópio: Amplia a visão da placa-mãe, permitindo a execução de micro-soldagens e a inspeção de componentes minúsculos.',
      'Cuba Ultrassônica para Desoxidação: Utilizada com produtos químicos específicos para remover a oxidação de placas que tiveram contato com líquidos.',
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