import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'socialPost';

  thoughts :Thought[]= [
      {
          title: "Meatloaf",
          thought: "No, I don't want meat cake with ketchup frosting!"
      },
      {
          title: "Loogie",
          thought: "Oh good. I didn't spit on the floor."
      },
      {
          title: "The Appendix",
          thought: "Almost as useless as the POTUS."
      },
      {
          title: "Anatomy",
          thought: "We're just one looooooooooooong tube."
      },
      {
          title: "Humans",
          thought: "WE ARE THE DISEASE!"
      }
  ]


  addPost()
  {
    let box = document.getElementById("post-form");
    box.style.display = "flex"
  }

  submitPost(TI, TO)
  {
    let newThought = {title: TI, thought: TO};
    this.thoughts.push(newThought);

    let box = document.getElementById("post-form");
    box.style.display = "none"
  }

  deletePost(index)
  {
    this.thoughts.splice(index, 1);
  }
}

export interface Thought
{
    title: string;
    thought: string;
}