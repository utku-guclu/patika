import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from ".";

describe("Counter Tests", () => {
  let increaseBtn, decreaseBtn, count;

  test("Increase btn", () => {
    render(<Counter />);
    count = screen.getByText("0");
    increaseBtn = screen.getByText("+");
    decreaseBtn = screen.getByText("-");
    userEvent.click(increaseBtn);
    expect(count).toHaveTextContent("1");
  });

  test("Decrease btn", () => {
    render(<Counter />);
    count = screen.getByText("0");
    increaseBtn = screen.getByText("+");
    decreaseBtn = screen.getByText("-");
    userEvent.click(decreaseBtn);
    expect(count).toHaveTextContent("-1");
  });
});
