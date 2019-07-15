#Drone Racing 
##(Start up)
```
npm install
```
### Backend
After including all the necessay modules for running the code. Lets run the backend FIRST. Open the first terminal:

```
cd src
node tello.js
```

### Frontend
This will open the backend that will recieve the information from the frontend and communicate commands to the drone.  Next, we will open the front end (so you would need 2 terminals for opening the race):

``` 
npm run start
```

If buttons do not load properly:

```
cd src
npm run start
```
### Electron
Electron is UI that loads the program into a well developed web-application

```
npm run electron
```


##(Potential Changes)

```
const frequency
```
+ this is a variable that controls how quickly commands are being sent to the drone and engagement is being checked by the program.
	+ Ideal time: 3.5 s

```
let amplitude
```
+ this variable correlates to the height of which the drone is going