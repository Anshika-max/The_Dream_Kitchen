// VITE_API_URL=http://localhost:8000/api/v1

let IS_PROD = true;
const server = IS_PROD 

    ?

    "https://the-dream-kitchenbackend.onrender.com" 
    
    :

    "http://localhost:8000"


export default server;