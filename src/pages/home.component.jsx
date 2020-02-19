import React, { useEffect } from 'react';
import MainContainer from '../components/main-container/main-container.component';
<<<<<<< Updated upstream
import sendRequest from '../API/StacksAPI.ts';
=======
import { SendRequest } from '../API/StacksAPI.ts';
>>>>>>> Stashed changes
export default function HomePage() {
  useEffect(() => {
<<<<<<< Updated upstream
    sendRequest().then();
=======
    SendRequest().then(Resp => {
      setSubjects(Resp.data.stacks);
      console.log(Resp.data.stacks);
    });
>>>>>>> Stashed changes
  }, []);
  return (
    <div>
      <MainContainer />
    </div>
  );
}
