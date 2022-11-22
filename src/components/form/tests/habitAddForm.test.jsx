import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HabitAddForm from "../habitAddForm";
import userEvent from "@testing-library/user-event";
import renderer from "react-test-renderer";

describe("HabitAddForm", () => {
  it("renders", () => {
    const component = renderer.create(<HabitAddForm onAdd={jest.fn()} />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  describe("Form Submit", () => {
    let onAdd;
    let input;
    let button;

    beforeEach(() => {
      onAdd = jest.fn();
      render(<HabitAddForm onAdd={onAdd} />);
      input = screen.getByPlaceholderText("Habit");
      button = screen.getByText("Add2");
    });

    it("calls onAdd when button is clicked", () => {
      userEvent.type(input, "New Habit");
      userEvent.click(button);

      expect(onAdd).toHaveBeenCalledWith("New Habit");
    });

    it("does not call onAdd when the habit is empty", () => {
      userEvent.type(input, "");
      userEvent.click(button);

      expect(onAdd).toHaveBeenCalledTimes(0);
    });
  });
});
