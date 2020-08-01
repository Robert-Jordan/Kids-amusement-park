export const callApiMock = (response:any, apiCallback:any) => () => {
    apiCallback();
    return new Promise((resolve) => {
      resolve(response);
    });
  };
  