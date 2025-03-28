'use client';

import { useCreateNoteButton } from '../model';

export const CreateNoteButton = () => {
  const { handleClick } = useCreateNoteButton();

  return (
    <button onClick={handleClick} className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
      Create Note
    </button>
  );
};
