import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 5rem 4rem;
  max-width: 800px;
  margin: 0 auto;
  min-height: 70vh;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 3rem 2rem;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.darkText};
  text-align: center;
  margin-bottom: 0.5rem;
`;

const SubTitle = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.grayText};
  margin-bottom: 3rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background: ${({ theme }) => theme.colors.white};
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.darkText};
  font-size: 0.95rem;
`;

const Input = styled.input`
  padding: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primaryGreen};
  }
`;

const Select = styled.select`
  padding: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.3s;
  background: white;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primaryGreen};
  }
`;

const TextArea = styled.textarea`
  padding: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  font-size: 1rem;
  outline: none;
  resize: vertical;
  min-height: 120px;
  transition: border-color 0.3s;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primaryGreen};
  }
`;

const SubmitButton = styled.button`
  background: ${({ theme }) => theme.colors.primaryGreen};
  color: white;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  transition: all 0.3s ease;
  margin-top: 0.5rem;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 168, 107, 0.3);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const StatusMessage = styled.div<{ $success: boolean }>`
  text-align: center;
  padding: 1rem;
  border-radius: 10px;
  margin-top: 1rem;
  background: ${({ $success }) => $success ? '#E6F4EA' : '#FEE2E2'};
  color: ${({ $success }) => $success ? '#00A86B' : '#DC2626'};
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus(null);

    try {
      // 🟢 আপনার Google Apps Script ওয়েব অ্যাপ লিংক এখানে বসান
      const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzFLmwqU_G4QCWlfxLy1CP3_uAyql5iuPu_8pL1Vnyo-OHQpfdwyfEiB4h5CWSNrveD/exec';

            await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });


      setStatus({ type: 'success', message: 'Thank you! Your message has been sent successfully.' });
      setFormData({ name: '', email: '', service: '', message: '' });
    } catch (error) {
      setStatus({ type: 'error', message: 'Network error. Please check your connection.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <Title>Contact Us</Title>
      <SubTitle>Let's discuss your next big idea.</SubTitle>

      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <Label htmlFor="name">Your Name *</Label>
          <Input 
            type="text" 
            id="name" 
            name="name" 
            placeholder="John Doe" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
        </InputGroup>

        <InputGroup>
          <Label htmlFor="email">Your Gmail *</Label>
          <Input 
            type="email" 
            id="email" 
            name="email" 
            placeholder="yourname@gmail.com" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </InputGroup>

        <InputGroup>
          <Label htmlFor="service">Which service do you need? *</Label>
          <Select 
            id="service" 
            name="service" 
            value={formData.service} 
            onChange={handleChange} 
            required
          >
            <option value="">Select a service...</option>
            <option value="Software Development">Software Development</option>
            <option value="Mobile App Development">Mobile App Development</option>
            <option value="Website Development">Website Development</option>
            <option value="UI/UX Design">UI/UX Design</option>
            <option value="E-commerce Solutions">E-commerce Solutions</option>
            <option value="Maintenance & Support">Maintenance & Support</option>
            <option value="Other">Other</option>
          </Select>
        </InputGroup>

        <InputGroup>
          <Label htmlFor="message">How can we help you? *</Label>
          <TextArea 
            id="message" 
            name="message" 
            placeholder="Tell us about your project requirements..." 
            value={formData.message} 
            onChange={handleChange} 
            required 
          />
        </InputGroup>

        <SubmitButton type="submit" disabled={isLoading}>
          {isLoading ? 'Sending...' : 'Send Message'}
        </SubmitButton>

        {status && <StatusMessage $success={status.type === 'success'}>{status.message}</StatusMessage>}
      </Form>
    </Container>
  );
};

export default Contact;

