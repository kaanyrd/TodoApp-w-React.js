import { TodoProvider } from "./context/TodoContext";
import { ThemeProvider } from "./context/ThemeContext";
import Container from "./components/Container";
import "./App.css"



function App() {
  return (
    // 2 CONTEXT AND 1 CONTAINER. THERE ARE OTHER COMPONENTS IN THE CONTAINER COMPONENTS
    <ThemeProvider>
      <TodoProvider>
        <Container></Container>
      </TodoProvider>
    </ThemeProvider>
  );
}

export default App;
