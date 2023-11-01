// import express, { Request, Response } from 'express';

// const app = express();
// app.use(express.json());

// const useMongoDB = true;

// const startApp = async () => {
//   const dataService = useMongoDB ? await import('./MongoDB/app') : await import('./MySQL/src/app');
//   const configuredApp = dataService.default();

//   // Assuming the app object is exported from app.ts in both MongoDB and MySQL folders
//   app.use(configuredApp);

//   const PORT = process.env.PORT || 3000;
//   app.listen(PORT, () => {
//     console.log(`API Gateway is running on http://localhost:${PORT}`);
//   });
// };

// startApp().catch((err) => {
//   console.error('Error starting the API Gateway:', err.message);
//   process.exit(1);
// });
