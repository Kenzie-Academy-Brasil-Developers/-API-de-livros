export const firstBookMock = () => {
   const date = new Date();

   return {
      id: 1,
      name: "Harry Potter",
      pages: 325,
      category: "fantasia",
      postBooksdAt: date,
      updateBookdAt: date,
   };
};

export const secondBookMock = () => {
   const date = new Date();

   return {
      id: 2,
      name: "Jogos Vorazes",
      pages: 325,
      category: "fantasia",
      postBooksdAt: date,
      updateBookdAt: date,
   };
};
