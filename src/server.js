import app from "./app.js";
import env from "./config/env.js";

const PORT = env.PORT;


app.listen(PORT, function () {
  console.log(`Express server running on port ${PORT}`);
});
