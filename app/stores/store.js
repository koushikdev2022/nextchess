import { configureStore } from "@reduxjs/toolkit"
import AuthSlice from "../Reducer/AuthSlice"
import PlanSlice from "../Reducer/PlanSlice"
const store = configureStore(
    {
        reducer: {
            auth: AuthSlice,
            plan: PlanSlice,
        }
    }
)
export default store