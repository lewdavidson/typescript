class Task {
  done: boolean = false;

  constructor(public description: string, public priority: string) {}

  markDone() {
    this.done = true;
  }
}

var tasks: Task[] = [];
tasks.push(new Task('Do the dishes.', 'Medium'));
tasks.push(new Task('Buy Chocolate', 'Low'));
tasks.push(new Task('Do laundry', 'High'));

tasks[0].markDone();


for(var task of tasks) {
  console.log(task);
}


//by assigning parameters as public, you eliminate the need to define them in your object or constructor.You don't have to include the "done statement in constructor AND up above either."
