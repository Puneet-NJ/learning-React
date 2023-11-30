1. Restaurent app design

-
- What I want to create?
-
- - Header
-      -Logo
-      -nav-links
- - Body
-      -Search
-      -Restaurent container
-          -Restaurent card
-              -img
-              -restaurent-name
-              -cuisine
-              -rating
-              -delivery-time
- - Footer
-      -Copyright
-      -Links
-

2. Two types of exports:
   => default
   => named

3. Using normal js variables only data gets updated not ui
   hence use react hooks(updates both).

   What is react hook? A normal js utility function.
   eg: useState() gives access to state variables

4. Whenever a state variable is updated react rerenders the component

5. There are 2 ways to render data onto our app
   ==> Reload -> callAPI -> Render
   ==> Reload -> Render -> callAPI -> Render

   The 2nd way is preferred and how do I do that? useEffect hook.

6. useEffect takes a callback function and is called only after the component
   is rendered, how many times it is going to render depends on the 2nd arguement
   dependency array.

   useEffect(() => {
   console.log("useEffect called");
   }, []);

   Dependency array:
   i) If no dependency array is given => callback function is called on
   every render.
   ii) If [] is given => callback function is called only on initial render
   iii) If [state_variable] is given => callback function is called only when the
   state_variable is updated.

7. Good practices in order to use useState or hooks:

   # Don't use 'em inside conditinal statements, loops or even inside functions.

   # CANNOT use 'em outside components.

8. Routers in react:
   To have routes to all the the sections of website we use routers
   a) npm i react-router-dom
   b) To setup different path you first need to setup route configuration
   import createBrowserRouter
   c) You will also need a RouterProvider component which will help us to render.
   d) You can create your own error page using errorElement property.
   For more defined errors you can use useRouteError.

   Want to render about/contactUs/Home after Header, how do I do that?
   i) directly import Header in each Component render before everything.
   ii) create children routes ==> Render Components based on the path,
   how do I do that? Outlet component.

   Link these components with links in Header?
   i) Using <a></a> tags but this is bad bcos it reloads the whole page/component
   (Server side routing)
   ii) Using <Link to=""></Link> tags this doesnot reload the whole page.
   (Client side routing)

   2types of routing: Server side, Client side

   This is the reason why our react apps are a single page apps(Link tag is making
   it SPA, experiment it).

   In our React app sometimes we want to access the parameters of the current route in this case useParams hook comes into action.

9. Maintain Single Responsibility Principle(SRE) but how? using custom hooks.

10. To avoid bloating of your app you need do lazy loading

    Use lazy() method which takes a callback function in which we can use our
    import() method which takes the path of js file to be lazy loaded.

    ex: const File = lazy(() => import("path_of_file/component"));

    This alone wont work because loading this file takes some time hence react ignores
    it. So, we use something known as <Suspense fallback={loading_screen_render}></ Suspense> to wrap around component to be lazy loaded.

Other names for lazy loading:

- Chunking
- Code splitting
- Dynamic Bundling
- lazy loading
- on demand loading
- dynamic import

11. Higher oredred components

12. Build Accordian

13. Controlled and uncontrolled components.
    Controlled components: Components which can be controlled by parent components.
    Uncontrolled components: Components which cannot be controlled by parent components.

14. Lifting the state up.
    Read about it.

15. If I want to have my states two layers inside a component then we can do  
    using props but it becomes tidious as the nesting grows on and this is known as
    props drilling.

    This is could be handled using CONTEXT in React.
    creating => createContext({key: value})
    accessing => const {destructure} = useContext(contextName) // hook
    accessing in class-based components =>
    <contextName.Consumer>
    {({ destructure }) => (
      <h1 className="font-bold ">Username: {val}</h1>
      )}
    </contextName.Consumer>

    Changing my context variables?
    <contextName.Provider value={{ userName: userNameLocal, setUserNameLocal }}>
    Components you want to have the new value
    </contextName.Provider>

    Build an input box wherein you are changing the context variables.
