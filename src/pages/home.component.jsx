import React, { useState, useEffect } from 'react';
import MainContainer from '../components/main-container/main-container.component';
import { getSubjects } from '../api';
export default function HomePage() {
  const [subjects, setSubjects] = useState({});
  useEffect(() => {
    getSubjects();
  }, []);
  return (
    <div>
      <MainContainer />
    </div>
  );
}
