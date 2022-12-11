import { TodoProvider } from "./context/TodoContext";
import { ThemeProvider } from "./context/ThemeContext";
import Container from "./components/Container";
import "./App.css"



function App() {
  return (
    <ThemeProvider>
      <TodoProvider>
        <Container></Container>
      </TodoProvider>
    </ThemeProvider>
  );
}

export default App;
