import React, { useEffect } from 'react';
import MainContainer from '../components/main-container/main-container.component';
import sendRequest from '../API/StacksAPI.ts';
export default function HomePage() {
  useEffect(() => {
    sendRequest().then(Resp => {
      console.log(Resp.data.stacks);
    });
  }, []);

  return (
    <div>
      <MainContainer />
    </div>
  );
}
