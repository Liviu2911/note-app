# The ultimate todo app

This todo app is not your usual begginer level todo app, but a fullstack one. You migh ask: but what did you use to make a simple todo app? Answear: Next js, tailwind, pocketbase and storybook. It could have been built without Next js, but I really wanted an easy way for adding routes.

### What's this app's purpose?
It servers only one purpose. To contribute to my portfolio. It is your basic todo app with some backend and that's it. Nothing revolutionary or something like that. 

### Why this stack?
Because, if we exclude storybook, it's the most minimal in the React ecosystem that has server components and that has a very easy way of adding routes.

### Storybook and Pocketbase
I said excluding storybook because initially I did not want to add it. I added it because I started to have some problems with Pocketbase. One of the problems was that everytime I changed the code, no matter how great the difference was it would log me out. I still don't know why. The second problem I had with Pocketbase were the api rules. I could not figure out what rules I should've written to display me only the todos the logged in user has. Becasuse of this I had to add a filter function when fetching the todos. Overall, Pocketbase has a great SDK and I really liked using it but I still don't know why it logged me out everytime I changed the code in the slightest or why those api rules didn't work.
