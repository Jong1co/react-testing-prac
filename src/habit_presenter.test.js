import HabitPresenter from "./habit_presenter";

describe("HabitPresenter", () => {
  const habits = [
    { id: 1, name: "Reading", count: 0 },
    { id: 2, name: "Running", count: 0 },
    { id: 3, name: "Coding", count: 0 },
  ];

  let presenter;
  let update;

  beforeEach(() => {
    presenter = new HabitPresenter(habits);
    update = jest.fn();
  });

  it("increment", () => {
    presenter.increment(habits[0], update);
    expect(presenter.getHabits()[0].count).toBe(1);
    expect(update).toHaveBeenCalledTimes(1);
  });

  it("decrement", () => {
    presenter.decrement(habits[0], update);
    presenter.decrement(habits[0], update);
    presenter.decrement(habits[0], update);
    presenter.decrement(habits[0], update);
    expect(presenter.getHabits()[0].count).toBe(0);
  });
});
