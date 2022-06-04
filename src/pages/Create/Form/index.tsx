/* eslint-disable no-alert */
import { useState } from 'react';
import styles from './form.module.scss';

interface Prop {
  updateMainCat: (value: string) => void;
}

function Form({ updateMainCat }: Prop) {
  const includesHangul = (text: string) => /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/i.test(text);
  const [value, setValue] = useState('');

  function handleInputChange(e: { target: { value: string } }) {
    const userValue = e.target.value;
    if (includesHangul(userValue)) alert('한글은 입력할 수 없습니다.');
    setValue(userValue.toUpperCase());
  }

  function handleFormSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    if (value === '') {
      alert('문구를 입력하세요');
    }
    updateMainCat(value);
  }

  return (
    <form className={styles.form} onSubmit={handleFormSubmit}>
      <input
        type="text"
        name="name"
        placeholder="이곳에 영어 문구를 넣은 후 엔터를 눌러주세요"
        onChange={handleInputChange}
      />
    </form>
  );
}

export default Form;
