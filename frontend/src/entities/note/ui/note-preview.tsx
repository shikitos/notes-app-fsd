import { memo } from 'react';

type Props = {
  title: string;
  content: string;
};

export const NotePreview = memo(function NotePreview({ title, content }: Props) {
  return (
    <article className="flex flex-col gap-2 rounded-md border p-4 shadow-sm">
      <h1 className="text-xl font-bold">{title}</h1>
      <p className="text-gray-700">{content}</p>
    </article>
  );
});
