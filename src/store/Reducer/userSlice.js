import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    onAuthStateChanged
} from "firebase/auth";
import { toast } from 'react-toastify';
import { auth } from "../../utils/firebase";

export const registerUser = createAsyncThunk(
    'auth/register',
    async ({ auth, email, password }, { rejectWithValue }) => {
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            console.log('response', response);
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    });

export const loginUser = createAsyncThunk(
    'auth/login',
    async ({ data, navigate, toast }, { rejectWithValue }) => {
        try {
            const { auth, email, password } = data;
            console.log('auth', auth);
            console.log('email', email);
            console.log('password', password);

            const response = await signInWithEmailAndPassword(auth, email, password);
            // toast(response);
            navigate('/browse')
            return response.user;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    })

export const validateUser = createAsyncThunk(
    'auth/validate',
    async (_, { rejectWithValue }) => {
        console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ $$$$$$$$$$$$$$$$$$$',);
        try {
            const user = await new Promise((resolve, reject) => {
                onAuthStateChanged(auth, (user) => {
                    resolve(user);
                });
            });

            if (user) {
                const { uid, email, displayName, photoURL } = user;
                return { uid, email, displayName, photoURL };
            } else {
                return null;
            }
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const userSlice = createSlice({
    name: 'counter',
    initialState: {
        user: null,
        status: 'idle',
        error: null,
    },
    reducers: {
        clearUser(state) {
            state.user = null;
        },
        removeUser: (state, action) => {
            return null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state, action) => {
                console.log('registerUser pending state', state);
                console.log('registerUser pending action', action);
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                console.log('registerUser fulfilled state', state);
                console.log('registerUser fulfilled action', action);
            })
            .addCase(registerUser.rejected, (state, action) => {
                console.log('registerUser rejected state', state);
                console.log('registerUser rejected action', action);
            }).addCase(loginUser.pending, (state, action) => {
                console.log('loginUser pending state', state);
                console.log('loginUser pending action', action);
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                console.log('loginUser fulfilled state', state);
                console.log('loginUser fulfilled action', action);
                // state.action.meta.arg.navigate('/browse');
                // state.status = 'succeeded';
                // state.user = action.payload.user;
            })
            .addCase(loginUser.rejected, (state, action) => {
                console.log('loginUser rejected state', state);
                console.log('loginUser rejected action', action);
            })
            .addCase(validateUser.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(validateUser.fulfilled, (state, action) => {
                console.log('state',state);
                console.log('action',action);

                state.status = 'succeeded';
                // state.user = action.payload.user;
            })
            .addCase(validateUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });

    }

})

export default userSlice.reducer;

export const { clearUser, removeUser } = userSlice.actions; 