// Responsável por salvar e recuperar dados do localStorage

const Storage = {
    getHabits() {
        return JSON.parse(localStorage.getItem("habits")) || [];
    },

    saveHabits(habits) {
        localStorage.setItem("habits", JSON.stringify(habits));
    },
};
