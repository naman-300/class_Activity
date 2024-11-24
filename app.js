new Vue({
    el: '#app',
    data: {
      newTask: '', // For binding the input field
      tasks: [
        { name: 'Learn Vue.js basics', completed: false },
        { name: 'Build a small app', completed: false },
      ],
    },
    methods: {
      addTask() {
        if (this.newTask.trim() !== '') {
          this.tasks.push({ name: this.newTask, completed: false });
          this.newTask = ''; // Clear input
        }
      },
      markComplete(index) {
        this.tasks[index].completed = !this.tasks[index].completed;
      },
      deleteTask(index) {
        this.tasks.splice(index, 1); // Remove task from array
      },
    },
  });
  