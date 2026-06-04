import './PhoneInputCustom.css';
import { usePhoneInput, COUNTRIES } from './PhoneInputCustom.hook';
import type { PhoneInputProps } from './PhoneInputCustom.hook';

export function PhoneInputCustom({ value, onChange }: PhoneInputProps) {
  const { calling, flag, handleNumber, handleCountry, country } = usePhoneInput(onChange);

  const numberOnly = value.startsWith(calling) ? value.slice(calling.length) : '';

  return (
    <div className="phone-input">
      <div className="phone-country">
        <span className="phone-flag">{flag}</span>
        <span className="phone-calling">{calling}</span>
        <span className="phone-arrow">▾</span>
        <select value={country} onChange={handleCountry} className="phone-select">
          {COUNTRIES.map(c => (
            <option key={c.code} value={c.code}>
              {c.calling}
            </option>
          ))}
        </select>
      </div>

      <input
        type="tel"
        placeholder="Telefono"
        value={numberOnly}
        onChange={handleNumber}
        className="phone-number-input"
        maxLength={15}
        required
      />
    </div>
  );
}