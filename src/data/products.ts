import catGesso from "@/assets/cat-gesso.jpg";
import catFerramentas from "@/assets/cat-ferramentas.jpg";
import catDrywall from "@/assets/cat-drywall.jpg";
import catFerragens from "@/assets/cat-ferragens.jpg";
import catForros from "@/assets/cat-forros.jpg";
import catPlacas from "@/assets/cat-placas.jpg";

export interface Product {
  id: string;
  name: string;
  brand: string;
  price: string;
  image: string;
  category: string;
  description: string;
  specs: string[];
}

export const allProducts: Product[] = [
  // Drywall & Estruturas
  { id: "1", name: "Placa de Gesso Standard 1200x600mm", brand: "Placo", price: "R$ 32,90", image: catDrywall, category: "Drywall & Estruturas", description: "Placa de gesso acartonado standard para paredes e forros internos. Excelente acabamento e fácil instalação.", specs: ["Dimensão: 1200x600mm", "Espessura: 12,5mm", "Borda rebaixada", "Uso interno"] },
  { id: "2", name: "Perfil Montante 48x3000mm", brand: "Multiperfil", price: "R$ 18,90", image: catDrywall, category: "Drywall & Estruturas", description: "Perfil montante galvanizado para estruturação de paredes em drywall. Alta resistência e durabilidade.", specs: ["Dimensão: 48x3000mm", "Aço galvanizado", "Espessura: 0,50mm", "Norma NBR 15217"] },
  { id: "3", name: "Perfil Guia 48x3000mm", brand: "Multiperfil", price: "R$ 16,50", image: catDrywall, category: "Drywall & Estruturas", description: "Perfil guia galvanizado para fixação no piso e teto, utilizado como base dos montantes.", specs: ["Dimensão: 48x3000mm", "Aço galvanizado", "Espessura: 0,50mm", "Fixação piso/teto"] },
  { id: "4", name: "Placa de Gesso Resistente à Umidade", brand: "Knauf", price: "R$ 52,90", image: catDrywall, category: "Drywall & Estruturas", description: "Placa verde resistente à umidade, ideal para banheiros, cozinhas e áreas úmidas.", specs: ["Dimensão: 1200x2400mm", "Espessura: 12,5mm", "Resistente à umidade", "Cor verde"] },
  { id: "5", name: "Placa de Gesso Resistente ao Fogo", brand: "Placo", price: "R$ 58,90", image: catDrywall, category: "Drywall & Estruturas", description: "Placa rosa com resistência ao fogo, indicada para áreas que exigem proteção passiva contra incêndio.", specs: ["Dimensão: 1200x2400mm", "Espessura: 15mm", "Resistência ao fogo 2h", "Cor rosa"] },

  // Forros & Divisórias
  { id: "6", name: "Forro PVC Branco 200x8mm", brand: "Gypsum", price: "R$ 12,90", image: catForros, category: "Forros & Divisórias", description: "Forro em PVC branco liso, fácil instalação e manutenção. Ideal para ambientes comerciais e residenciais.", specs: ["Dimensão: 200x8mm", "Comprimento: 6m", "Material: PVC rígido", "Cor: Branco"] },
  { id: "7", name: "Divisória Naval 35mm", brand: "Placo", price: "R$ 67,90", image: catForros, category: "Forros & Divisórias", description: "Divisória naval para ambientes que necessitam de isolamento acústico e térmico.", specs: ["Espessura: 35mm", "Acabamento liso", "Isolamento acústico", "Uso comercial"] },
  { id: "8", name: "Forro Mineral Armstrong 625x625mm", brand: "Knauf", price: "R$ 24,90", image: catForros, category: "Forros & Divisórias", description: "Forro mineral modular para escritórios e ambientes comerciais. Excelente absorção acústica.", specs: ["Dimensão: 625x625mm", "Espessura: 15mm", "NRC: 0.55", "Borda reta"] },
  { id: "9", name: "Perfil para Forro T24", brand: "Multiperfil", price: "R$ 8,90", image: catForros, category: "Forros & Divisórias", description: "Perfil T principal para sustentação de forros modulares minerais e de PVC.", specs: ["Comprimento: 3,75m", "Aço galvanizado", "Sistema T24", "Carga: 10kg/m²"] },

  // Gesso & Massas
  { id: "10", name: "Saco de Gesso Revestimento 40kg", brand: "Gypsum", price: "R$ 28,50", image: catGesso, category: "Gesso & Massas", description: "Gesso em pó para revestimento de paredes e tetos. Secagem rápida e ótimo acabamento.", specs: ["Peso: 40kg", "Tempo de pega: 25min", "Rendimento: 1m²/kg", "Uso interno"] },
  { id: "11", name: "Massa para Juntas 28kg", brand: "Gypsum", price: "R$ 42,00", image: catGesso, category: "Gesso & Massas", description: "Massa pronta para tratamento de juntas em drywall. Fácil aplicação e lixamento.", specs: ["Peso: 28kg", "Pronta para uso", "Secagem: 24h", "Acabamento liso"] },
  { id: "12", name: "Gesso Cola 1kg", brand: "Knauf", price: "R$ 9,90", image: catGesso, category: "Gesso & Massas", description: "Gesso cola para fixação de placas de gesso e reparos. Alta aderência.", specs: ["Peso: 1kg", "Secagem rápida", "Alta aderência", "Uso interno"] },
  { id: "13", name: "Massa Corrida PVA 25kg", brand: "Gypsum", price: "R$ 35,00", image: catGesso, category: "Gesso & Massas", description: "Massa corrida PVA para nivelamento e acabamento de superfícies internas.", specs: ["Peso: 25kg", "Base PVA", "Lixamento fácil", "Rendimento: 2,5m²/kg"] },

  // Ferramentas Profissionais
  { id: "14", name: "Kit Ferramentas Drywall Profissional", brand: "Multiperfil", price: "R$ 189,90", image: catFerramentas, category: "Ferramentas Profissionais", description: "Kit completo com as principais ferramentas para instalação de drywall. Inclui espátulas, serrote e esquadro.", specs: ["12 peças", "Aço inoxidável", "Maleta inclusa", "Uso profissional"] },
  { id: "15", name: "Furadeira a Bateria 20V", brand: "Placo", price: "R$ 349,00", image: catFerramentas, category: "Ferramentas Profissionais", description: "Furadeira/parafusadeira a bateria 20V com 2 velocidades. Ideal para fixação de placas.", specs: ["Voltagem: 20V", "2 baterias", "Torque: 45Nm", "Maleta + bits"] },
  { id: "16", name: "Espátula Inox 25cm", brand: "Ancora", price: "R$ 34,50", image: catFerramentas, category: "Ferramentas Profissionais", description: "Espátula profissional em aço inoxidável para aplicação de massa e acabamento.", specs: ["Largura: 25cm", "Aço inoxidável", "Cabo ergonômico", "Flexível"] },
  { id: "17", name: "Serrote para Gesso 30cm", brand: "Ancora", price: "R$ 29,90", image: catFerramentas, category: "Ferramentas Profissionais", description: "Serrote especial para corte de placas de gesso acartonado com dentes finos.", specs: ["Comprimento: 30cm", "Dentes finos", "Cabo emborrachado", "Corte preciso"] },
  { id: "18", name: "Nível a Laser 15m", brand: "Multiperfil", price: "R$ 259,00", image: catFerramentas, category: "Ferramentas Profissionais", description: "Nível a laser com alcance de 15 metros, ideal para nivelamento de estruturas e forros.", specs: ["Alcance: 15m", "Auto-nivelante", "2 linhas", "Bateria inclusa"] },

  // Placas Cimentícias
  { id: "19", name: "Placa Cimentícia 1200x2400mm", brand: "Eternit", price: "R$ 89,90", image: catPlacas, category: "Placas Cimentícias", description: "Placa cimentícia para fachadas e áreas externas. Alta durabilidade e resistência à umidade.", specs: ["Dimensão: 1200x2400mm", "Espessura: 8mm", "Uso externo", "Resistente à umidade"] },
  { id: "20", name: "Placa Cimentícia 6mm", brand: "Eternit", price: "R$ 72,90", image: catPlacas, category: "Placas Cimentícias", description: "Placa cimentícia fina para áreas internas e externas cobertas.", specs: ["Dimensão: 1200x2400mm", "Espessura: 6mm", "Interna/externa", "Leve"] },
  { id: "21", name: "Placa Cimentícia Wood 8mm", brand: "Eternit", price: "R$ 119,00", image: catPlacas, category: "Placas Cimentícias", description: "Placa cimentícia com textura amadeirada para fachadas decorativas.", specs: ["Dimensão: 1200x2400mm", "Espessura: 8mm", "Textura madeira", "Uso externo"] },

  // Ferragens & Fixação
  { id: "22", name: "Parafuso Cabeça Trombeta 1000un", brand: "Ancora", price: "R$ 45,00", image: catFerragens, category: "Ferragens & Fixação", description: "Parafusos cabeça trombeta para fixação de placas de gesso em perfis metálicos.", specs: ["Quantidade: 1000un", "Ponta broca", "Cabeça trombeta", "25mm"] },
  { id: "23", name: "Fita para Drywall 50m", brand: "Knauf", price: "R$ 15,90", image: catFerragens, category: "Ferragens & Fixação", description: "Fita de papel microperfurado para tratamento de juntas em drywall.", specs: ["Comprimento: 50m", "Largura: 50mm", "Papel microperfurado", "Alta aderência"] },
  { id: "24", name: "Bucha para Drywall Toggler 50un", brand: "Ancora", price: "R$ 38,90", image: catFerragens, category: "Ferragens & Fixação", description: "Bucha basculante para fixação de objetos pesados em paredes de drywall.", specs: ["Quantidade: 50un", "Carga: até 20kg", "Aço zincado", "Com parafuso"] },
  { id: "25", name: "Cantoneira Perfurada 3000mm", brand: "Multiperfil", price: "R$ 7,50", image: catFerragens, category: "Ferragens & Fixação", description: "Cantoneira metálica perfurada para acabamento de quinas em drywall.", specs: ["Comprimento: 3000mm", "Aço galvanizado", "Perfurada", "Fácil fixação"] },
  { id: "26", name: "Fita Telada Adesiva 50m", brand: "Knauf", price: "R$ 22,90", image: catFerragens, category: "Ferragens & Fixação", description: "Fita telada autoadesiva em fibra de vidro para reforço de juntas.", specs: ["Comprimento: 50m", "Largura: 50mm", "Fibra de vidro", "Autoadesiva"] },
];

export const categories = [
  "Drywall & Estruturas",
  "Forros & Divisórias",
  "Gesso & Massas",
  "Ferramentas Profissionais",
  "Placas Cimentícias",
  "Ferragens & Fixação",
];
