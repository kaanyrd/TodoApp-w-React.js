import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import ContentFooter from "./components/ContentFooter/ContentFooter";
import Footer from "./components/Footer/Footer";
import { TodoProvider } from "./context/TodoContext";




function App() {
  return (
    <TodoProvider>
      <section className="todoapp">
        <Header />
        <Content />
        <ContentFooter />
      </section>
      <Footer />
    </TodoProvider>
  );
}

export default App;
