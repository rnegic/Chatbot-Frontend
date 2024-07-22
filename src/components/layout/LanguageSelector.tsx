import { useState } from 'react';

function Select() {
  const [selectedLanguage, setSelectedLanguage] = useState('');

  const handleChange = (event: any) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <div className="relative inline-block text-left">
      <select
        value={selectedLanguage}
        onChange={handleChange}
        className="w-18 h-10 bg-selectBg rounded-xl text-textColorLight border-none sm:w-32 appearance-none px-4 py-2 pr-8 outline-none"
      >
        <option value="english">English</option>
        <option value="russian">Russian</option>
        <option value="ossetian">Ossetian</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 bg-selectBg text-textColorLight rounded-xl">
        <svg className="fill-current h-4 w-4 bg-selectBg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
      </div>
    </div>
  );
}

export default Select;