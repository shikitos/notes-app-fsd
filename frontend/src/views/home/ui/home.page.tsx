import { CreateNewNote } from 'widgets/create-new-note';

export const HomePage = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <h1>Welcome to the Home page</h1>
      <CreateNewNote />
    </div>
  );
};
