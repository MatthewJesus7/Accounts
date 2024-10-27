import React from 'react';
import { View, Text, ScrollView } from 'react-native';

const PrivacyPolicy = () => {
  return (
    <ScrollView className="flex-1 p-4 bg-gray-100">
      <Text className="text-2xl font-bold text-center mb-4">Política de Privacidade</Text>

      <Text className="text-lg font-semibold mb-2">Última atualização: 26/10/2024</Text>

      <Text className="mb-4">
        Esta Política de Privacidade descreve como coletamos, usamos, divulgamos e protegemos suas informações pessoais quando você utiliza nosso aplicativo. 
        Ao usar o aplicativo, você concorda com a coleta e uso de informações de acordo com esta política.
      </Text>

      <Text className="text-lg font-semibold mb-2">1. Informações que coletamos</Text>
      <Text className="mb-4">
        Podemos coletar e processar as seguintes informações sobre você:
      </Text>
      <Text className="ml-4 mb-2">- Informações pessoais: nome, e-mail, telefone, etc.</Text>
      <Text className="ml-4 mb-2">- Dados de uso: informações sobre como você usa nosso aplicativo.</Text>
      <Text className="ml-4 mb-2">- Dados técnicos: endereço IP, tipo de navegador, fusos horários, etc.</Text>

      <Text className="text-lg font-semibold mb-2">2. Como usamos suas informações</Text>
      <Text className="mb-4">
        Utilizamos suas informações para os seguintes propósitos:
      </Text>
      <Text className="ml-4 mb-2">- Para fornecer e manter nosso aplicativo;</Text>
      <Text className="ml-4 mb-2">- Para notificá-lo sobre alterações em nosso aplicativo;</Text>
      <Text className="ml-4 mb-2">- Para permitir que você participe de recursos interativos quando optar por fazê-lo;</Text>
      <Text className="ml-4 mb-2">- Para fornecer suporte ao cliente;</Text>
      <Text className="ml-4 mb-2">- Para reunir análises ou informações valiosas para melhorar nosso aplicativo;</Text>
      <Text className="ml-4 mb-2">- Para monitorar o uso de nosso aplicativo;</Text>
      <Text className="ml-4 mb-2">- Para detectar, prevenir e resolver problemas técnicos.</Text>

      <Text className="text-lg font-semibold mb-2">3. Compartilhamento de informações</Text>
      <Text className="mb-4">
        Não compartilhamos suas informações pessoais com terceiros, exceto nas seguintes circunstâncias:
      </Text>
      <Text className="ml-4 mb-2">- Com prestadores de serviços que nos ajudam a operar nosso aplicativo;</Text>
      <Text className="ml-4 mb-2">- Para cumprir a lei ou responder a solicitações legais;</Text>
      <Text className="ml-4 mb-2">- Para proteger nossos direitos ou a segurança de outros.</Text>

      <Text className="text-lg font-semibold mb-2">4. Segurança das informações</Text>
      <Text className="mb-4">
        Implementamos medidas de segurança razoáveis para proteger suas informações pessoais. No entanto, lembre-se de que nenhuma transmissão de dados pela Internet é 100% segura.
      </Text>

      <Text className="text-lg font-semibold mb-2">5. Seus direitos</Text>
      <Text className="mb-4">
        Você tem o direito de:
      </Text>
      <Text className="ml-4 mb-2">- Acessar suas informações pessoais;</Text>
      <Text className="ml-4 mb-2">- Solicitar a correção de informações imprecisas;</Text>
      <Text className="ml-4 mb-2">- Solicitar a exclusão de suas informações pessoais;</Text>
      <Text className="ml-4 mb-2">- Retirar seu consentimento para o processamento de seus dados.</Text>

      <Text className="text-lg font-semibold mb-2">6. Alterações nesta Política de Privacidade</Text>
      <Text className="mb-4">
        Podemos atualizar nossa Política de Privacidade periodicamente. Notificaremos você sobre quaisquer mudanças publicando a nova Política de Privacidade neste aplicativo.
      </Text>

      <Text className="text-lg font-semibold mb-2">7. Contato</Text>
      <Text className="mb-4">
        Se você tiver dúvidas sobre esta Política de Privacidade, entre em contato conosco pelo e-mail: dmlmycommerce@gmail.com .
      </Text>

      <Text className="text-lg font-semibold mb-2">8. Aceitação</Text>
      <Text className="mb-4">
        Ao usar nosso aplicativo, você reconhece que leu esta Política de Privacidade e concorda com seus termos.
      </Text>
    </ScrollView>
  );
};

export default PrivacyPolicy;