import { data } from "../data/data";

export default function Select({ handleChange }) {
  Object.entries(data).map(([key, value]) => {
    console.log(key);

    const selectEl = (
      <div className="form__inner-wrapper" key={key}>
        <label htmlFor={key}>Select an emoji category</label>
        <select name={key} id={key} onChange={handleChange}></select>
      </div>
    );

    return selectEl;
  });
}
