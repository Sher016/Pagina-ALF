import { useState } from 'react';
import { getCountries, getCountryCallingCode } from 'react-phone-number-input';

export type CountryCode = Parameters<typeof getCountryCallingCode>[0];

export interface PhoneInputProps {
  value: string;
  onChange: (value: string) => void;
}

export const COUNTRIES = getCountries().map(country => ({
  code: country,
  calling: `+${getCountryCallingCode(country)}`,
  flag: country.toUpperCase().replace(/./g, c =>
    String.fromCodePoint(127397 + c.charCodeAt(0))
  ),
}));

export function usePhoneInput(onChange: (value: string) => void) {
  const [country, setCountry] = useState<CountryCode>('CO');

  const calling = `+${getCountryCallingCode(country)}`;
  const flag = country.toUpperCase().replace(/./g, c =>
    String.fromCodePoint(127397 + c.charCodeAt(0))
  );

  const handleNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/\D/g, '');
    onChange(`${calling}${raw}`);
  };

  const handleCountry = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const c = e.target.value as CountryCode;
    setCountry(c);
    onChange(`+${getCountryCallingCode(c)}`);
  };

  return { country, calling, flag, handleNumber, handleCountry };
}