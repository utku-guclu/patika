import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Todo from ".";

describe("Todo Tests", () => {
  let btn, input;

  // beforeEach(()=> {
  //   render(<Todo />)
  //   btn = screen.getByText("ADD");
  //   input = screen.getByLabelText("TEXT");
  // });
  test("default values must be rendered", () => {
    render(<Todo />);
    btn = screen.getByText("ADD");
    input = screen.getByLabelText("Text");
    const items = screen.getAllByText(/Item/i);

    expect(items.length).toEqual(2);
  });
});
