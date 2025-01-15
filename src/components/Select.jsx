import { data } from "../data/data";

export default function Select({ handleChange }) {
  Object.entries(data).map((data) => {
    console.log(data[0]);

    const selectEl = (
      <div className="form__inner-wrapper" key={data[0]}>
        <label htmlFor={data[0]}>Select an emoji category</label>
        <select name={data[0]} id={data[0]} onChange={handleChange}></select>
      </div>
    );

    return selectEl;
  });
}
