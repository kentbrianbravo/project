import React, { createContext, useContext, useState } from 'react';
import { Book } from './BookAdd';

interface BookProviderProps {
  children: React.ReactNode;
}
const BookContext = createContext<[Book[], React.Dispatch<React.SetStateAction<Book[]>>]>([[], () => {}]);

const BookProvider: React.FC<BookProviderProps> = ({ children }) => {
  const [books, setBooks] = useState<Book[]>([]);

  return (
    <BookContext.Provider value={[books, setBooks]}>
      {children}
    </BookContext.Provider>
  );
};

export {BookContext, BookProvider};
