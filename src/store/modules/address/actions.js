export function saveAddress(address, number, compl, city, UF, CEP) {
  return {
    type: '@address/SAVE_ADDRESS',
    payload: { address, number, compl, city, UF, CEP },
  };
}
