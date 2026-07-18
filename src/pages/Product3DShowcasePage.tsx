import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Product3DShowcasePage() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/studio', { replace: true });
  }, [navigate]);

  return null;
}
