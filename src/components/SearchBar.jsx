import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Search from '../assets/search.png';

const SearchBar = (props) => {
  const [input, setInput] = useState('');
  const navigate = useNavigate();
  const API_KEY = process.env.REACT_APP_API_KEY;

  const changeHandler = (e) => {
    setInput(e.target.value);
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    await axios
      .get(
        `https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${input}`,
        { params: { api_key: API_KEY } }
      )
      .then((res) => {
        setInput('');
        navigate(`/summoner/${input}`, { state: res.data });
      })
      .catch((err) => {});
  };

  return (
    <form
      onSubmit={submitHandler}
      className={
        'max-w-lg flex justify-center rounded-md bg-white shadow-md ' +
        props.formCss
      }>
      <input
        type='text'
        value={input}
        placeholder='소환사명을 입력해주세요'
        className={
          'w-full font-medium focus:outline-none placeholder:font-normal placeholder:opacity-30 placeholder:text-gray-700 ' +
          props.inputCss
        }
        onChange={changeHandler}
      />
      <button type='submit' className={props.buttonCss}>
        <img src={Search} alt='search' className='max-w-6 max-h-6' />
      </button>
    </form>
  );
};

export default SearchBar;
