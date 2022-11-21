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

    expect(presenter.getHabits()[0].count).toBe(0);
  });

  it("delete", () => {
    presenter.delete(habits[0], update);

    expect(presenter.getHabits()[0].name).toBe("Running");
    expect(presenter.getHabits().length).toBe(2);
  });

  it("add", () => {
    presenter.add("playing", update);

    expect(presenter.getHabits().length).toBe(4);
    expect(presenter.getHabits()[3].name).toBe("playing");
    expect(presenter.getHabits()[3].count).toBe(0);
  });

  describe("reset", () => {
    it("reset all habit counts to 0 ", () => {
      presenter.reset(update);

      expect(presenter.getHabits()[0].count).toBe(0);
      expect(presenter.getHabits()[1].count).toBe(0);
      expect(presenter.getHabits()[2].count).toBe(0);
    });

    it("does not create new object when count is 0", () => {
      const habits = presenter.getHabits();
      presenter.reset(update);
      const updateHabits = presenter.getHabits();

      expect(habits[0]).toBe(updateHabits[0]);
    });
  });
});
