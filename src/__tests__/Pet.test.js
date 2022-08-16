import { expect, test } from "@jest/globals";
import { render } from "@testing-library/react";
import { StaticRouter } from "react-router-dom/server";
import Pet from "../Pet";
/**
Alternatively, you can use async and await in your tests. To write an async test, use the async keyword in front of the function passed to test.
 */
test("displays a default thumbnail", async () => {
  // rendering our component
  const pet = render(
    <StaticRouter>
      <Pet />
    </StaticRouter>
  );
  // find by data-testid attribut in Pet component
  const petThumbnail = await pet.findByTestId("thumbnail");
  // expect() indiates the expected outcome
  // The expect function is used every time you want to test a value.
  // Use .toContain when you want to check that an item is in an array.
  expect(petThumbnail.src).toContain("none.jpg");
});

test("displays a non-default, correct thumbnail", async () => {
  // rendering our component
  const pet = render(
    <StaticRouter>
      <Pet images={["1.jpg", "2.jpg", "3.jpg"]} />
    </StaticRouter>
  );
  // find by data-testid attribut in Pet component
  const petThumbnail = await pet.findByTestId("thumbnail");
  expect(petThumbnail.src).toContain("1.jpg");
});
