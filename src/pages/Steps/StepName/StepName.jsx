import React, { useState } from 'react';
import Card from '../../../components/shared/Card/Card';
import Button from '../../../components/shared/Button/Button';
import TextInput from '../../../components/shared/TextInput/TextInput';
import { useDispatch, useSelector } from 'react-redux';
import { setName } from '../../../store/activateSlice';
import styles from './StepName.module.css';

// Taking input of name and setting it to global state that's it. No server requests.

const StepName = ({ onNext }) => {
  
  const { name } = useSelector((state) => state.activate);
  const dispatch = useDispatch();

  //Here we are passing name from global state because in case component is re-rendered then it will be able to show the name you have entered last time.
  const [fullname, setFullname] = useState(name);

  function nextStep() {
      if (!fullname) {
          return;
      }
      dispatch(setName(fullname));
      onNext();
  }
  
  return (
      <>
          <Card title="What’s your full name?" icon="/images/goggleEmoji.png">
              <TextInput
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
              />
              <p className={styles.paragraph}>
                  People use real names at codershouse :) !
              </p>
              <div>
                  <Button onClick={nextStep} text="Next" />
              </div>
          </Card>
      </>
  );
};

export default StepName;