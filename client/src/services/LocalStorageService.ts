//todo ________________________LOCAL STORAGE SERVICE __________________________----

//* =========================== store data in local storage
export const storeTokenByValue: Function = (value: string): void => {
  localStorage.setItem('token', value);
};

export const storeTokenByObj: Function = (objParam: object): void => {
  localStorage.setItem('token', JSON.stringify(objParam));
};

//*=========================== get data from local storage
export const getTokenByValue: Function = (): string | null => {
  //! we get null if there is no key in LS with name "token" , so  we use  string | null
  return localStorage.getItem('token');
};

export const getTokenByObj: Function = (): object | null => {
  //! we get null if there is no key in LS with name "token" , so  we use  string | null
  //@ts-ignore
  return JSON.parse(localStorage.getItem('token'));
};

//*=========================== delete data from local storage
export const deleteToken: Function = (): void => {
  localStorage.removeItem('token');
};
