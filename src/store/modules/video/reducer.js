import produce from 'immer';

const INITIAL_STATE = {
  muted: false,
};
export default function video(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@video/CACHE_VIDEO': {
        draft.muted = action.payload.muted;
        break;
      }
      default:
    }
  });
}
