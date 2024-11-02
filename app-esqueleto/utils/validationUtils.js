// Função para validar formato de email
export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  // Função para checar força da senha
  export const checkPasswordStrength = (password) => {
    if (password.length >= 8 && /[A-Z]/.test(password) && /\d/.test(password) && /[@$!%*?&#]/.test(password)) {
      return 'Forte';
    }
    return 'Fraca';
  };
  