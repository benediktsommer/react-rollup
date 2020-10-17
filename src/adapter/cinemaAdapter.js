export const cinemaAdapter = async () => {
 await timeout(3000);

 return [
   {
     latitude: 0.000000,
     longitude: 0.000000,
   },
   {
     latitude: 1.000000,
     longitude: 1.000000,
   },
   {
     latitude: 2.000000,
     longitude: 2.000000,
   }
 ]
};

/* to simulate API fetch */
const timeout = async (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}
