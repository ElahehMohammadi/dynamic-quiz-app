export default defineNuxtPlugin(() => {
  if (process.client) {
    // Only import Bootstrap JS on the client-side
    import("bootstrap/dist/js/bootstrap.js");
  }
});
