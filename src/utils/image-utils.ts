function getImageURL(fileName: string) {
  return new URL(`../../img/${fileName}`, import.meta.url).href;
}

export { getImageURL };
