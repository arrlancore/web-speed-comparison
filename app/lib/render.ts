export const renderIf = (state: boolean) => (elm: JSX.Element) =>
  state ? elm : null;
