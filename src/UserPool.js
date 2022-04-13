import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "eu-central-1_yJANXAIEa",
    ClientId: "kraigedmr0kocifghkn6uvvn5"
   
    
}

export default new CognitoUserPool(poolData);