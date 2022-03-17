import {CognitoUserPool} from "amazon-cognito-js";

const pooldata={
    UserPoolId: "us-east-1_DvfkrqCoy",
    ClientId: "1a0hk0tr609pdnhcmq8hrtv9ug"
}

export default new CognitoUserPool(pooldata);