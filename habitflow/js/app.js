let habits = Storage.getHabits();

const addBtn = document.getElementById("add-btn");
const habitName = document.getElementById("habit-name");
const themeToggle = document.getElementById("theme-toggle");

UI.renderHabits(habits);

// Adicionar hábito
addBtn.addEventListener("click", () => {
    const name = habitName.value.trim();
    if (!name) return alert("Digite um hábito válido!");

    habits.push({ name, done: false });
    Storage.saveHabits(habits);
    UI.renderHabits(habits);
    habitName.value = "";
});

// Marcar como concluído
document.getElementById("habits").addEventListener("click", (e) => {
    if (e.target.classList.contains("complete-btn")) {
        const index = e.target.dataset.index;
        habits[index].done = !habits[index].done;
        Storage.saveHabits(habits);
        UI.renderHabits(habits);
        updateChart();
    }
});

// Alternar tema
themeToggle.addEventListener("click", () => {
    const isDark = document.body.getAttribute("data-theme") === "dark";
    document.body.setAttribute("data-theme", isDark ? "light" : "dark");
    themeToggle.textContent = isDark ? "🌙" : "☀️";
});

// Gráfico de progresso (Chart.js)
const ctx = document.getElementById("progressChart");
let chart = new Chart(ctx, {
    type: "doughnut",
    data: {
        labels: ["Concluídos", "Pendentes"],
        datasets: [
            {
                data: [0, 0],
                backgroundColor: ["#4b9ce2", "#ccc"],
            },
        ],
    },
});

function updateChart() {
    const done = habits.filter((h) => h.done).length;
    const pending = habits.length - done;
    chart.data.datasets[0].data = [done, pending];
    chart.update();
}

updateChart();
