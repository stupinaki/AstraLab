import {delay} from "@/helpers/delay.js";

function responseFromBack() {
    return {
        userName: 'John Doe',
        isSuccess: true,
    }
}

export function authorization() {
    return delay(responseFromBack, 1000);
}
