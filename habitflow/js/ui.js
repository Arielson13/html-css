// Responsável apenas pela manipulação do DOM

const UI = {
    renderHabits(habits) {
        const list = document.getElementById("habits");
        list.innerHTML = "";

        habits.forEach((habit, index) => {
            const li = document.createElement("li");
            li.classList.add("habit-item");
            li.innerHTML = `
        <span>${habit.name}</span>
        <button data-index="${index}" class="complete-btn">
          ${habit.done ? "✅" : "Concluir"}
        </button>
      `;
            list.appendChild(li);
        });
    },
};
