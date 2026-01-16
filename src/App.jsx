import Card from './components/Card.jsx';
import './App.css'
import Footer from './components/Footer.jsx';
import {Button} from './components/ui/button.tsx';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "./components/ui/navigation-menu.tsx";
function App() {
  return (
    <>
        <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>Link</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
      <h1>Learn Everyday Something New</h1>
      <p>it will be fun</p>
      <p className="inline-block mt-8 mb-8 w-fit px-2 py-1 border rounded-xl ">Added the tailwind css to this </p>
      <div>
        <button className="bg-cyan-500 shadow-lg shadow-cyan-500/50">Experiment</button>
      </div>
      <Card title="The Globe"/>
      <Card title="World Map"/>
      <Card />
      <Footer/>
      <Button variant="ghost">Click me </Button>
    </>
  );
}

export default App
