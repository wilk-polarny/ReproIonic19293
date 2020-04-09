# ReproIonic19293
Repro Code for Ionic Issue 19293

# How to reproduce

- Make sure NodeJS and Ionic, and Cordova tooling is installed: `npm install -g @ionic/cli cordova@latest`
- Checkout repo
- `ionic serve`
- On the tab page, swipe back using the swipe gesture usually known in iOS apps
- Observe that the app navigates to the init page, even though it shouldn't
