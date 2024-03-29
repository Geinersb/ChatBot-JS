const responseObj = {
    hola: "Hola! Espero que estes bien",
    hey: "Hey! Pura Vida",
    fecha: new Date().toDateString(),
    hora: new Date().toLocaleTimeString()
    };
    
    const fetchResponse = (userInput)=>{
        return new Promise((res, reject)=>{
            try {
                setTimeout(() => {
                    res(responseObj[userInput]);
                }, 800);
                
            } catch (error) {
                reject(error);
            }
        });

        
    }

    const chatBotService = {
        getBotResponse(userInput){
           return fetchResponse(userInput);
        }
    }

    export default chatBotService;