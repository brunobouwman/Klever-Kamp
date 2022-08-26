const shortAddress = (address: string, size = 4) => {
  if (!address?.length) {
    return "";
  }
  const prefix = address.substring(0, size);
  const suffix = address.substring(address.length - size, address.length);

  return `${prefix}...${suffix}`;
};

export { shortAddress };
