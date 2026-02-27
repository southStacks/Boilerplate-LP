import { useState } from 'react';

export const useForm = (phoneNumber) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formData.name || !formData.phone) {
      alert("Por favor, preencha pelo menos o seu nome e WhatsApp.");
      setIsSubmitting(false);
      return;
    }

    const text = `🚀 *Novo Lead da Landing Page!*%0A%0A*Nome:* ${formData.name}%0A*Email:* ${formData.email}%0A*WhatsApp:* ${formData.phone}%0A%0A*Mensagem:* ${formData.message || 'Gostaria de mais informações.'}`;
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${text}`;

    window.open(whatsappUrl, '_blank');

    setIsSubmitting(false);
  };

  return { formData, handleChange, handleSubmit, isSubmitting };
};