import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 4rem 2rem;
  max-width: 700px;
  margin: 0 auto;
  min-height: 80vh;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.darkText};
  text-align: center;
  margin-bottom: 2rem;

  span { color: ${({ theme }) => theme.colors.primaryGreen}; }
`;

const Form = styled.form`
  background: white;
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.05);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-weight: 600;
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.darkText};
`;

const Input = styled.input`
  padding: 0.8rem 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
  transition: border 0.3s;
  &:focus { border-color: ${({ theme }) => theme.colors.primaryGreen}; }
`;

const TextArea = styled.textarea`
  padding: 0.8rem 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
  resize: vertical;
  min-height: 120px;
  transition: border 0.3s;
  &:focus { border-color: ${({ theme }) => theme.colors.primaryGreen}; }
`;

const FileInput = styled.input`
  padding: 0.5rem;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  outline: none;
  background: #f8fafc;
`;

const Button = styled.button`
  background: ${({ theme }) => theme.colors.primaryGreen};
  color: white;
  padding: 1rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s;
  &:hover { transform: translateY(-3px); box-shadow: 0 10px 20px rgba(0,168,107,0.2); }
  &:disabled { opacity: 0.6; transform: none; }
`;

const StatusMsg = styled.div<{ $success: boolean }>`
  text-align: center;
  padding: 1rem;
  border-radius: 8px;
  background: ${({ $success }) => $success ? '#E6F4EA' : '#FEE2E2'};
  color: ${({ $success }) => $success ? '#00A86B' : '#DC2626'};
`;

const AddBlog = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | { type: 'success' | 'error', msg: string }>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('desc', desc);
      if (image) {
        formData.append('image', image);
      }

      const res = await fetch('http://localhost:5000/api/blogs', {
        method: 'POST',
        body: formData
      });

      const data = await res.json();
      if (res.ok) {
        setStatus({ type: 'success', msg: '🎉 Blog with image published successfully!' });
        setTitle(''); setDesc(''); setImage(null);
      } else {
        setStatus({ type: 'error', msg: data.message || 'Failed to publish.' });
      }
    } catch {
      setStatus({ type: 'error', msg: 'Network error. Make sure Backend is running.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Title>Write a <span>New Blog</span></Title>
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <Label>Blog Title</Label>
          <Input required value={title} onChange={e => setTitle(e.target.value)} placeholder="Enter blog title..." />
        </InputGroup>

        <InputGroup>
          <Label>Upload Blog Image</Label>
          <FileInput type="file" accept="image/*" onChange={handleImageChange} />
          {image && <span style={{fontSize: '0.9rem', color: '#00A86B'}}>✅ {image.name} selected</span>}
        </InputGroup>

        <InputGroup>
          <Label>Description</Label>
          <TextArea required value={desc} onChange={e => setDesc(e.target.value)} placeholder="Write your blog content here..." />
        </InputGroup>

        <Button type="submit" disabled={loading}>
          {loading ? 'Publishing...' : 'Publish Blog'}
        </Button>

        {status && <StatusMsg $success={status.type === 'success'}>{status.msg}</StatusMsg>}
      </Form>
    </Container>
  );
};

export default AddBlog;
