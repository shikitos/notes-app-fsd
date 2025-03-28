import { memo } from 'react';

type Props = {
  content: string;
};

export const NoteCard = memo(function ({ content }: Props) {
  return <article>{content}</article>;
});
