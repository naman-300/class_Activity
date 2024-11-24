### **README.md**

# Vue.js To-Do List Application

This project is a simple **To-Do List Application** built with Vue.js. The goal is to help students learn core Vue.js concepts, such as:

- Two-way data binding using `v-model`.
- Event handling with `@click`.
- Conditional rendering with `v-if` and `v-bind`.
- Iterating over lists with `v-for`.

---

## **Getting Started**

Follow these instructions to set up the project and participate in the activity.

---

### **Prerequisites**

You’ll need the following tools installed:
- A web browser (Google Chrome, Firefox, or Edge recommended).
- A code editor (e.g., Visual Studio Code).
- A basic understanding of HTML, CSS, and JavaScript.

---

### **Instructions**

#### **Step 1: Download the Project Files**
1. Download the provided files:
   - `index.html`
   - `app.js`

2. Save them in the same directory.

---

#### **Step 2: Run the Application**
1. Open `index.html` in your browser.
2. The Vue.js To-Do List app will load, showing the following:
   - An input box to add new tasks.
   - A list of tasks with "Mark Complete" and "Delete" buttons.

---

#### **Step 3: Understand the Code**
1. Open `app.js` in your code editor.
2. Review the following:
   - **Vue Instance**:
     - Links the application to the `#app` div in `index.html`.
   - **Data Binding**:
     - The `newTask` variable is connected to the input box using `v-model`.
   - **Event Handling**:
     - The `addTask`, `markComplete`, and `deleteTask` methods are triggered by `@click` directives.
   - **Dynamic Rendering**:
     - Tasks are rendered dynamically with `v-for` and styled conditionally with `v-bind:class`.

---

#### **Step 4: Activity Tasks**

1. **Add a Feature**:
   - Add a button to clear all tasks.
   - Hint: Create a new method called `clearAllTasks` and use `this.tasks = []` to reset the task list.

2. **Debug the App**:
   - If the delete button doesn't work, debug the `deleteTask(index)` function in the `methods` section.

3. **Styling Challenge**:
   - Update the CSS in `index.html` to make completed tasks visually distinct (e.g., add a background color).

4. **Advanced Challenge**:
   - Add an "Edit Task" feature. When clicking a task, replace the text with an input field to update the task.

---

### **How to Customize**
- Add more functionality:
  - Persist tasks using `localStorage` (Bonus for advanced learners).
  - Add animations for adding/deleting tasks using Vue's transition features.

---

### **Useful Links**
- [Vue.js Documentation](https://vuejs.org/guide/introduction.html)
- [Online Vue.js Playground](https://play.vuejs.org/)

---

### **Troubleshooting**
- If the app doesn’t load:
  1. Make sure the `index.html` and `app.js` files are in the same directory.
  2. Check the browser console for errors.

---

### **Conclusion**

By completing this activity, you will:
- Understand the fundamentals of Vue.js.
- Gain experience working with reactive data and event-driven programming.
- Build confidence in developing interactive user interfaces.