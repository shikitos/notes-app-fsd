export const useCreateNoteButton = () => {
  const handleClick = () => {
    console.log('Create note button clicked');
  };

  return {
    handleClick,
  };
};
