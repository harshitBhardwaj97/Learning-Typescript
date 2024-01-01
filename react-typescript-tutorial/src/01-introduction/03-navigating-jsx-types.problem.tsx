export const Component = () => {
  function handleChange() {}

  return (
    <div
      // How do I figure out what type aria-posinset expects?
      aria-posinset={1} // => By hovering over aria-posinet we find that it expects number | undefined
      // How do I figure out what type onChange expects?
      onChange={handleChange} // => By hovering over onChange we find that it expects React.FormEventHandler<HTMLDivElement> | undefined

      // How do I get autocomplete with JSX? => Ctrl+Space
    />
  );
};
