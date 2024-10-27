import React from 'react';
import { View, Text, ScrollView } from 'react-native';

const TermsOfUse = () => {
  return (
    <ScrollView className="flex-1 p-4 bg-gray-100">
      <Text className="text-2xl font-bold text-center mb-4">Termos de Uso</Text>

      <Text className="text-lg font-semibold mb-2">Última atualização: [Data]</Text>

      <Text className="mb-4">
        Estes Termos de Uso regem o uso do nosso aplicativo. Ao usar nosso aplicativo, você concorda em cumprir estes termos. Se você não concorda com estes termos, não use nosso aplicativo.
      </Text>

      <Text className="text-lg font-semibold mb-2">1. Aceitação dos Termos</Text>
      <Text className="mb-4">
        Ao acessar e usar nosso aplicativo, você concorda em se comprometer com estes Termos de Uso e nossa Política de Privacidade.
      </Text>

      <Text className="text-lg font-semibold mb-2">2. Alterações nos Termos</Text>
      <Text className="mb-4">
        Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento. As alterações entrarão em vigor assim que publicadas no aplicativo. É sua responsabilidade revisar periodicamente os Termos de Uso para estar ciente de quaisquer alterações.
      </Text>

      <Text className="text-lg font-semibold mb-2">3. Uso do Aplicativo</Text>
      <Text className="mb-4">
        Você concorda em usar o aplicativo apenas para fins legais e de acordo com as leis aplicáveis. Você não deve:
      </Text>
      <Text className="ml-4 mb-2">- Usar o aplicativo de maneira que cause ou possa causar interrupção ao aplicativo;</Text>
      <Text className="ml-4 mb-2">- Tentar obter acesso não autorizado ao aplicativo;</Text>
      <Text className="ml-4 mb-2">- Usar o aplicativo para fins fraudulentos ou enganosos;</Text>
      <Text className="ml-4 mb-2">- Acessar, modificar ou usar áreas não autorizadas do aplicativo.</Text>

      <Text className="text-lg font-semibold mb-2">4. Propriedade Intelectual</Text>
      <Text className="mb-4">
        Todos os direitos de propriedade intelectual relacionados ao aplicativo e seu conteúdo são de nossa propriedade ou de nossos licenciadores. Você não pode copiar, modificar, distribuir ou exibir qualquer parte do aplicativo sem nossa permissão por escrito.
      </Text>

      <Text className="text-lg font-semibold mb-2">5. Limitação de Responsabilidade</Text>
      <Text className="mb-4">
        Na máxima extensão permitida pela lei aplicável, não seremos responsáveis por qualquer dano direto, indireto, incidental, especial ou consequencial resultante do uso ou incapacidade de uso do aplicativo.
      </Text>

      <Text className="text-lg font-semibold mb-2">6. Indenização</Text>
      <Text className="mb-4">
        Você concorda em indenizar e isentar de responsabilidade nossa empresa e seus afiliados, diretores, funcionários e agentes de quaisquer reivindicações, danos, responsabilidades, custos ou despesas decorrentes de sua violação destes Termos de Uso ou do uso do aplicativo.
      </Text>

      <Text className="text-lg font-semibold mb-2">7. Lei Aplicável</Text>
      <Text className="mb-4">
        Estes Termos de Uso serão regidos e interpretados de acordo com as leis do [Seu País/Estado]. Qualquer disputa que surja em conexão com estes Termos de Uso será submetida à jurisdição exclusiva dos tribunais competentes do [Seu País/Estado].
      </Text>

      <Text className="text-lg font-semibold mb-2">8. Contato</Text>
      <Text className="mb-4">
        Se você tiver dúvidas sobre estes Termos de Uso, entre em contato conosco pelo e-mail: [seu-email@dominio.com].
      </Text>

      <Text className="text-lg font-semibold mb-2">9. Aceitação dos Termos</Text>
      <Text className="mb-4">
        Ao usar nosso aplicativo, você reconhece que leu e entendeu estes Termos de Uso e concorda em cumpri-los.
      </Text>
    </ScrollView>
  );
};

export default TermsOfUse;