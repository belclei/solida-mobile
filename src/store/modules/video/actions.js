export function cacheVideo(muted) {
  return {
    type: '@video/CACHE_VIDEO',
    payload: { muted },
  };
}
