import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import UserInfoComponent from "../components/profile/UserInfo.components";

let container:any = null;

beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders user data", async () => {
  const fakeUser = {
    name: "",
    age: "32",
    address: "123, Charming Avenue"
  };
  /* 
  jest.spyOn(UserInfoComponent, "fetchUserData").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeUser)
    })
  ); */

  // Use the asynchronous version of act to apply resolved promises
  await act(async () => {
    render(<UserInfoComponent  />, container);
  });

  expect(container.querySelector('#email').textContent).toBe("benslamasouheil@gmail.com");
  expect(container.querySelector("strong").textContent).toBe(fakeUser.age);
  expect(container.textContent).toContain(fakeUser.address);

  // remove the mock to ensure tests are completely isolated
  /* global.fetch.mockRestore(); */
});