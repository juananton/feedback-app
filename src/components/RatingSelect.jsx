function RatingSelect({ select, selected }) {
  const handleChange = e => {
    select(+e.currentTarget.value);
  };

  return (
    <ul className='rating'>
      {[1, 2, 3, 4, 5].map(num => (
        <li key={num}>
          <input
            type='radio'
            id={`num${num}`}
            name='rating'
            value={num}
            onChange={handleChange}
            checked={selected === num}
          />
          <label htmlFor={`num${num}`}>{num}</label>
        </li>
      ))}
    </ul>
  );
}

export default RatingSelect;
