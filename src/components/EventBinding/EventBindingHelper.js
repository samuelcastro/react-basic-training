// An easy to test and work it curried function ;)
export const changeNameCurry = context => ({ target: { value } }) => {
  context.setState({
    name: value
  });
};
