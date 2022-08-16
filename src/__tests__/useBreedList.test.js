/**
 * @jest-environment jsdom
 */
import { expect, test } from "@jest/globals";
import { render } from "@testing-library/react";
import { renderHook, act } from "@testing-library/react-hooks";
import useBreedList from "../useBreedList";
import fetch from "jest-fetch-mock";

// using @testing-library/react-hooks for testing custom hook
// testing for no item
test("gives an empty list with no animal", () => {
  const { result } = renderHook(() => useBreedList(""));
  // extracting the array with values from result.current.
  const [breedList, status] = result.current;
  // breedList should be empty.
  expect(breedList).toHaveLength(0);
  // status should have "unloaded"
  expect(status).toBe("unloaded");
});

// testing using jest-fetch-mocktest(
test("gives back breeds with an animal", async () => {
  const breeds = [
    "Havanese",
    "German Shepherd",
    "Dachshund",
    "French Bulldog",
    "Labrador",
    "Husky",
    "Shih Tzu",
    "Pit Bull",
    "Jack Russel Terrier",
    "Boxer",
    "Dalmation",
    "Pekingese",
    "Weimaraner",
    "Australian Shepherd",
    "Goldendoodle",
    "Wheaten Terrier",
  ];
  fetch.mockResponseOnce(
    JSON.stringify({
      animal: "dog",
      breeds: breeds,
    })
  );

  const { result, waitForNextUpdate } = renderHook(() => useBreedList("dog"));
  // waitForNextUpdate will return a promise.
  await waitForNextUpdate();

  const [breedList, status] = result.current;
  expect(status).toBe("loaded");
  expect(breedList).toEqual(breeds);
});
