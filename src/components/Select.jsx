import { data } from "../data/data";

export default function Select({ handleChange }) {
  const selectEl = Object.entries(data).map(([key, value]) => (
    <div key={key} className="form__inner-wrapper">
      <label htmlFor={key}>Select a {key}</label>
      <select name={key} id={key} onChange={handleChange}></select>
    </div>
  ));

  return <>{selectEl}</>;
}
