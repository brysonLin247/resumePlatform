import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterSlice from "./features/counterSlice";
import globalSlice from "./features/globalSlice";
import movieSlice from "./features/movieSlice";
import resumeSlice from "./features/resumeSlice";
import templateSlice from "./features/templateSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    movie: movieSlice,
    resume: resumeSlice,
    template: templateSlice,
    global: globalSlice,
  }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
