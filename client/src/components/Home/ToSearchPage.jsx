import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLesson } from '../../Redux/actions';
import Select from 'react-select';
import style from './Home.module.css';
import { useNavigate } from 'react-router';

function ToSearchPage() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLesson());
  }, [dispatch]);

  const materias = useSelector((state) => state.lesson);
  const options = materias.map((aux) => ({ value: aux.id, label: aux.lesson_name }));
  const sortOptions = options.sort((a, b) => a.label.localeCompare(b.label));

  const inputRef = useRef();

  const handleInputFocus = () => {
    setIsMenuOpen(false);
  };

  const handleInputChange = (newValue) => {
    setInputValue(newValue);
    setIsMenuOpen(newValue ? true : false);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();

      if (inputValue === '') {
        navigate(`/busqueda/todo`);
      } else if (selectedOption) {
        navigate(`/busqueda/${selectedOption.label}`);
      } else {
        const inputValueLowerCase = inputValue.toLowerCase();
        const matchedOption = options.find((option) =>
          option.label.toLowerCase().includes(inputValueLowerCase)
        );
        if (matchedOption) {
          navigate(`/busqueda/${matchedOption.label}`);
        } else {
          navigate(`/busqueda/${inputValue}`);
        }
      }
    }
  };

  const customStyles = {
    placeholder: (provided, state) => ({
      ...provided,
      textAlign: 'center'
    }),
  };

  return (
    <div>
      <Select
        className={style.selectBar}
        ref={inputRef}
        value={selectedOption}
        onChange={setSelectedOption}
        onInputChange={handleInputChange}
        options={sortOptions}
        isSearchable
        placeholder="¿Qué te interesa aprender?"
        onFocus={handleInputFocus}
        onBlur={handleMenuClose}
        menuIsOpen={isMenuOpen}
        components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }}
        onKeyDown={handleKeyDown}
        styles={customStyles}
      />
    </div>
  );
}

export default ToSearchPage;