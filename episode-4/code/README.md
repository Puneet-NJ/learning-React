1. Restaurent app design

/\*\*\*\*

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
- \*/

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
