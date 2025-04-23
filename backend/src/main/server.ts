import 'reflect-metadata';
import app from "./app";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 3100;

app.listen(PORT, (err: unknown) => {
  const error = err as Error;  
  console.log(`\n► Server running on http://localhost:${PORT}`);
  console.error(error ? error.message : '► All makes fine with HTTP Server ');  
},);

