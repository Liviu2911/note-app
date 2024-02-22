import PocketBase from "pocketbase"

export const pb = new PocketBase("http://127.0.0.1:8090")
export let currentUser = pb.authStore.model

pb.authStore.onChange(auth => {
  console.log(`auth store changed`, auth)
  currentUser = pb.authStore.model
  console.log(currentUser)
})
