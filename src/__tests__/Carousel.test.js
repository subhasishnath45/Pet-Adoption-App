import { expect, test } from "@jest/globals";
import { render } from "@testing-library/react";

import Carousel from "../Carousel";

test("Lets user click on thumbnails to make them the hero.", async () => {
  const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg"];
  const carousel = render(<Carousel images={images} />);

  const hero = await carousel.findByTestId("hero");
  // first time we're expecting the first image.
  expect(hero.src).toContain(images[0]);
  // we wan to make sure that clicking on each thumbnail image,
  // we will change the large image to that thumbnail image
  for (let i = 0; i < images.length; i++) {
    const image = images[i];
    // will be assiging dynamic data-testid to the thumbnails.
    const thumb = await carousel.findByTestId(`thumbnail${i}`);
    // when we click on the thumbnails.
    thumb.click();
    // we will be expecting the hero.src will contain image.
    expect(hero.src).toContain(image);
    expect(thumb.classList).toContain("active");
  }
});
