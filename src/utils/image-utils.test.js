import { getImageURL } from "./image-utils";

describe("getImageURL", () => {
  it("should return the correct image URL", () => {
    const url = getImageURL("test-image.jpg");
    expect(url).toContain("/img/test-image.jpg");
  });
});
