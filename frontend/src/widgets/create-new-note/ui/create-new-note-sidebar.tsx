import { useCreateNoteButton } from 'features/note-creation/model';

type Props = {
  isShrinked: boolean;
};

export const CreateNewNoteSidebar = ({ isShrinked }: Props) => {
  const { handleClick } = useCreateNoteButton();

  return <button onClick={handleClick}>{isShrinked ? '+' : '+ New Note'}</button>;
};
