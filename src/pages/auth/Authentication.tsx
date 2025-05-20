import { BackgroundBeamsWithCollision } from "../../components/ui/background-beams-with-collisions";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";
import { Login } from "./Login";
import { Signup } from "./Signup";

const Authentication = () => {
  return (
    <BackgroundBeamsWithCollision className="h-screen grid grid-cols-2">
      <div className="hidden md:block">
        <img src="public/auth-back.jpg" className="h-screen "  />
      </div>

      <div className="h-screen col-span-2 md:col-span-1 flex justify-center items-center ">
        <Tabs defaultValue="login" className="w-[300px] sm:w-[400px] h-[620px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger
              value="login"
              className="cursor-pointer rounded-xl text-white bg-neutral-900 data-[state=active]:bg-black/70 data-[state=active]:border-2 data-[state=active]:border-purple-500 px-2 mr-2"
            >
              Login
            </TabsTrigger>
            <TabsTrigger
              value="signup"
              className="cursor-pointer rounded-xl text-white bg-neutral-900 data-[state=active]:bg-black/70 data-[state=active]:border-2 data-[state=active]:border-purple-500 px-2 ml-2"
            >
              Signup
            </TabsTrigger>
          </TabsList>

          <TabsContent value="login">
            <Login />
          </TabsContent>
          <TabsContent value="signup">
            <Signup />
          </TabsContent>
        </Tabs>
      </div>
    </BackgroundBeamsWithCollision>
  );
};

export default Authentication;
