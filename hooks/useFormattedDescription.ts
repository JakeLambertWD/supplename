export const useFormattedDescription = (description: string) => {
  const workDescription = description.replace(/\s+/g, "-").toLowerCase();

  return workDescription;
};
