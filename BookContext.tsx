import React, { createContext, useState } from 'react';
import { Book } from './BookAdd';

interface BookProviderProps {
  children: React.ReactNode;
}
const BookContext = createContext<[Book[], React.Dispatch<React.SetStateAction<Book[]>>]>([[], () => {}]);

const BookProvider = ({ children }: BookProviderProps) => {
  const [books, setBooks] = useState<Book[]>([]);

  return (
    <BookContext.Provider value={[books, setBooks]}>
      {children}
    </BookContext.Provider>
  );
};

export {BookContext, BookProvider};
