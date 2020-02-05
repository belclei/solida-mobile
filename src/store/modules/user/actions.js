export function updateUserState(user) {
  return {
    type: '@user/UPDATE_STATE',
    payload: { user },
  };
}
