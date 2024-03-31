import React from "react";
import "./App.css";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/ui/card";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-primary">
      <div>
        <Card>
          <CardHeader>
            <CardTitle> React - Tailwind - ShadCn template </CardTitle>
            <CardDescription>You can use it.</CardDescription>
          </CardHeader>
          <CardContent className="text-center text-teal-500">
            <p>just clone and use</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default App;
