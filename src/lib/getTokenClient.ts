import { authClient } from "./auth-client"

export const getTokenClient = async () => {
    const { data, error } = await authClient.token()

    const token = data?.token

     return token
}

