'use client';

interface SimpleTestProps {
  text?: string;
}

const SimpleTestComponent = ({ text = 'Test Component' }: SimpleTestProps) => {
  return (
    <div style={{ padding: '40px', background: 'linear-gradient(to right, #8cc63f, #6fa832)', color: 'white', textAlign: 'center' }}>
      <h1 style={{ fontSize: '32px', marginBottom: '16px' }}>Simple Test</h1>
      <p style={{ fontSize: '18px' }}>{text}</p>
    </div>
  );
};

export default SimpleTestComponent;
