export const getFbPageIFrameURL = (isMediumScreen) => {
  const url = "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100057141112887&tabs=timeline&width=500&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId";
  const parsedURL = new URL(url);
  const params = Object.fromEntries(parsedURL.searchParams);
  if (!isMediumScreen) {
    params.width = '350';
    params.height = '500';
  }

  return `${parsedURL.origin}${parsedURL.pathname}?${updateURLParameters(parsedURL.search, params)}`;
}

const updateURLParameters = (url, params) => {
  const searchParams = new URLSearchParams(url);
  Object.entries(params).forEach(([key, value]) => {
    searchParams.set(key, value);
  });
  return searchParams.toString();
};