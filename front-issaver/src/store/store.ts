import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import { RootReducer } from './root-reducer'
const MakeStore = () =>
  configureStore({
    reducer: RootReducer,
    devTools: true,
  })

export type AppStore = ReturnType<typeof MakeStore>
export type AppState = ReturnType<AppStore['getState']>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>
export const Wrapper = createWrapper<AppStore>(MakeStore)
